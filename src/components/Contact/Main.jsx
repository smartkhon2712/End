import Form from "./Form";
import Introduction from "./Introduction";
import Map from "./Map";

function Main() {
  return (
    <main>
      <div class="px-[20px] xl:px-[0px] xl:max-w-[1200px] xl:mx-auto">
        <Introduction />
        <div class="flex flex-col xl:flex-row-reverse gap-[20px] xl:gap-[30px] mb-[60px] xl:mb-[90px]">
          <Map />
          <Form />
        </div>
      </div>
    </main>
  );
}

export default Main;
