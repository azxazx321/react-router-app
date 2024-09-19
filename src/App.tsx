import { useReducer } from 'react';
import './App.css';
import tasksReducer from './state-management/reducers/tasksReducer';
import TasksContext from './state-management/context/tasksContext';
import NavBar from './state-management/NavBar';
import LoginStatus from './state-management/LoginStatus';
import AuthProvider from './state-management/AuthProvider';
import TasksProvider from './state-management/TasksProvider';


function App() {
  const [tasks, tasksDispatch] = useReducer(tasksReducer, [])


  return <AuthProvider>
    <TasksProvider>
      <LoginStatus />
      <NavBar />
      </TasksProvider>
  </AuthProvider>
}

export default App;
