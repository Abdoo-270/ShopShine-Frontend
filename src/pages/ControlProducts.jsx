import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/product/productSlice";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
const ControlProducts = () => {
  const productsDb = useSelector((state) => state.productState.products);
  const isLoading = useSelector((state) => state.productState.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

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
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                Edit{" "}
                <span>
                  <AiOutlineEdit />
                </span>
              </button>
              <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">Hello!</h3>
                  <p className="py-4">
                    Press ESC key or click the button below to close
                  </p>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>

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
