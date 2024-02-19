import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, logoutUser } from "../features/user/userSlice";
import { useEffect } from "react";

const Header = () => {
  const user = useSelector((state) => state.userState.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <header className="bg-neutral py-2 text-neutral-content">
      <div className="align-element flex justify-center sm:justify-end">
        {user ? (
          <div className="flex gap-x-2 sm:gap-x-8 items-center">
            <p className="text-xs sm:text-sm">
              Hello, {user.name} | role: {user.role}
            </p>
            <button
              className="btn btn-xs btn-outline btn-primary"
              onClick={() => dispatch(logoutUser())}
            >
              logout
            </button>
            <Link to="/register" className="link link-hover text-xs sm:text-sm">
              <button className="btn btn-primary btn-sm ">Admin Panel</button>
            </Link>
          </div>
        ) : (
          <div className="flex gap-x-6 justify-center items-center">
            <Link to="/login" className="link link-hover text-xs sm:text-sm">
              Sign in / Guest
            </Link>
            <Link to="/register" className="link link-hover text-xs sm:text-sm">
              Create Account
            </Link>
            <Link to="/register" className="link link-hover text-xs sm:text-sm">
              <button className="btn btn-primary btn-sm ">Admin Panel</button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
