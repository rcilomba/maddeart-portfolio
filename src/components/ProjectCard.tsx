import type { Project } from '../data/projects';
import { Link } from 'react-router';
import { cardImageUrl } from '../utils/cardImageUrl';

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
        aria-label={`Preview image from ${title}`}
        aria-haspopup='dialog'
      >
        <img
          src={cardImageUrl(image)}
          srcSet={`${cardImageUrl(image, 360)} 360w, ${cardImageUrl(image, 600)} 600w, ${cardImageUrl(image, 900)} 900w`}
          sizes='(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw'
          alt={alt}
          loading='lazy'
        />
      </button>
      <h3>
        <Link to={`/project/${slug}`}>{title}</Link>
      </h3>
      <p>{year}</p>
    </article>
  );
}

export default ProjectCard;
