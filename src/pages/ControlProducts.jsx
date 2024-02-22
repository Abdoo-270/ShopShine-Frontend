import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/products/productsSlice";
import { getSingleProduct } from "../features/product/productSlice";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import EditProductModel from "../components/EditProductModel";
const ControlProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productsState.products);
  const isProductsLoading = useSelector((state) => state.productsState.loading);

  const product = useSelector((state) => state.productState.product);
  const isProductLoading = useSelector((state) => state.productState.loading);
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  useEffect(() => {
    if (product) {
      // Show the modal
      const modal = document.getElementById("my_modal_1");
      if (modal) {
        modal.showModal();
      } else {
        console.error("Modal element not found");
      }
    }
  }, [product]);

  if (isProductsLoading || isProductLoading) {
    return (
      <div className="flex justify-center items-center h-1/2 ">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  const handleEditClick = (id) => {
    // Dispatch the action to fetch the single product
    dispatch(getSingleProduct(id));
  };

  return (
    <div className=" grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const { title, price, image } = product;
        return (
          <article
            key={product.id}
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
            <div className="flex justify-between mt-0">
              {/* Open the modal using document.getElementById('ID').showModal() method */}
              <button
                className="text-white bg-green-900 w-1/2 btn"
                onClick={() => handleEditClick(product.id)}
              >
                Edit
                <span>
                  <AiOutlineEdit />
                </span>
              </button>
              <EditProductModel />

              <button className="text-white bg-red-800 w-1/2 btn btn-error">
                Remove
                <span>
                  <AiOutlineDelete />
                </span>
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};
export default ControlProducts;
