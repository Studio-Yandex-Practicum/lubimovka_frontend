import { fetcher } from 'services/fetcher';

import type { PaginatedProjectListList as ProjectListDTO, Project as ProjectDTO } from '__generated__/api-typings';
import type { Project, ProjectDetailed } from 'core/project';

export function getProjects() {
  return fetcher<ProjectListDTO>('/projects/?limit=9999').then(mapDTOToProjects);
}

function mapDTOToProjects({ results = [] }: ProjectListDTO): Project[] {
  return results.map((result) => ({
    id: result.id.toString(),
    title: result.title,
    description: result.intro,
    image: result.image,
  }));
}

export function getProject(projectId: string) {
  return fetcher<ProjectDTO>(`/projects/${projectId}/`).then(mapDTOtoProjectDetailed);
}

function mapDTOtoProjectDetailed(dto: ProjectDTO): ProjectDetailed {
  return {
    title: dto.title,
    intro: dto.intro,
    description: dto.description,
    descriptionCaption: dto.description_caption,
    image: dto.image,
    contents: dto.contents,
  };
}
