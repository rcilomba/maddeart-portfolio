import './App.css';

type Project = {
  title: string;
  year: string;
  image: string;
  alt: string;
};

const projects: Project[] = [
  {
    title: 'Baldrsdatter',
    year: '2024',
    image:
      'https://images.prismic.io/madeleinedalla/5ac5a31d-f00b-4360-8708-46956f60caf4_baldrsdatter_01.jpg?auto=compress,format&w=900',
    alt: 'Baldrsdatter',
  },
  {
    title: 'Q',
    year: '2024',
    image:
      'https://images.prismic.io/madeleinedalla/ZeeVIP_jD4D4xSOT_MadeleineDalla_Q.jpg?auto=compress,format&w=900',
    alt: 'Q',
  },
  {
    title: 'Bas x MILK',
    year: '2023',
    image:
      'https://images.prismic.io/madeleinedalla/f070e39f-50a6-4cf1-a285-452aa8668240_bas_07.jpg?auto=compress,format&w=900',
    alt: 'Bas x MILK',
  },
];

function App() {
  return (
    <>
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

      <main>
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
          <img
            className='intro-image'
            src='https://images.prismic.io/madeleinedalla/2f9e9cca-408f-42b3-b26f-22866c3e9116_beneath_the_surface_06.jpg?auto=compress,format&w=1920'
            alt=''
            fetchPriority='high'
          />
          <h2>Projects</h2>
          <p>{projects.length} selected photographic projects.</p>{' '}
          <div className='project-grid'>
            {projects.map((project) => (
              <article className='project-card' key={project.title}>
                <img src={project.image} alt={project.alt} loading='lazy' />
                <h3>{project.title}</h3>
                <p>{project.year}</p>
              </article>
            ))}
          </div>
        </section>
        <section id='editions' className='editions'>
          <h2>Limited Editions</h2>
          <p>Selected photographs available as signed prints.</p>
          <article className='edition-card'>
            <img
              src='https://images.prismic.io/madeleinedalla/2f9e9cca-408f-42b3-b26f-22866c3e9116_beneath_the_surface_06.jpg?auto=compress,format&w=900'
              alt='Beneath the Surface.'
              loading='lazy'
            />

            <div>
              <h3>Beneath the Surface.</h3>
              <p>Print details coming soon.</p>
            </div>
          </article>
        </section>
        <section id='archive' className='archive'>
          <h2>Archive</h2>
          <p>A selection of earlier photographic works.</p>
        </section>
        <footer className='site-footer'>
          <p className='site-name'>Madeleine Dalla</p>
          <p>Photographer &amp; artist · New York</p>
        </footer>
      </main>
    </>
  );
}

export default App;
