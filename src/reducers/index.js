import projects from './projects';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    projects,
    form: formReducer
});

export default rootReducer;
