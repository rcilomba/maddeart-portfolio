import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';
import type { Project } from '../data/projects';
import { useEffect } from 'react';

type AllProjectsProps = {
  onOpenProject: (project: Project) => void;
};

function AllProjects({ onOpenProject }: AllProjectsProps) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Projects | Madeleine Dalla';

    return () => {
      document.title = previousTitle;
    };
  }, []);
  return (
    <section id='all-projects' className='all-projects'>
      <h1>All Projects</h1>
      <p>{projects.length} photographic projects.</p>

      <div className='project-grid'>
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            {...project}
            onOpen={() => onOpenProject(project)}
          />
        ))}
      </div>
    </section>
  );
}

export default AllProjects;
