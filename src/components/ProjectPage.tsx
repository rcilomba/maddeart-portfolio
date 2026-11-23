import { Link, useParams } from 'react-router';
import { projects } from '../data/projects';
import { useEffect } from 'react';
import { galleryImageUrl } from '../utils/galleryImageUrl';

function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = project
      ? `${project.title} | Madeleine Dalla`
      : 'Project not found | Madeleine Dalla';

    return () => {
      document.title = previousTitle;
    };
  }, [project]);

  if (!project) {
    return (
      <section className='project-page'>
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
      <div className='project-page-topline'>
        <Link to='/projects'>← All projects</Link>
        <span>
          Project {String(currentIndex + 1).padStart(2, '0')} /
          {String(projects.length).padStart(2, '0')}
        </span>
      </div>
      <h1>{project.title}</h1>
      <div className='project-page-meta'>
        {project.subtitle && <p>{project.subtitle}</p>}
        <p>{project.year}</p>
      </div>
      <div className='project-page-gallery'>
        {galleryImages.map((image, index) => (
          <img
            key={image.src}
            src={galleryImageUrl(image.src)}
            alt={image.alt}
            loading={index === 0 ? 'eager' : 'lazy'}
            fetchPriority={index === 0 ? 'high' : undefined}
            srcSet={`${galleryImageUrl(image.src, 600)} 600w, ${galleryImageUrl(image.src, 1000)} 1000w, ${galleryImageUrl(image.src, 1600)} 1600w`}
            sizes={
              index === 0
                ? '(max-width: 960px) 100vw, 900px'
                : '(max-width: 800px) 100vw, 50vw'
            }
          />
        ))}
      </div>
      <nav aria-label='Project navigation'>
        <Link to={`/project/${previousProject.slug}`}>
          <span>← Previous project</span>
          <strong>{previousProject.title}</strong>
        </Link>
        <Link to={`/project/${nextProject.slug}`}>
          <span>Next project →</span>
          <strong>{nextProject.title}</strong>
        </Link>
      </nav>
    </article>
  );
}

export default ProjectPage;
