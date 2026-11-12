import { Link, useParams } from 'react-router';
import { projects } from '../data/projects';

function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section>
        <h1>Project not found</h1>
        <Link to='/projects'>Back to all projects</Link>
      </section>
    );
  }

  const galleryImages = [
    { src: project.image, alt: project.alt },
    ...(project.images ?? []),
  ];

  const currentIndex = projects.findIndex((item) => item.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const previousProject =
    projects[(currentIndex - 1 + projects.length) % projects.length];

  return (
    <article className='project-page'>
      <Link to='/projects'>Back to all projects</Link>
      <h1>{project.title}</h1>
      {project.subtitle && <p>{project.subtitle}</p>}
      <p>{project.year}</p>
      <div className='project-page-gallery'>
        {galleryImages.map((image) => (
          <img key={image.src} src={image.src} alt={image.alt} loading='lazy' />
        ))}
      </div>
      <nav aria-label='Project navigation'>
        <Link to={`/project/${previousProject.slug}`}>
          Previous project: {previousProject.title}
        </Link>
        <Link to={`/project/${nextProject.slug}`}>
          Next project: {nextProject.title}
        </Link>
      </nav>
    </article>
  );
}

export default ProjectPage;
