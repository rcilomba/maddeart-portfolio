import { useEffect } from 'react';
import { Link } from 'react-router';
import { projects } from '../data/projects';
import { cardImageUrl } from '../utils/cardImageUrl';

const selectedWork =
  projects.find((project) => project.slug === 'lost-in-anxiety') ?? projects[0];

const credits = [
  {
    heading: 'Clients',
    items: [
      'Aaryah',
      'Apple',
      'Artium Recordings',
      'Astralwerks',
      'Atlantic Records',
      'Christian Cowan',
      'Dreamville',
      'Gimlet Media',
      'Halifax is Angry',
      'HSTRY',
      'Keel Labs',
      'MakeUpPro New York',
      'MILK',
      'MILK MakeUp',
      'Paloma Wool',
      'Roc Nation',
      'Sony Music',
    ],
  },
  {
    heading: 'Publications',
    items: [
      'Damernas Värld',
      'Essence',
      'Hypebeast',
      'Kaltblut Magazine',
      'Metro News',
      'MILK',
      'The Fader',
      'The Forumist',
      'Rolling Stones',
      'Schon Magazine',
      'Teen Vogue',
      'Tocksick Magazine',
      'Vogue',
    ],
  },
];

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

      <div className='about-page-content'>
        <div className='about-page-text'>
          <p className='about-page-lead'>
            Madeleine Dalla Torre Castillo is a photographer based in New York
            City and Los Angeles.
          </p>
          <p className='about-page-bio'>
            A first-generation Swede with roots in Nicaragua, she explores
            belonging, migration and individuality through photography. Her work
            brings soft and bold compositions together and celebrates the beauty
            of marginalized communities.
          </p>
          <div className='about-page-links'>
            <a href='mailto:info@madeleinedalla.art'>Email ↗</a>
            <a
              href='https://www.instagram.com/madeleine.dalla/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Instagram ↗
            </a>
            <Link to='/projects'>Explore her projects →</Link>
          </div>
        </div>

        <figure className='about-page-work'>
          <Link to={`/project/${selectedWork.slug}`}>
            <img
              src={cardImageUrl(selectedWork.image, 600)}
              srcSet={`${cardImageUrl(selectedWork.image, 360)} 360w, ${cardImageUrl(selectedWork.image, 600)} 600w, ${cardImageUrl(selectedWork.image, 900)} 900w, ${cardImageUrl(selectedWork.image, 1200)} 1200w`}
              sizes='(max-width: 700px) 90vw, 420px'
              alt={selectedWork.alt}
              loading='lazy'
            />
            <figcaption>Selected work — {selectedWork.title} ↗</figcaption>
          </Link>
        </figure>
      </div>
      <div className='about-page-credits'>
        {credits.map(({ heading, items }) => (
          <section key={heading}>
            <h2>{heading}</h2>
            <ul>
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}

export default AboutPage;
