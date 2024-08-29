import GoogleImg from "../../assets/images/google.svg";
import MicrosoftImg from "../../assets/images/microsoft.svg";
import AirbnbImg from "../../assets/images/airbnb.svg";
import FacebookImg from "../../assets/images/facebook.svg";
import SpotifyImg from "../../assets/images/spotify.svg";

function Partners() {
  return (
    <div class="p-[20px_0px_60px] xl:p-[60px_0px_80px] xl:max-w-[1160px] xl:mx-auto">
      <div class="flex flex-col gap-[16px] items-center">
        <h3 class="text-green text-[16px] font-[700] tracking-[5px] uppercase">
          partners
        </h3>
        <h2 class="text-[24px] xl:text-[40px] Crimson-Text">
          Lorem Ipsum Dolor
        </h2>
        <p class="text-[20px] text-center">
          Lorem ipsum, dolor sit amet consectetur <br />
          adipisicing elit.
        </p>
      </div>
      <div class="py-[55px] flex flex-col xl:flex-row gap-[40px] xl:gap-[66px] items-center">
        <img src={GoogleImg} alt="google" />
        <img src={MicrosoftImg} alt="microsoft" />
        <img src={AirbnbImg} alt="airbnb" />
        <img src={FacebookImg} alt="facebook" />
        <img src={SpotifyImg} alt="spotify" />
      </div>
      <button class="bg-dark text-white mx-auto block p-[12px_48px] text-[20px] rounded-[5px]">
        Learn More
      </button>
    </div>
  );
}

export default Partners;
