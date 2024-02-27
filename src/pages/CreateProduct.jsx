import { Form, redirect } from "react-router-dom";
import { FormInput, SubmitButton } from "../components";
import { customFetch } from "../utils";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await customFetch.post("/products", data);
    toast.success("product created successfully");
    return redirect("/control-products");
  } catch (error) {
    const errorMessage =
      error.response.data.msg || "product creating failed, try again";
    toast.error(errorMessage);
    return null;
  }
};

const CreateProduct = () => {
  return (
    <div className="w-1/2 m-auto ">
      <Form method="post">
        <h4 className="text-center text-3xl font-bold">Add Product</h4>
        <FormInput type="text" label="name" name="title" />
        <FormInput type="text" label="product image's url" name="image" />
        <FormInput type="number" label="price" name="price" />
        <FormInput type="text" label="company" name="company" />
        <div className="mt-4 ">
          <SubmitButton text="Add New Product" />
        </div>
      </Form>
    </div>
  );
};
export default CreateProduct;
