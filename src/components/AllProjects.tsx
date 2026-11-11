import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';
import type { Project } from '../data/projects';

type AllProjectsProps = {
  onOpenProject: (project: Project) => void;
};

function AllProjects({ onOpenProject }: AllProjectsProps) {
  return (
    <section id='all-projects' className='all-projects'>
      <h2>All Projects</h2>
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
