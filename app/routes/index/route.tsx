import { redirect, type MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Klinik Aspirasi" },
    { name: "description", content: "Klinik aspirasi" },
  ];
};

export const loader = () => {
  throw redirect("/app");
};

export default function Index() {
  return <Link to="/app">Back to the main page</Link>;
}
