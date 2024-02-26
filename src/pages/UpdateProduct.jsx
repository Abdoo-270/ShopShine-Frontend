import { FormInput, SubmitButton } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../features/product/productSlice";

import { Form, useParams, redirect } from "react-router-dom";
import { useEffect } from "react";
import { customFetch } from "../utils";
import { toast } from "react-toastify";

// update product
export const action =
  () =>
  async ({ params, request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const id = params.id;
    try {
      const response = await customFetch.patch(`/products/${id}`, data);
      toast.success("product updated successfully");
      return redirect("/control-products");
    } catch (error) {
      const errorMessage =
        error.response.data.msg || "product updating failed, try again";
      toast.error(errorMessage);
      return null;
    }
  };

const UpdateProduct = () => {
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

  return (
    <div className="w-1/2 m-auto ">
      <Form method="post">
        <h4 className="text-center text-3xl font-bold">Update Product</h4>
        <FormInput
          type="text"
          label="name"
          name="title"
          defaultValue={product ? product.title : null}
        />
        <FormInput
          type="text"
          label="product image's url"
          name="image"
          defaultValue={product ? product.image : null}
        />
        <FormInput
          type="number"
          label="price"
          name="price"
          defaultValue={product ? product.price : null}
        />
        <FormInput
          type="text"
          label="company"
          name="company"
          defaultValue={product ? product.company : null}
        />
        <div className="mt-4 ">
          <SubmitButton text="UPDATE" />
        </div>
      </Form>
    </div>
  );
};

export default UpdateProduct;
