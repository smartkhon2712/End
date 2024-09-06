function ProjectItem({ imgSrc }) {
  return (
    <a href="https://www.google.com/" target="_blank">
      <img
        src={imgSrc}
        alt="image-website-1"
        className="w-[570px] h-[100%] object-cover border-[2px] rounded-[5px]"
      />
    </a>
  );
}

export default ProjectItem;
