import BannerImg from "../../assets/images/banner-image.png";

function Banner() {
  return (
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
              voluptate culpa nesciunt delectus iste?
            </p>
          </div>
          <button class="xl:mx-auto xl:block bg-white p-[12px_48px] text-[20px] rounded-[5px]">
            Explore
          </button>
        </div>
      </div>
    </section>
  );
}

export default Banner;
