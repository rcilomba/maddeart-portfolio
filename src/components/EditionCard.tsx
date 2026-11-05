type EditionCardProps = {
  title: string;
  image: string;
  alt: string;
  enquiryUrl: string;
  enquiriesEnabled: boolean;
};

function EditionCard({
  title,
  image,
  alt,
  enquiryUrl,
  enquiriesEnabled,
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
          <p>Enquiries coming soon.</p>
        )}
      </div>
    </article>
  );
}

export default EditionCard;
