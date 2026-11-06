import type { Project } from '../data/projects';

type ProjectCardProps = Project & {
  onOpen: () => void;
};

function ProjectCard({ title, year, image, alt, onOpen }: ProjectCardProps) {
  return (
    <article className='project-card'>
      <button
        type='button'
        className='project-image-button'
        onClick={onOpen}
        aria-label={`View ${title}`}
        aria-haspopup='dialog'
      >
        <img src={image} alt={alt} loading='lazy' />
      </button>
      <h3>{title}</h3>
      <p>{year}</p>
    </article>
  );
}

export default ProjectCard;
