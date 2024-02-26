import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/products/productsSlice";
import { getSingleProduct } from "../features/product/productSlice";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
const ControlProducts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.productsState.products);
  const isProductsLoading = useSelector((state) => state.productsState.loading);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  if (isProductsLoading) {
    return (
      <div className="flex justify-center items-center h-1/2 ">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

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
              <Link
                key={product.id}
                to={`/control-products/${product.id}`} // Include the "control-products" segment
                className="text-white bg-green-900 w-1/2 btn"
              >
                Edit
                <span>
                  <AiOutlineEdit />
                </span>
              </Link>

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

/*!SECTION
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
  };*/

/*!SECTION

  import SubmitButton from "./SubmitButton";
import FormInput from "./FormInput";
import { Form } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateProduct } from "../features/product/productSlice";

const EditProductModel = () => {
  const product = useSelector((state) => state.productState.product);
  const isLoading = useSelector((state) => state.productState.loading);
  const dispatch = useDispatch();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-1/2 ">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal 
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <Form method="post">
          <h4 className="text-center text-3xl font-bold">Update Product</h4>
          <FormInput
            type="text"
            label="name"
            name="productName"
            defaultValue={product ? product.title : null}
          />
          <FormInput
            type="text"
            label="product image's url"
            name="productImgUrl"
            defaultValue={product ? product.image : null}
          />
          <FormInput
            type="number"
            label="price"
            name="productPrice"
            defaultValue={product ? product.price : null}
          />
          <FormInput
            type="text"
            label="company"
            name="productCompany"
            defaultValue={product ? product.company : null}
          />
          <div className="mt-4 ">
            <button
              type="button"
              className="text-lg btn btn-secondary btn-block"
              onClick={() => console.log()}
            >
              UPDATE
            </button>
          </div>
        </Form>
      </div>
    </dialog>
  );
};
export default EditProductModel;

*/
