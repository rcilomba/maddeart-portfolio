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
        <h1>___</h1>
        <p>A photographer based in New York</p>
      </section>
    </main>
  );
}

export default App;
