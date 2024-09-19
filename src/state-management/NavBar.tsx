import { useContext } from 'react';
import AuthContext from './auth/authContext';

const NavBar = () => {
  const {user} = useContext(AuthContext)
  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{user}</span>
      {/* <LoginStatus /> */}
    </nav>
  );
};

export default NavBar;
