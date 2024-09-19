import { useReducer } from 'react';
import './App.css';

import TaskList from './state-management/TaskList';
import tasksReducer from './state-management/reducers/tasksReducer';
import TasksContext from './state-management/context/tasksContext';
import NavBar from './state-management/NavBar';
import authReducer from './state-management/reducers/authReducer';
import AuthContext from './state-management/context/authContext';
import LoginStatus from './state-management/LoginStatus';
import AuthProvider from './state-management/AuthProvider';


function App() {
  const [tasks, tasksDispatch] = useReducer(tasksReducer, [])
  const [user, authDispatch] = useReducer(authReducer, '')


  return  <AuthProvider>
            <TasksContext.Provider value={{tasks, dispatch: tasksDispatch}}>
              <LoginStatus/>
              <NavBar/>
            </ TasksContext.Provider>
          </AuthProvider>
}

export default App;
