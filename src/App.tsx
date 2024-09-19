import { useReducer } from 'react';
import './App.css';
import tasksReducer from './state-management/reducers/tasksReducer';
import TasksContext from './state-management/context/tasksContext';
import NavBar from './state-management/NavBar';
import LoginStatus from './state-management/LoginStatus';
import AuthProvider from './state-management/AuthProvider';


function App() {
  const [tasks, tasksDispatch] = useReducer(tasksReducer, [])


  return <AuthProvider>
    <TasksContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
      <LoginStatus />
      <NavBar />
    </ TasksContext.Provider>
  </AuthProvider>
}

export default App;
