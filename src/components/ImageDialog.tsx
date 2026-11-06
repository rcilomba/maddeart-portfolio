import type { RefObject } from 'react';
import type { Project } from '../data/projects';

type ImageDialogProps = {
  dialogRef: RefObject<HTMLDialogElement | null>;
  project: Project;
  position: number;
  total: number;
  onPrevious: () => void;
  onNext: () => void;
};

function ImageDialog({
  dialogRef,
  project,
  position,
  total,
  onPrevious,
  onNext,
}: ImageDialogProps) {
  return (
    <dialog
      onKeyDown={(event) => {
        if (event.key === 'ArrowRight') {
          event.preventDefault();
          onNext();
        } else if (event.key === 'ArrowLeft') {
          event.preventDefault();
          onPrevious();
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
      <p aria-live='polite' aria-atomic='true'>
        {project.title} — {position} / {total}
      </p>
      <img src={project.image} alt={project.alt} />

      <div className='dialog-navigation'>
        <button type='button' onClick={onPrevious}>
          Previous project
        </button>
        <button type='button' onClick={onNext}>
          Next project
        </button>
      </div>
    </dialog>
  );
}

export default ImageDialog;
