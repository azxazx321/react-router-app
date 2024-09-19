import useAuthStore from "./store";
import useAuth from "./useAuth";


const LoginStatus = () => {
  const {user, login, logon} = useAuthStore()
  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => logon()} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a onClick={() => login('mosh')} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
