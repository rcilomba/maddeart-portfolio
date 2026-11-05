type EditionCardProps = {
  title: string;
  image: string;
  alt: string;
  enquiryUrl: string;
};

function EditionCard({ title, image, alt, enquiryUrl }: EditionCardProps) {
  return (
    <article className='edition-card'>
      <img src={image} alt={alt} loading='lazy' />

      <div>
        <h3>{title}</h3>
        <p>Print details coming soon.</p>
        <p>
          <a className='enquiry-link' href={enquiryUrl}>
            Enquire
          </a>
        </p>
      </div>
    </article>
  );
}

export default EditionCard;
