import { fetcher } from 'services/fetcher';

import type { Project, ProjectDetailed } from 'core/project';
import type { PaginatedProjectListList as ProjectListDTO, Project as ProjectDTO } from 'api-typings';

export function getProjects() {
  return fetcher<ProjectListDTO>('/projects/?limit=9999').then(mapDTOToProjects);
};

function mapDTOToProjects({ results = [] }: ProjectListDTO): Project[] {
  return results.map((result) => ({
    id: result.id.toString(),
    title: result.title,
    description: result.intro,
    image: result.image,
  }));
};

export function getProject(projectId: string) {
  return fetcher<ProjectDTO>(`/projects/${projectId}/`).then(mapDTOtoProjectDetailed);
};

function mapDTOtoProjectDetailed(dto: ProjectDTO ): ProjectDetailed {
  return {
    title: dto.title,
    intro: dto.intro,
    description: dto.description,
    image: dto.image,
    contents: dto.contents,
  };
}
