import './App.css';
import ProjectCard from './components/ProjectCard';
import { projects } from './data/projects';
import { edition } from './data/edition';
import EditionCard from './components/EditionCard';
import { useRef, useState } from 'react';
import type { Project } from './data/projects';
import ImageDialog from './components/ImageDialog';
import AllProjects from './components/AllProjects';
import { Link, Route, Routes } from 'react-router';

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

  const featuredProjects = projects.filter((project) => project.featured);

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
          <Link to='/projects'>Projects</Link>
          <a href='/#archive'>Archive</a>
          <a href='/#editions'>Limited Editions</a>
        </nav>
      </header>

      <main id='main-content' tabIndex={-1}>
        <Routes>
          <Route
            path='/'
            element={
              <>
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
                  <h2>Projects</h2>
                  <p>
                    {featuredProjects.length} selected photographic projects.
                  </p>
                  <div className='project-grid'>
                    {featuredProjects.map((project) => (
                      <ProjectCard
                        key={project.slug}
                        title={project.title}
                        year={project.year}
                        image={project.image}
                        alt={project.alt}
                        slug={project.slug}
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
                  <Link to='/projects'>View all projects</Link>
                  <div className='archive-grid'>
                    {projects.map((project) => (
                      <button
                        key={project.slug}
                        type='button'
                        className='archive-image-button'
                        aria-label={`View ${project.title}`}
                        aria-haspopup='dialog'
                        onClick={() => {
                          setSelectedProject(project);
                          imageDialogRef.current?.showModal();
                        }}
                      >
                        <img
                          src={project.image}
                          alt={project.alt}
                          loading='lazy'
                        />
                      </button>
                    ))}
                  </div>
                </section>
              </>
            }
          />
          <Route
            path='/projects'
            element={
              <AllProjects
                onOpenProject={(project) => {
                  setSelectedProject(project);
                  imageDialogRef.current?.showModal();
                }}
              />
            }
          />
        </Routes>
      </main>
      <ImageDialog dialogRef={imageDialogRef} project={selectedProject} />
      <footer className='site-footer'>
        <p className='site-name'>Madeleine Dalla</p>
        <p>Photographer &amp; artist · New York</p>
      </footer>
    </>
  );
}

export default App;
