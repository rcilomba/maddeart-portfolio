import './App.css';

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
          <p className='intro-location'>New York</p>
          <h1>Madeleine Dalla</h1>
          <p>A photographer based in New York</p>
        </section>

        <section id='projects' className='projects'>
          <h2>Projects</h2>
          <p>Selected photographic works by Madeleine Dalla.</p>
          <div className='project-grid'>
            <article className='project-card'>
              <img
                src='https://images.prismic.io/madeleinedalla/5ac5a31d-f00b-4360-8708-46956f60caf4_baldrsdatter_01.jpg?auto=compress,format&w=900'
                alt='Baldrsdatter'
                loading='lazy'
              />
              <h3>Baldrsdatter</h3>
              <p>2024</p>
            </article>
            <article className='project-card'>
              <img
                src='https://images.prismic.io/madeleinedalla/ZeeVIP_jD4D4xSOT_MadeleineDalla_Q.jpg?auto=compress,format&w=900'
                alt='Q'
                loading='lazy'
              />
              <h3>Q</h3>
              <p>2024</p>
            </article>

            <article className='project-card'>
              <img
                src='https://images.prismic.io/madeleinedalla/f070e39f-50a6-4cf1-a285-452aa8668240_bas_07.jpg?auto=compress,format&w=900'
                alt='Bas x MILK.'
                loading='lazy'
              />
              <h3>Bas x MILK.</h3>
              <p>2023</p>
            </article>
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
