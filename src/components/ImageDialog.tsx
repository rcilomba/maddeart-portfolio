import type { RefObject } from 'react';
import type { Project } from '../data/projects';
import { useState } from 'react';

type ImageDialogProps = {
  dialogRef: RefObject<HTMLDialogElement | null>;
  project: Project;
};

function ImageDialog({ dialogRef, project }: ImageDialogProps) {
  const [imageIndex, setImageIndex] = useState(0);

  const galleryImages = project.images?.length
    ? project.images
    : [{ src: project.image, alt: project.alt }];

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
        aria-label='Close image viewer'
        onClick={() => dialogRef.current?.close()}
      >
        Close
      </button>

      <h2 id='image-dialog-title'>{project.title}</h2>
      {project.description && <p>{project.description}</p>}
      {project.subtitle && <p>{project.subtitle}</p>}
      <p aria-live='polite' aria-atomic='true'>
        {galleryImages.length > 1
          ? `${project.title} — ${imageIndex + 1} / ${galleryImages.length}`
          : project.title}
      </p>
      <img src={currentImage.src} alt={currentImage.alt} />
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
              aria-label={`Show image ${index + 1}`}
              aria-pressed={index === imageIndex}
              onClick={() => setImageIndex(index)}
            >
              <img src={image.src} alt='' loading='lazy' />
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
