import { cardImageUrl } from '../utils/cardImageUrl';

type EditionCardProps = {
  title: string;
  image: string;
  alt: string;
  enquiryUrl: string;
  enquiriesEnabled: boolean;
  enquiryNotice: string;
};

function EditionCard({
  title,
  image,
  alt,
  enquiryUrl,
  enquiriesEnabled,
  enquiryNotice,
}: EditionCardProps) {
  return (
    <article className='edition-card'>
      <img
        src={cardImageUrl(image, 900)}
        srcSet={`${cardImageUrl(image, 360)} 360w, ${cardImageUrl(image, 600)} 600w, ${cardImageUrl(image, 900)} 900w`}
        sizes='(min-width: 700px) 388px, 90vw'
        alt={alt}
        loading='lazy'
      />
      <div>
        <h3>{title}</h3>
        {enquiriesEnabled ? (
          <p>
            <a className='enquiry-link' href={enquiryUrl}>
              Enquire
            </a>
          </p>
        ) : (
          <p>{enquiryNotice}</p>
        )}
      </div>
    </article>
  );
}

export default EditionCard;
