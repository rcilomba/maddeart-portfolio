import type { Project } from '../data/projects';

function ProjectCard({ title, year, image, alt }: Project) {
  return (
    <article className='project-card'>
      <img src={image} alt={alt} loading='lazy' />
      <h3>{title}</h3>
      <p>{year}</p>
    </article>
  );
}

export default ProjectCard;
