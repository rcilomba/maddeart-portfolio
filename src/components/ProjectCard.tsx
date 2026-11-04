import type { Project } from '../data/projects';

function ProjectCard({ title, year, image, alt }: Project) {
  return (
    <article className='project-card'>
      <a
        href={image}
        target='_blank'
        rel='noopener noreferrer'
        aria-label={`View ${title} image (opens in a new tab)`}
      >
        <img src={image} alt={alt} loading='lazy' />
      </a>
      <h3>{title}</h3>
      <p>{year}</p>
    </article>
  );
}

export default ProjectCard;
