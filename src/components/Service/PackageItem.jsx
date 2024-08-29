import LogoCheck from "../../assets/images/logo-check.svg";

function PackageItem({ name, price }) {
  return (
    <div class="p-[46px_30px] shadow-[3px_4px_12px_1px_rgba(0,0,0,0.25)] rounded-[5px]">
      <div class="text-center mb-[50px]">
        <div>{name}</div>
        <div class="text-light-dark flex gap-[10px] justify-center items-center">
          <span class="text-black text-[40px] font-[700]">${price}</span>/month
        </div>
        <p class="text-light-dark">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
          nemo hic quos, ab, dolor aperiam
        </p>
      </div>
      <ul class="flex flex-col gap-[11px] mb-[45px]">
        {[...Array(5)].map((item, index) => {
          return (
            <li class="flex gap-[11px] text-dark" key={index}>
              <img src={LogoCheck} alt="logo-check" />
              <span>Lorem ipsum, dolor sit </span>
            </li>
          );
        })}
      </ul>
      <button class="mx-auto block bg-dark text-white p-[12px_30px] text-[20px] rounded-[5px]">
        Learn More
      </button>
    </div>
  );
}

export default PackageItem;
