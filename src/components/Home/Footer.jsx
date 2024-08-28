import FacebookLogo from "../../assets/images/logo-facebook.svg";
import InstagramLogo from "../../assets/images/logo-instagram.svg";
import TwitterLogo from "../../assets/images/logo-twitter.svg";
import PinterestLogo from "../../assets/images/logo-pinterest.svg";
import TiktokLogo from "../../assets/images/logo-tiktok.svg";
import WhatsappLogo from "../../assets/images/logo-whatsapp.svg";
import YoutubeLogo from "../../assets/images/logo-youtube.svg";

function Footer() {
  return (
    <footer class="bg-green text-white">
      <div class="xl:max-w-[1180px] xl:mx-auto xl:flex justify-between py-[30px] xl:py-[50px]">
        <div class="flex gap-[20px] justify-center xl:justify-start">
          <img src={FacebookLogo} alt="logo-facebook" />
          <img src={InstagramLogo} alt="logo-instagram" />
          <img src={TwitterLogo} alt="logo-twitter" />
          <img src={PinterestLogo} alt="logo-pinterest" />
          <img src={TiktokLogo} alt="logo-tiktok" />
          <img src={WhatsappLogo} alt="logo-whatsapp" />
          <img src={YoutubeLogo} alt="logo-youtube" />
        </div>
        <div class="text-[20px] text-center mt-[20px] xl:mt-[0px]">
          © Start, 2022. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
