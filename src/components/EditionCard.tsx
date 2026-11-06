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
      <img src={image} alt={alt} loading='lazy' />

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
