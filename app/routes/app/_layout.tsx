import { data } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

export const loader = async () => {
  return data({
    ok: true,
    data: { email: "user@gmail.com" } as Record<"email" | "username", string>,
  });
};

export default function AuthenticationLayout() {
  // const { data } = useLoaderData<typeof loader>();

  return (
    <div className="flex h-screen bg-[var(--mantine-color-gray-3)] p-6">
      {/* <div className="h-full max-h-full flex overflow-hidden rounded-2xl bg-white shadow-sm"> */}
      {/*   <Sidebar /> */}
      {/* </div> */}
      <div className="h-full max-h-full flex flex-col overflow-hidden w-full items-center rounded-2xl">
        {/* <Topnavbar username={data.username} email={data.email} /> */}
        <div className="w-full overflow-y-hidden overflow-x-hidden transition-[transform,width] duration-300 rounded-2xl">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
