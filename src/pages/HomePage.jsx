import { Outlet } from "react-router-dom";
const HomePage = () => {
  return (
    <>
      <nav>
        <span className="text-4xl text-primary">ShopShine</span>
      </nav>
      <Outlet />
    </>
  );
};
export default HomePage;
