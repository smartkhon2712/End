import PackageItem from "./PackageItem";

function Packages() {
  return (
    <>
      <div class="flex flex-col xl:flex-row gap-[50px] xl:gap-[105px] mb-[70px] xl:mb-[135px]">
        <PackageItem name="Basic" price="100" />
        <PackageItem name="Plus" price="250" />
        <PackageItem name="Pro" price="400" />
      </div>
    </>
  );
}

export default Packages;
