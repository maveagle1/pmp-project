import axios from 'axios';

// Action that gets all of the cameras
export const getAllProjects = () => {
  return {
    type: 'GET_ALL_PROJECTS',
    payload: axios.get(`http://localhost:8000/projects`)
  }
}

export const addToCart = (id) => {
  return {
    type: 'ADD_TO_PROJECTS',
    payload: axios.patch(`http://localhost:8000/cart/${id}/add`)
  }
}
