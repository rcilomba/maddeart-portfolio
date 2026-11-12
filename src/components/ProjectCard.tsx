import type { Project } from '../data/projects';
import { Link } from 'react-router';

type ProjectCardProps = Project & {
  onOpen: () => void;
};

function ProjectCard({
  title,
  year,
  image,
  alt,
  slug,
  onOpen,
}: ProjectCardProps) {
  return (
    <article className='project-card'>
      <button
        type='button'
        className='project-image-button'
        onClick={onOpen}
        aria-label={`Preview images from ${title}`}
        aria-haspopup='dialog'
      >
        <img src={image} alt={alt} loading='lazy' />
      </button>
      <h3>
        <Link to={`/project/${slug}`}>{title}</Link>
      </h3>
      <p>{year}</p>
    </article>
  );
}

export default ProjectCard;
