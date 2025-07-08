import { getFormProps, useForm } from "@conform-to/react";
import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import AppCardForm from "~/components/card/app-card-form";
import InputText from "~/components/form/input-text";
import { actionHandler } from "./action";
import {
  Form,
  useActionData,
  useLoaderData,
  useNavigate,
} from "@remix-run/react";
import { getZodConstraint, parseWithZod } from "@conform-to/zod";
import { formLabel, schema } from "./constant";
import { Button, FocusTrap, Textarea } from "@mantine/core";
import { Icon } from "@iconify/react/dist/iconify.js";
import InputDate from "~/components/form/input-date";

import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useEffect } from "react";
import { getToast } from "~/utils/toast.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { toast } = await getToast(request);
  return {
    toast,
  };
};

export const action = ({ request }: ActionFunctionArgs) => {
  return actionHandler(request);
};

dayjs.extend(customParseFormat);

const MainPage = () => {
  const lastResult = useActionData<typeof action>();

  const { toast } = useLoaderData<typeof loader>();

  const [form, fields] = useForm({
    lastResult,
    constraint: getZodConstraint(schema),
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
    onValidate({ formData }) {
      return parseWithZod(formData, { schema });
    },
    defaultValue: {
      date: dayjs().format("DD/MM/YYYY"),
    },
  });

  useEffect(() => {
    if (toast?.type === "success") {
      form.reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toast]);

  const navigate = useNavigate();

  return (
    <>
      <Form
        className="h-screen overflow-hidden relative"
        method="POST"
        {...getFormProps(form)}
      >
        <AppCardForm
          isForm={true}
          title=""
          actionButtons={
            <div className="inline-flex gap-2 justify-center w-full">
              <Button
                type="submit"
                leftSection={<Icon icon="tabler:brand-telegram" />}
              >
                Submit
              </Button>
              <Button
                type="reset"
                variant="outline"
                leftSection={<Icon icon="tabler:restore" />}
              >
                Reset
              </Button>
            </div>
          }
        >
          <div className="hisbil flex justify-center items-center">
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
            className="!absolute"
            onClick={() => {
              navigate("/app/lists");
            }}
          >
            <Icon icon="tabler:menu-2"></Icon>
          </Button>
          <div className="grid grid-cols-5">
            <div className="p-5 col-span-4 col-start-2 col-end-5">
              <FocusTrap active={true}>
                <InputText fields={fields} {...formLabel["name"]} />
                <InputDate readOnly fields={fields} {...formLabel["date"]} />
                <Textarea
                  {...formLabel["report"]}
                  autosize
                  maxRows={10}
                  minRows={5}
                />
              </FocusTrap>
            </div>
          </div>
        </AppCardForm>
      </Form>
    </>
  );
};

export default MainPage;
