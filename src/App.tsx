import './App.css';

function App() {
  return (
    <main>
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
    </main>
  );
}

export default App;
