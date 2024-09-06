import Navbar from "./Navbar";
import LogoImg from "../../assets/images/web-logo.svg";
import MenuImg from "../../assets/images/menu-logo.svg";

function Header() {
  return (
    <header className="bg-green">
      <div className="xl:max-w-[1180px] mx-auto p-[17px_20px_32px] flex justify-between items-center">
        <img src={LogoImg} alt="web-logo" className="w-[148px] xl:w-[187px]" />
        <img src={MenuImg} alt="menu-logo" className="xl:hidden" />
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
