import axios from 'axios';


export const getAllProjects = () => {
  return {
    type: 'GET_ALL_PROJECTS',
    payload: axios.get(`http://localhost:8000/projects`)
  }
}

export const addToProject = () => {
  return {
    type: 'ADD_TO_PROJECTs',
    payload: axios.patch(`http://localhost:8000/projects/add`)
  }
}
export const deleteProject = (id) => {
  return {
    type: 'DELETE_PROJECT',
    payload: axios.patch(`http://localhost:8000/Project-list/${id}/delete`)
  }
}

export const updateProject = (id) => {
  return {
    type: 'UPDATE_PROJECT',
    payload: axios.patch(`http://localhost:8000/projects/${id}/update`)
  }
}
