import BannerImg from "../../assets/images/banner-image.png";
import GoogleImg from "../../assets/images/google.svg";
import MicrosoftImg from "../../assets/images/microsoft.svg";
import AirbnbImg from "../../assets/images/airbnb.svg";
import FacebookImg from "../../assets/images/facebook.svg";
import SpotifyImg from "../../assets/images/spotify.svg";
import FirstImg from "../../assets/images/first-image.png";
import SecondImg from "../../assets/images/second-image.png";
import PegLeggeImg from "../../assets/images/Peg-Legge.png";
import RichardGuerraImg from "../../assets/images/Richard-Guerra.png";
import AlexandraStolzImg from "../../assets/images/Alexandra-Stolz.png";
import JanetBrayImg from "../../assets/images/Janet-Bray.png";

function Main() {
  return (
    <main>
      <section class="px-[20px] bg-green pb-[40px] xl:pb-[80px]">
        <div class="xl:w-[1180px] xl:mx-auto flex flex-col xl:flex-row-reverse xl:gap-[130px] xl:items-center">
          <img
            src={BannerImg}
            alt="banner-image"
            class="mx-auto mb-[30px] xl:mb-[0px]"
          />
          <div>
            <div class="flex flex-col gap-[15px] mb-[25px] text-white">
              <div class="text-[16px] font-[700] tracking-[5px] uppercase">
                Welcome
              </div>
              <h1 class="text-[28px] xl:text-[40px] Crimson-Text">
                Lorem ipsum dolor sit amet consectetur
              </h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos
                error ipsum, voluptate culpa nesciunt delectus iste?
              </p>
            </div>
            <button class="xl:mx-auto xl:block bg-white p-[12px_48px] text-[20px] rounded-[5px]">
              Explore
            </button>
          </div>
        </div>
      </section>
      <section class="px-[20px]">
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
        <div class="pb-[60px] xl:pb-[80px] xl:max-w-[1180px] xl:mx-auto flex flex-col xl:flex-row xl:justify-between xl:items-center">
          <img src={FirstImg} alt="first-image" />
          <div class="xl:w-[470px] flex flex-col gap-[20px] xl:gap-[16px] mt-[30px]">
            <h2 class="text-[24px] xl:text-[40px] Crimson-Text">
              Lorem ipsum dolor sit amet consectetur
            </h2>
            <p class="text-light-dark">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
              voluptate culpa nesciunt delectus iste?
            </p>
            <div>
              <button class="bg-dark text-white p-[12px_30px] text-[20px] rounded-[5px]">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div class="pb-[40px] xl:pb-[100px] xl:max-w-[1180px] xl:mx-auto flex flex-col xl:flex-row-reverse xl:justify-between xl:items-center">
          <img src={SecondImg} alt="second-image" />
          <div class="xl:w-[470px] flex flex-col gap-[16px] mt-[30px]">
            <h2 class="text-[24px] xl:text-[40px] Crimson-Text">
              Lorem ipsum dolor sit amet consectetur
            </h2>
            <p class="text-light-dark">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
              voluptate culpa nesciunt delectus iste?
            </p>
            <div>
              <button class="bg-dark text-white p-[12px_30px] text-[20px] rounded-[5px]">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div class="pb-[40px] xl:pb-[55px] xl:max-w-[1180px] xl:mx-auto">
          <div class="flex flex-col gap-[16px] items-center mb-[40px] xl:mb-[45px]">
            <h3 class="text-green text-[16px] font-[700] tracking-[5px] uppercase">
              team
            </h3>
            <h2 class="text-[24px] xl:text-[40px] Crimson-Text">Our Talents</h2>
            <p class="text-[20px] text-center">
              Lorem ipsum, dolor sit amet consectetur <br />
              adipisicing elit.
            </p>
          </div>
          <div class="flex flex-col gap-[35px] xl:flex-row xl:gap-[47px] items-center mb-[45px]">
            <div class="w-[280px] py-[20px] flex flex-col items-center shadow-[3px_4px_12px_1px_rgba(0,0,0,0.25)] rounded-[5px]">
              <img src={PegLeggeImg} alt="Peg-Legge" />
              <div class="w-[200px] mt-[19px] text-left">
                <h3 class="text-[24px] Crimson-Text mb-[17px]">Peg Legge</h3>
                <div class="text=light-dark">CEO</div>
              </div>
            </div>
            <div class="w-[280px] py-[20px] flex flex-col items-center shadow-[3px_4px_12px_1px_rgba(0,0,0,0.25)] rounded-[5px]">
              <img src={RichardGuerraImg} alt="Richard-Guerra" />
              <div class="w-[200px] mt-[19px] text-left">
                <h3 class="text-[24px] Crimson-Text mb-[17px]">
                  Richard Guerra
                </h3>
                <div class="text=light-dark">CTO</div>
              </div>
            </div>
            <div class="w-[280px] py-[20px] flex flex-col items-center shadow-[3px_4px_12px_1px_rgba(0,0,0,0.25)] rounded-[5px]">
              <img src={AlexandraStolzImg} alt="Alexandra-Stolz" />
              <div class="w-[200px] mt-[19px] text-left">
                <h3 class="text-[24px] Crimson-Text mb-[17px]">
                  Alexandra Stolz
                </h3>
                <div class="text=light-dark">DESIGNER</div>
              </div>
            </div>
            <div class="w-[280px] py-[20px] flex flex-col items-center shadow-[3px_4px_12px_1px_rgba(0,0,0,0.25)] rounded-[5px]">
              <img src={JanetBrayImg} alt="Janet-Bray" />
              <div class="w-[200px] mt-[19px] text-left">
                <h3 class="text-[24px] Crimson-Text mb-[17px]">Janet Bray</h3>
                <div class="text=light-dark">DEVELOPER</div>
              </div>
            </div>
          </div>
          <div class="flex justify-center">
            <button class="bg-dark text-white p-[12px_34px] text-[20px] rounded-[5px]">
              View Team
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
