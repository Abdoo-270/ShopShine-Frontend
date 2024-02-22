import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/products/productsSlice";
import { products } from "../mockData";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Products = () => {
  const productsDb = useSelector((state) => state.productsState.products);
  const isLoading = useSelector((state) => state.productsState.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  console.log(productsDb, isLoading);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-1/2 ">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  return (
    <div className=" grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {productsDb.map((product) => {
        const { title, price, image } = product;
        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="card w-full shadow-xl hover:shadow-2xl transition duration-300"
          >
            <figure className="px-4 pt-4">
              <img
                src={image}
                alt={title}
                className="rounded-xl h-64 md:h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title capitalize tracking-wider">{title}</h2>
              <span className="text-secondary">{price} ₺</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default Products;
