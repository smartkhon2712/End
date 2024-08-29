import PegLeggeImg from "../../assets/images/Peg-Legge.png";
import RichardGuerraImg from "../../assets/images/Richard-Guerra.png";
import AlexandraStolzImg from "../../assets/images/Alexandra-Stolz.png";
import JanetBrayImg from "../../assets/images/Janet-Bray.png";
import TeamMembers from "./TeamMembers";

function OurTalents() {
  return (
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
        <TeamMembers />
        <TeamMembers />
        <TeamMembers />
        <TeamMembers />
        {/* <div class="w-[280px] py-[20px] flex flex-col items-center shadow-[3px_4px_12px_1px_rgba(0,0,0,0.25)] rounded-[5px]">
          <img src={PegLeggeImg} alt="Peg-Legge" />
          <div class="w-[200px] mt-[19px] text-left">
            <h3 class="text-[24px] Crimson-Text mb-[17px]">Peg Legge</h3>
            <div class="text=light-dark">CEO</div>
          </div>
        </div>
        <div class="w-[280px] py-[20px] flex flex-col items-center shadow-[3px_4px_12px_1px_rgba(0,0,0,0.25)] rounded-[5px]">
          <img src={RichardGuerraImg} alt="Richard-Guerra" />
          <div class="w-[200px] mt-[19px] text-left">
            <h3 class="text-[24px] Crimson-Text mb-[17px]">Richard Guerra</h3>
            <div class="text=light-dark">CTO</div>
          </div>
        </div>
        <div class="w-[280px] py-[20px] flex flex-col items-center shadow-[3px_4px_12px_1px_rgba(0,0,0,0.25)] rounded-[5px]">
          <img src={AlexandraStolzImg} alt="Alexandra-Stolz" />
          <div class="w-[200px] mt-[19px] text-left">
            <h3 class="text-[24px] Crimson-Text mb-[17px]">Alexandra Stolz</h3>
            <div class="text=light-dark">DESIGNER</div>
          </div>
        </div>
        <div class="w-[280px] py-[20px] flex flex-col items-center shadow-[3px_4px_12px_1px_rgba(0,0,0,0.25)] rounded-[5px]">
          <img src={JanetBrayImg} alt="Janet-Bray" />
          <div class="w-[200px] mt-[19px] text-left">
            <h3 class="text-[24px] Crimson-Text mb-[17px]">Janet Bray</h3>
            <div class="text=light-dark">DEVELOPER</div>
          </div>
        </div> */}
      </div>
      <div class="flex justify-center">
        <button class="bg-dark text-white p-[12px_34px] text-[20px] rounded-[5px]">
          View Team
        </button>
      </div>
    </div>
  );
}

export default OurTalents;
