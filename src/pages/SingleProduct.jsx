import { Link } from "react-router-dom";
const SingleProduct = () => {
  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      {/* PRODUCT */}
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* IMAGE */}
        <img
          src="https://images.pexels.com/photos/610945/pexels-photo-610945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Wireless Headphones"
          className="w-96 h-96 object-cover rounded-lg lg:w-full"
        />
        {/* PRODUCT */}
        <div>
          <h1 className="capitalize text-3xl font-bold">Wireless Headphones</h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            SoundTech
          </h4>
          <p className="mt-3 text-xl">99.99</p>
          <p className="mt-6 leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            reiciendis libero quisquam at mollitia quidem? Similique ipsum
            voluptatum minima atque sed? Error doloremque in, consectetur id
            voluptatibus aliquid nobis numquam.
          </p>
          {/* AMOUNT */}
          <div className="form-control w-full max-w-xs">
            <label className="label" htmlFor="amount">
              <h4 className="text-md font-medium -tracking-wider capitalize">
                amount
              </h4>
            </label>
            <select
              className="select select-secondary select-bordered select-md"
              id="amount"
              value="3"
            >
              123
            </select>
          </div>
          {/* CART BTN */}
          <div className="mt-10">
            <button className="btn btn-secondary btn-md">Add to bag</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SingleProduct;
