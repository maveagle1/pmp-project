import axios from 'axios';


export const getAllProjects = () => {
  return {
    type: 'GET_ALL_PROJECTS',
    payload: axios.get(`http://localhost:9001/projects`)
  }
}

export const addToProject = (projects) => {
  return {
    type: 'ADD_TO_PROJECTS',
    payload: axios.post(`http://localhost:9001/projects/add`, projects)
  }
}
export const deleteRow = (id) => {
  return {
    type: 'DELETE_ROW',
    payload: axios.delete(`http://localhost:9001/projects/${id}/delete`)
  }
}

export const updateProject = (id) => {
  return {
    type: 'UPDATE_PROJECT',
    payload: axios.patch(`http://localhost:9001/projects/${id}/edit`)
  }
}
