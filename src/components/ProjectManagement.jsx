
import React, { useState } from 'react';
import ProjectSubmission from './ProjectSubmission';
import ProjectList from './ProjectList';
import { Typography } from 'antd';

const ProjectManagement= () => {
  const [projects, setProjects] = useState([]);

  const addProject = (projectData) => {
    setProjects((prevProjects) => [...prevProjects, projectData]);
  };

  const updateProject = (updatedProject) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.key === updatedProject.key ? updatedProject : project
      )
    );
  };

  const deleteProject = (key) => {
    setProjects((prevProjects) => prevProjects.filter((project) => project.key !== key));
  };

  return (
    <div className="common">
       <Typography.Title level={1} className="heading">
            Create and Manage your projects.
       </Typography.Title>
      <ProjectSubmission addProject={addProject} />
      {projects.length > 0 && (
      <ProjectList  projects={projects} 
      updateProject={updateProject} 
      deleteProject={deleteProject} 
                           />)}
    </div>
  );
};

export default ProjectManagement;