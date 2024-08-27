import Navbar from "../Layouts/Navbar";

function Header() {
  return (
    <header class="bg-green">
      <div class="xl:max-w-[1180px] mx-auto p-[17px_20px_32px] flex justify-between items-center">
        <img
          src="./images/web-logo.svg"
          alt="web-logo"
          class="w-[148px] xl:w-[187px]"
        />
        <img src="./images/menu-logo.svg" alt="menu-logo" class="xl:hidden" />
        <Navbar></Navbar>
      </div>
    </header>
  );
}

export default Header;
