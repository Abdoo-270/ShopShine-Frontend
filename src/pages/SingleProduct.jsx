import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../features/product/productSlice";

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";

const SingleProduct = () => {
  // get single product and render its values
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productState.product);
  const isProductLoading = useSelector((state) => state.productState.loading);
  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [dispatch]);
  if (isProductLoading) {
    return (
      <div className="flex justify-center items-center h-1/2 ">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  console.log(product);
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
          src={product.image}
          alt={product.title}
          className="w-96 h-96 object-cover rounded-lg lg:w-full"
        />
        {/* PRODUCT */}
        <div>
          <h1 className="capitalize text-3xl font-bold">{product.title}</h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {product.company}
          </h4>
          <p className="mt-3 text-xl">{product.price}</p>
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
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          {/* CART BTN */}
          <div className="mt-10">
            <button
              onClick={() => toast.success("website under development")}
              className="btn btn-secondary btn-md"
            >
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SingleProduct;
