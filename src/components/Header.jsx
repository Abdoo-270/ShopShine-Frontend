import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, logoutUser } from "../features/user/userSlice";
import { useEffect } from "react";
import { toast } from "react-toastify";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.userState.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const checkUserRole = () => {
    if (!user || user.role === "user") {
      toast.error("Sorry, Only admins can access this page");
      navigate("/");
    } else if (user.role === "admin") {
      toast.success("you are already in the admin page");
    }
  };
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
            <button
              className="btn btn-primary btn-sm "
              onClick={() => checkUserRole()}
            >
              Admin Panel
              {/*
              {user.role === "admin" ? "User Panel" : "Admin Panel"}
        */}
            </button>
          </div>
        ) : (
          <div className="flex gap-x-6 justify-center items-center">
            <Link to="/login" className="link link-hover text-xs sm:text-sm">
              Sign in / Guest
            </Link>
            <Link to="/register" className="link link-hover text-xs sm:text-sm">
              Create Account
            </Link>
            <button
              className="btn btn-primary btn-sm "
              onClick={() => checkUserRole()}
            >
              Admin Panel
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
