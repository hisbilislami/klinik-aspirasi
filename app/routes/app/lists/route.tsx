import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "@mantine/core";
import { LoaderFunctionArgs } from "@remix-run/node";
import {
  useFetcher,
  useLoaderData,
  useLocation,
  useNavigate,
  useNavigation,
  useSearchParams,
} from "@remix-run/react";
import AppCardForm from "~/components/card/app-card-form";
import { loaderHandler } from "./loader";
import { useMemo, useState } from "react";
import {
  DataTable,
  DataTablePagination,
  useDataTable,
} from "~/components/table";
import { columns } from "./column";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.extend(timezone);

export const loader = ({ request }: LoaderFunctionArgs) => {
  return loaderHandler(request);
};

export const action = () => {};

const Lists = () => {
  const navigate = useNavigate();

  const { state } = useNavigation();
  const { result } = useLoaderData<typeof loader>();
  const [ignoreLoading] = useState<boolean>(false);

  const [searchParams] = useSearchParams();
  const page = useMemo(() => searchParams.get("page") || 0, [searchParams]);
  const size = useMemo(() => searchParams.get("size") || 10, [searchParams]);

  const fetcher = useFetcher<typeof action>();

  const { table } = useDataTable({
    columns: columns,
    data: result?.data || [],
    count: result?.totalCount || 0,
    isLoading: state !== "idle" && ignoreLoading === false,
    paginationState: {
      pageIndex: Number(page),
      pageSize: Number(size),
    },
  });

  const onSearch = (query: string) => {
    const params = new URLSearchParams(searchParams);

    if (query) {
      params.set("q", query);
    } else {
      params.delete("q");
    }

    navigate(`?${params.toString()}`, { replace: true });
  };

  const location = useLocation();
  const onRefresh = () => {
    const params = new URLSearchParams(location.search);
    params.delete("q");

    fetcher.load(`${location.pathname}?${params.toString()}`);
    navigate(`${location.pathname}?${params.toString()}`, { replace: true });
  };

  const now = dayjs().tz("Asia/Jakarta");

  const start = now.startOf("month").format("YYYY-MM-DD");
  const end = now.endOf("month").format("YYYY-MM-DD");

  return (
    <AppCardForm title="" isForm={false}>
      <div className="flex justify-center items-center mb-5">
        <header className="w-full py-6 px-4 text-center bg-white shadow-sm border-b border-gray-200">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight uppercase">
            <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
              Klinik Aspirasi <br />
              DPRD Kab. Probolinggo
            </span>
          </h1>
        </header>
      </div>
      <Button
        className="!absolute top-4 left-4"
        onClick={() => {
          navigate("/app");
        }}
      >
        <Icon icon="tabler:plus"></Icon>
      </Button>

      <div>
        <Button
          onClick={() =>
            window.open(`/app/report?start=${start}&end=${end}`, "_blank")
          }
        >
          Cetak Laporan Bulanan
        </Button>
        <DataTable
          className="mt-3 w-full"
          columns={columns}
          table={table}
          withAction={false}
          onSearch={onSearch}
          textName="Budget Tracker"
          withSearchField={true}
          onRefresh={onRefresh}
        />
        <DataTablePagination table={table} />
      </div>
    </AppCardForm>
  );
};

export default Lists;
