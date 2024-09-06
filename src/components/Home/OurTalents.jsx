import PegLeggeImg from "../../assets/images/Peg-Legge.png";
import RichardGuerraImg from "../../assets/images/Richard-Guerra.png";
import AlexandraStolzImg from "../../assets/images/Alexandra-Stolz.png";
import JanetBrayImg from "../../assets/images/Janet-Bray.png";
import TeamMembers from "./TeamMembers";

function OurTalents() {
  return (
    <div className="pb-[40px] xl:pb-[55px] xl:max-w-[1180px] xl:mx-auto">
      <div className="flex flex-col gap-[16px] items-center mb-[40px] xl:mb-[45px]">
        <h3 className="text-green text-[16px] font-[700] tracking-[5px] uppercase">
          team
        </h3>
        <h2 className="text-[24px] xl:text-[40px] Crimson-Text">Our Talents</h2>
        <p className="text-[20px] text-center">
          Lorem ipsum, dolor sit amet consectetur <br />
          adipisicing elit.
        </p>
      </div>
      <div className="flex flex-col gap-[35px] xl:flex-row xl:gap-[47px] items-center mb-[45px]">
        <TeamMembers name="Peg Legge" position="CEO" imgSrc={PegLeggeImg} />
        <TeamMembers
          name="Richard Guerra"
          position="CTO"
          imgSrc={RichardGuerraImg}
        />
        <TeamMembers
          name="Alexandra Stolz"
          position="DESIGNER"
          imgSrc={AlexandraStolzImg}
        />
        <TeamMembers
          name="Janet Bray"
          position="DEVELOPER"
          imgSrc={JanetBrayImg}
        />
      </div>
      <div className="flex justify-center">
        <button className="bg-dark text-white p-[12px_34px] text-[20px] rounded-[5px]">
          View Team
        </button>
      </div>
    </div>
  );
}

export default OurTalents;
