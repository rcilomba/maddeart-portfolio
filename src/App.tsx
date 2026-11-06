import './App.css';
import ProjectCard from './components/ProjectCard';
import { projects } from './data/projects';
import { edition } from './data/edition';
import EditionCard from './components/EditionCard';
import { useRef, useState } from 'react';
import type { Project } from './data/projects';

function App() {
  const contactEmail = edition.contactEmail;
  const printTitle = edition.title;
  const enquirySubject = encodeURIComponent(`Print enquiry: ${printTitle}`);

  const enquiryBody = encodeURIComponent(
    `Hello Madeleine,\n\nI am interested in ${printTitle}. Could you share the available sizes, prices and edition details?\n\nThank you!`,
  );

  const enquiryUrl = `mailto:${contactEmail}?subject=${enquirySubject}&body=${enquiryBody}`;
  const imageDialogRef = useRef<HTMLDialogElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);

  return (
    <>
      <a className='skip-link' href='#main-content'>
        Skip to content
      </a>
      <header className='site-header'>
        <a href='/' className='site-name'>
          Madeleine Dalla
        </a>

        <nav aria-label='Main navigation'>
          <a href='#projects'>Projects</a>
          <a href='#archive'>Archive</a>
          <a href='#editions'>Limited Editions</a>
        </nav>
      </header>

      <main id='main-content' tabIndex={-1}>
        <section className='intro'>
          <img
            className='intro-image'
            src='https://images.prismic.io/madeleinedalla/2f9e9cca-408f-42b3-b26f-22866c3e9116_beneath_the_surface_06.jpg?auto=compress,format&w=1920'
            alt=''
            fetchPriority='high'
          />
          <p className='intro-location'>New York</p>
          <h1>Madeleine Dalla</h1>
          <p>A photographer based in New York</p>
        </section>
        <section id='projects' className='projects'>
          <h2>Projects</h2>{' '}
          <p>{projects.length} selected photographic projects.</p>
          <div className='project-grid'>
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                year={project.year}
                image={project.image}
                alt={project.alt}
                onOpen={() => {
                  setSelectedProject(project);
                  imageDialogRef.current?.showModal();
                }}
              />
            ))}
          </div>
        </section>
        <section id='editions' className='editions'>
          <h2>Limited Editions</h2>
          <p>Selected photographs available as signed prints.</p>
          <EditionCard
            title={edition.title}
            image={edition.image}
            alt={edition.alt}
            enquiryUrl={enquiryUrl}
            enquiriesEnabled={edition.enquiriesEnabled}
            enquiryNotice={edition.enquiryNotice}
          />
        </section>
        <section id='archive' className='archive'>
          <h2>Archive</h2>
          <p>A photographic index of selected projects.</p>
          <div className='archive-grid'>
            {projects.map((project) => (
              <img
                width={900}
                height={1200}
                key={project.title}
                src={project.image}
                alt={project.alt}
                loading='lazy'
              />
            ))}
          </div>
        </section>
      </main>
      <dialog
        ref={imageDialogRef}
        className='image-dialog'
        aria-labelledby='image-dialog-title'
      >
        <button type='button' onClick={() => imageDialogRef.current?.close()}>
          Close
        </button>
        <h2 id='image-dialog-title'>{selectedProject.title}</h2>
        <img src={selectedProject.image} alt={selectedProject.alt} />
      </dialog>
      <footer className='site-footer'>
        <p className='site-name'>Madeleine Dalla</p>
        <p>Photographer &amp; artist · New York</p>
      </footer>
    </>
  );
}

export default App;
