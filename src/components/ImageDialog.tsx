import type { RefObject } from 'react';
import type { Project } from '../data/projects';
import { useState } from 'react';
import { galleryImageUrl } from '../utils/galleryImageUrl';

type ImageDialogProps = {
  dialogRef: RefObject<HTMLDialogElement | null>;
  project: Project;
};

function ImageDialog({ dialogRef, project }: ImageDialogProps) {
  const [imageIndex, setImageIndex] = useState(0);

  const galleryImages = [
    { src: project.image, alt: project.alt },
    ...(project.images ?? []),
  ];

  const currentImage = galleryImages[imageIndex];

  function showNextImage() {
    setImageIndex((index) => (index + 1) % galleryImages.length);
  }

  function showPreviousImage() {
    setImageIndex(
      (index) => (index - 1 + galleryImages.length) % galleryImages.length,
    );
  }

  return (
    <dialog
      onClose={() => setImageIndex(0)}
      onKeyDown={(event) => {
        if (galleryImages.length < 2) return;
        if (event.key === 'ArrowRight') {
          event.preventDefault();
          showNextImage();
        } else if (event.key === 'ArrowLeft') {
          event.preventDefault();
          showPreviousImage();
        }
      }}
      ref={dialogRef}
      className='image-dialog'
      aria-labelledby='image-dialog-title'
    >
      <button
        type='button'
        className='dialog-close'
        aria-label='Close image viewer'
        onClick={() => dialogRef.current?.close()}
      >
        Close
      </button>
      <h2 id='image-dialog-title'>{project.title}</h2>
      {project.description && <p>{project.description}</p>}
      {project.subtitle && <p>{project.subtitle}</p>}
      {galleryImages.length > 1 && (
        <p aria-live='polite' aria-atomic='true'>
          Image {imageIndex + 1} of {galleryImages.length}
        </p>
      )}
      <img
        src={galleryImageUrl(currentImage.src)}
        srcSet={`${galleryImageUrl(currentImage.src, 600)} 600w, ${galleryImageUrl(currentImage.src, 1000)} 1000w, ${galleryImageUrl(currentImage.src, 1600)} 1600w`}
        sizes='(max-width: 1040px) 85vw, 912px'
        alt={currentImage.alt}
      />
      {galleryImages.length > 1 && (
        <div
          className='gallery-thumbnails'
          role='group'
          aria-label='Choose image'
        >
          {galleryImages.map((image, index) => (
            <button
              key={image.src}
              type='button'
              aria-label={`Show image ${index + 1} of ${galleryImages.length} from ${project.title}`}
              aria-pressed={index === imageIndex}
              onClick={() => setImageIndex(index)}
            >
              <img
                src={galleryImageUrl(image.src, 160)}
                alt=''
                loading='lazy'
              />
            </button>
          ))}
        </div>
      )}
      {galleryImages.length > 1 && (
        <div className='dialog-navigation'>
          <button type='button' onClick={showPreviousImage}>
            Previous image
          </button>
          <button type='button' onClick={showNextImage}>
            Next image
          </button>
        </div>
      )}
    </dialog>
  );
}

export default ImageDialog;
