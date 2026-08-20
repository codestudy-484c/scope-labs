import projectsData from './projects.json';

export interface Project {
    id              : string;
    name            : string;
    description     : string;
    version         : string;
    releaseYear     : number;
    category        : string;
    status          : 'Released' | 'In Development' | 'Archived';
    link            : string;
    isLatest?       : boolean;
}

export const project: Project[] = projectsData as Project[];

export function getLatestProject(): Project | undefined {
    return project.find((p) => p.isLatest);
}
