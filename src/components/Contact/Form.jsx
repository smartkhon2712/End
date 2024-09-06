function Form() {
  return (
    <div className="flex-1">
      <form className="flex flex-col gap-[21px]">
        <div className="flex flex-col gap-[16px]">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="bg-cream border rounded-[5px] h-[38px]"
          />
        </div>
        <div className="flex flex-col gap-[16px]">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="bg-cream border rounded-[5px] h-[38px]"
          />
        </div>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          className="bg-cream w-full h-[140px] xl:h-[75px] border rounded-[5px]"
        ></textarea>
        <button className="bg-dark text-white text-[20px] border rounded-[5px] py-[12px]">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
