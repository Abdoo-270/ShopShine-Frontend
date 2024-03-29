import { Link } from "react-router-dom";

import hero1 from "../assets/hero1.png";
import { useSelector } from "react-redux";

const Hero = () => {
  let userRole = null;
  const user = useSelector((state) => state.userState.user);
  if (user) {
    userRole = user.role;
  }
  console.log(user);
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl text-1xl font-bold tracking-tight  sm:text-6xl ">
          Shop smarter, shop here
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-8">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua. Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
          qui lorem cupidatat commodo.
        </p>
        <div className="mt-10 ">
          {(userRole === null || userRole === "user") && (
            <Link to="products" className="btn btn-primary ">
              Our Products
            </Link>
          )}
        </div>
      </div>
      <div className="hidden  h-[28rem] lg:carousel carousel-center   p-4 space-x-4 bg-neutral rounded-box">
        <img src={hero1} className="rounded-box h-full w-100  object-cover" />
      </div>
    </div>
  );
};
export default Hero;
