import { useEffect } from 'react';
import { Link } from 'react-router';

function AboutPage() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'About | Madeleine Dalla';

    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <section className='about-page'>
      <h1>About Madeleine</h1>
      <p>Madeleine Dalla is a photographer and artist based in New York.</p>
      <p>
        <Link to='/projects'>Explore her projects</Link>
      </p>
    </section>
  );
}

export default AboutPage;
