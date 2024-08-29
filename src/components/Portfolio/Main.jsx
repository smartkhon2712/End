import Introduction from "./Introduction";
import Projects from "./Projects";

function Main() {
  return (
    <main>
      <div class="p-[35px_20px] xl:p-[30px_0px_100px] xl:max-w-[1200px] xl:mx-auto">
        <Introduction />
        <Projects />
      </div>
    </main>
  );
}

export default Main;
