import './App.css';
import NavBar from './state-management/NavBar';
import LoginStatus from './state-management/LoginStatus';
import AuthProvider from './state-management/AuthProvider';
import { TasksProvider } from './state-management/tasks';

function App() {


  return <AuthProvider>
    <TasksProvider>
      <LoginStatus />
      <NavBar />
      </TasksProvider>
  </AuthProvider>
}

export default App;
