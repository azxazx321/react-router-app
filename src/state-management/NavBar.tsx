import { useContext } from 'react';
import AuthContext from './auth/authContext';
import useCounterStore from './reducers/store';

const NavBar = () => {
  const {user} = useContext(AuthContext)
  const {counter} = useCounterStore()
  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{counter}</span>
      {/* <LoginStatus /> */}
    </nav>
  );
};

export default NavBar;
