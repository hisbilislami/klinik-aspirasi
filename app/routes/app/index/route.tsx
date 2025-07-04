import { getFormProps, useForm } from "@conform-to/react";
import { ActionFunctionArgs } from "@remix-run/node";
import AppCardForm from "~/components/card/app-card-form";
import InputText from "~/components/form/input-text";
import { actionHandler } from "./action";
import { Form, useActionData } from "@remix-run/react";
import { getZodConstraint, parseWithZod } from "@conform-to/zod";
import { formLabel, schema } from "./constant";
import { Button, Textarea, Title } from "@mantine/core";
import { Icon } from "@iconify/react/dist/iconify.js";
import InputDate from "~/components/form/input-date";

export const loader = () => {
  return null;
};

export const action = ({ request }: ActionFunctionArgs) => {
  return actionHandler(request);
};

const MainPage = () => {
  const lastResult = useActionData<typeof action>();

  const [form, fields] = useForm({
    lastResult,
    constraint: getZodConstraint(schema),
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
    onValidate({ formData }) {
      return parseWithZod(formData, { schema });
    },
  });

  return (
    <>
      <Form method="POST" {...getFormProps(form)}>
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
                type="button"
                variant="outline"
                leftSection={<Icon icon="tabler:restore" />}
              >
                Reset
              </Button>
            </div>
          }
        >
          <div className="flex justify-center items-center">
            <Title order={1} className="uppercase text-bill-orange-500">
              Klinik Aspirasi DPRD Kab. Probolinggo
            </Title>
          </div>
          <div className="grid grid-cols-5">
            <div className="p-5 col-span-4 col-start-2 col-end-5">
              <InputText fields={fields} {...formLabel["name"]} />
              <InputDate
                value={new Date()}
                fields={fields}
                {...formLabel["date"]}
              />
              <Textarea
                {...formLabel["report"]}
                autosize
                maxRows={10}
                minRows={5}
              />
            </div>
          </div>
        </AppCardForm>
      </Form>
    </>
  );
};

export default MainPage;
