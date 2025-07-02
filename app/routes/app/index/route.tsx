import AppCardForm from "~/components/card/app-card-form";

export const loader = () => {
  return null;
};

const MainPage = () => {
  return (
    <>
      <form method="post">
        <AppCardForm isForm={true} title="Klinik Aspirasi">
          <div className="grid grid-cols-2">
            <div className="p-5"></div>
          </div>
        </AppCardForm>
      </form>
    </>
  );
};

export default MainPage;
