import './App.css';
import ProjectCard from './components/ProjectCard';
import { projects } from './data/projects';
import { edition } from './data/edition';
import EditionCard from './components/EditionCard';
import { useRef, useState } from 'react';
import type { Project } from './data/projects';
import ImageDialog from './components/ImageDialog';
import AllProjects from './components/AllProjects';
import ProjectPage from './components/ProjectPage';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router';
import { useEffect } from 'react';
import { cardImageUrl } from './utils/cardImageUrl';
import AboutPage from './components/AboutPage';
import NotFoundPage from './components/NotFoundPage';

const heroBackgroundImage =
  'https://images.prismic.io/madeleinedalla/2f9e9cca-408f-42b3-b26f-22866c3e9116_beneath_the_surface_06.jpg?auto=compress,format&w=1920';

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

  const [theme, setTheme] = useState<'light' | 'dark'>(() =>
    localStorage.getItem('maddeart-theme') === 'dark' ? 'dark' : 'light',
  );

  const featuredProjects = projects.filter((project) => project.featured);

  const [featuredIndex, setFeaturedIndex] = useState(() => {
    const index = featuredProjects.findIndex(
      (project) => project.slug === 'lost-in-anxiety',
    );
    return index >= 0 ? index : 0;
  });

  const [isPlaying, setIsPlaying] = useState(
    () => !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  const heroProject = featuredProjects[featuredIndex];

  function showPreviousFeatured() {
    setIsPlaying(false);
    setFeaturedIndex(
      (index) =>
        (index - 1 + featuredProjects.length) % featuredProjects.length,
    );
  }

  function showNextFeatured() {
    setIsPlaying(false);
    setFeaturedIndex((index) => (index + 1) % featuredProjects.length);
  }

  const { pathname } = useLocation();

  useEffect(() => {
    if (!isPlaying || pathname !== '/' || featuredProjects.length < 2) return;

    const timer = window.setInterval(() => {
      if (document.visibilityState !== 'visible') {
        return;
      }

      setFeaturedIndex((index) => (index + 1) % featuredProjects.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, [isPlaying, pathname, featuredProjects.length]);

  const previousPath = useRef(pathname);

  useEffect(() => {
    if (previousPath.current === pathname) return;

    previousPath.current = pathname;
    document.getElementById('main-content')?.focus();
  }, [pathname]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('maddeart-theme', theme);
  }, [theme]);

  return (
    <>
      <a className='skip-link' href='#main-content'>
        Skip to content
      </a>
      <header className='site-header'>
        <Link to='/' className='site-name'>
          Madeleine Dalla
        </Link>
        <nav aria-label='Main navigation'>
          <NavLink to='/projects'>Projects</NavLink>
          <a href='/#editions'>Limited Editions</a>
          <a href='/#archive'>Archive</a>
          <NavLink to='/about'>About</NavLink>
        </nav>
        <button
          type='button'
          className='theme-toggle'
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'dark' ? 'Light mode' : 'Dark mode'}
        </button>
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
                    src={cardImageUrl(heroBackgroundImage, 1920)}
                    srcSet={`${cardImageUrl(heroBackgroundImage, 640)} 640w, ${cardImageUrl(heroBackgroundImage, 1280)} 1280w, ${cardImageUrl(heroBackgroundImage, 1920)} 1920w`}
                    sizes='100vw'
                    alt=''
                    fetchPriority='high'
                  />
                  <p className='intro-location'>New York</p>
                  <h1>Madeleine Dalla</h1>
                  <p>A photographer based in New York City and Los Angeles</p>
                  {heroProject && (
                    <div className='hero-feature'>
                      <img
                        key={heroProject.slug}
                        src={cardImageUrl(heroProject.image, 900)}
                        srcSet={`${cardImageUrl(heroProject.image, 360)} 360w, ${cardImageUrl(heroProject.image, 600)} 600w, ${cardImageUrl(heroProject.image, 900)} 900w`}
                        sizes='(max-width: 600px) calc(100vw - 40px), 380px'
                        alt={heroProject.alt}
                      />
                      <div className='hero-feature-copy'>
                        <p>Featured project</p>
                        <h2>{heroProject.title}</h2>
                        <Link
                          to={`/project/${heroProject.slug}`}
                          onMouseEnter={() => setIsPlaying(false)}
                          onFocus={() => setIsPlaying(false)}
                        >
                          Explore {heroProject.title}
                        </Link>
                        <div
                          className='hero-feature-controls'
                          role='group'
                          aria-label='Featured projects'
                        >
                          <button
                            type='button'
                            onClick={showPreviousFeatured}
                            aria-label='Previous featured project'
                            onFocus={() => setIsPlaying(false)}
                          >
                            ←
                          </button>
                          <span>
                            {featuredIndex + 1} / {featuredProjects.length}
                          </span>
                          <button
                            type='button'
                            onClick={showNextFeatured}
                            aria-label='Next featured project'
                            onFocus={() => setIsPlaying(false)}
                          >
                            →
                          </button>
                          <button
                            type='button'
                            className='hero-feature-playback'
                            onClick={() => setIsPlaying((playing) => !playing)}
                          >
                            {isPlaying ? 'Pause' : 'Play'}
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </section>
                <section id='projects' className='projects'>
                  <div className='projects-heading'>
                    <div>
                      <p className='section-index'>Selected works</p>
                      <h2>Projects</h2>
                    </div>
                    <Link to='/projects'>View all projects</Link>
                  </div>
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
                  <p>Print details and availability will be announced here.</p>
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
                    {projects
                      .filter((project) => !project.featured)
                      .slice(0, 6)
                      .map((project) => (
                        <div className='archive-item' key={project.slug}>
                          <button
                            type='button'
                            className='archive-image-button'
                            aria-label={`Preview image from ${project.title}`}
                            aria-haspopup='dialog'
                            onClick={() => {
                              setSelectedProject(project);
                              imageDialogRef.current?.showModal();
                            }}
                          >
                            <img
                              src={cardImageUrl(project.image)}
                              srcSet={`${cardImageUrl(project.image, 360)} 360w, ${cardImageUrl(project.image, 600)} 600w, ${cardImageUrl(project.image, 900)} 900w`}
                              sizes='(max-width: 600px) 50vw, 267px'
                              alt={project.alt}
                              loading='lazy'
                            />
                          </button>
                          <Link to={`/project/${project.slug}`}>
                            {project.title}
                          </Link>
                        </div>
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
          <Route path='/project/:slug' element={<ProjectPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </main>
      <ImageDialog dialogRef={imageDialogRef} project={selectedProject} />
      <footer className='site-footer'>
        <p className='site-name'>Madeleine Dalla</p>
        <p>Photographer &amp; artist · New York City &amp; Los Angeles</p>
        <nav aria-label='Footer navigation'>
          <Link to='/projects'>Projects</Link>
          <Link to='/about'>About</Link>
        </nav>
      </footer>
    </>
  );
}

export default App;
