function TeamMembers({ name, position, imgSrc }) {
  return (
    <div class="w-[280px] py-[20px] flex flex-col items-center shadow-[3px_4px_12px_1px_rgba(0,0,0,0.25)] rounded-[5px]">
      <img src={imgSrc} alt="Peg-Legge" />
      <div class="w-[200px] mt-[19px] text-center">
        <h3 class="text-[24px] Crimson-Text mb-[17px]">{name}</h3>
        <div class="text=light-dark">{position}</div>
      </div>
    </div>
  );
}

export default TeamMembers;
