import Header from "../components/Header";
import { Navbar } from "../components";
import { Outlet } from "react-router-dom";
const HomePage = () => {
  return (
    <>
      <Header />
      <Navbar />
      <section className="align-element py-20">
        <Outlet />
      </section>
    </>
  );
};
export default HomePage;
