function Form() {
  return (
    <div class="flex-1">
      <form class="flex flex-col gap-[21px]">
        <div class="flex flex-col gap-[16px]">
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            class="bg-cream border rounded-[5px] h-[38px]"
          />
        </div>
        <div class="flex flex-col gap-[16px]">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            class="bg-cream border rounded-[5px] h-[38px]"
          />
        </div>
        <label for="message">Message</label>
        <textarea
          id="message"
          name="message"
          class="bg-cream w-full h-[140px] xl:h-[75px] border rounded-[5px]"
        ></textarea>
        <button class="bg-dark text-white text-[20px] border rounded-[5px] py-[12px]">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
