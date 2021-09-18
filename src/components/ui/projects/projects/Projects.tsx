import { FC, useState, useEffect } from 'react';
import cn from 'classnames';
import devApi from './devAPI';
import Project from '../project/Project';

import styles from './Projects.module.css';

interface ProjectData {
  _id: string;
  imgUrl: string;
  imgAlt: string;
  title: string;
  text: string;
}


const Projects: FC = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    devApi.getProjects().then((res) => setProjects(res));
  },[]);
  
  return (
    <ul
      className={cn(styles.list)}
    >
      {projects.map((project: ProjectData) => {
        return (
          <Project data={project} key={project._id} />
        );
      })}
    </ul>
  );
};

export default Projects;
