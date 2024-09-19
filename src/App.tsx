import './App.css';
import NavBar from './state-management/NavBar';
import { AuthProvider } from './state-management/auth';
import LoginStatus from './state-management/auth/LoginStatus';
import Counter from './state-management/reducers/Counter';
import { TasksProvider } from './state-management/tasks';

function App() {


  return <AuthProvider>
    <TasksProvider>
      <LoginStatus />
      <NavBar />
      <Counter/>
      </TasksProvider>
  </AuthProvider>
}

export default App;
