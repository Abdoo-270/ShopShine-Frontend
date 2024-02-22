import SubmitButton from "./SubmitButton";
import FormInput from "./FormInput";
import { Form } from "react-router-dom";
import { useSelector } from "react-redux";

const EditProductModel = () => {
  const product = useSelector((state) => state.productState.product);

  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
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
