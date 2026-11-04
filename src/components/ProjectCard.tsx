type ProjectCardProps = {
  title: string;
  year: string;
  image: string;
  alt: string;
};

function ProjectCard({ title, year, image, alt }: ProjectCardProps) {
  return (
    <article className='project-card'>
      <img src={image} alt={alt} loading='lazy' />
      <h3>{title}</h3>
      <p>{year}</p>
    </article>
  );
}

export default ProjectCard;
