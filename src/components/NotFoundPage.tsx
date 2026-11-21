import { useEffect } from 'react';
import { Link } from 'react-router';

function NotFoundPage() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Page not found | Madeleine Dalla';

    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <section className='project-page'>
      <h1>Page not found</h1>
      <p>We couldn't find that page.</p>
      <Link to='/'>Back to home</Link>
    </section>
  );
}

export default NotFoundPage;
