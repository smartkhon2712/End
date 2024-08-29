import Web1Img from "../../assets/images/image-website-1.png";
import Web2Img from "../../assets/images/image-website-2.png";
import Web3Img from "../../assets/images/image-website-3.png";
import Web4Img from "../../assets/images/image-website-4.png";
import Web5Img from "../../assets/images/image-website-5.png";
import Web6Img from "../../assets/images/image-website-6.png";
import Web7Img from "../../assets/images/image-website-7.png";
import Web8Img from "../../assets/images/image-website-8.png";
import ProjectItem from "./ProjectItem";

function Projects() {
  return (
    <>
      <div class="flex flex-col xl:flex-row xl:flex-wrap gap-[55px]">
        <ProjectItem imgSrc={Web1Img} />
        <ProjectItem imgSrc={Web2Img} />
        <ProjectItem imgSrc={Web3Img} />
        <ProjectItem imgSrc={Web4Img} />
        <ProjectItem imgSrc={Web5Img} />
        <ProjectItem imgSrc={Web6Img} />
        <ProjectItem imgSrc={Web7Img} />
        <ProjectItem imgSrc={Web8Img} />
      </div>
      <button class="mx-auto block bg-dark text-white p-[12px_30px] text-[20px] rounded-[5px] mt-[30px] xl:mt-[65px]">
        Learn More
      </button>
    </>
  );
}

export default Projects;
