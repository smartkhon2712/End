import FirstImg from "../../assets/images/first-image.png";
import SecondImg from "../../assets/images/second-image.png";

function Services() {
  return (
    <section>
      <div className="pb-[60px] xl:pb-[80px] xl:max-w-[1180px] xl:mx-auto flex flex-col xl:flex-row xl:justify-between xl:items-center">
        <img src={FirstImg} alt="first-image" />
        <div className="xl:w-[470px] flex flex-col gap-[20px] xl:gap-[16px] mt-[30px]">
          <h2 className="text-[24px] xl:text-[40px] Crimson-Text">
            Lorem ipsum dolor sit amet consectetur
          </h2>
          <p className="text-light-dark">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
            voluptate culpa nesciunt delectus iste?
          </p>
          <div>
            <button className="bg-dark text-white p-[12px_30px] text-[20px] rounded-[5px]">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="pb-[40px] xl:pb-[100px] xl:max-w-[1180px] xl:mx-auto flex flex-col xl:flex-row-reverse xl:justify-between xl:items-center">
        <img src={SecondImg} alt="second-image" />
        <div className="xl:w-[470px] flex flex-col gap-[16px] mt-[30px]">
          <h2 className="text-[24px] xl:text-[40px] Crimson-Text">
            Lorem ipsum dolor sit amet consectetur
          </h2>
          <p className="text-light-dark">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
            voluptate culpa nesciunt delectus iste?
          </p>
          <div>
            <button className="bg-dark text-white p-[12px_30px] text-[20px] rounded-[5px]">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
