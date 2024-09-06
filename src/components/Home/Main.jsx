import Banner from "./Banner";
import Partners from "./Partners";
import Services from "./Services";
import OurTalents from "./OurTalents";

function Main() {
  return (
    <main>
      <Banner />
      <div className="px-[20px]">
        <Partners />
        <Services />
        <OurTalents />
      </div>
    </main>
  );
}

export default Main;
