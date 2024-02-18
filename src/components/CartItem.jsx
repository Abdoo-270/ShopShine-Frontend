//import { formatPrice, generateAmountOptions } from "../utils";
//import { removeItem, editItem } from "../features/cart/cartSlice";
//import { useDispatch } from "react-redux";
const CartItem = ({ cartItem }) => {
  return (
    <article
      key={1}
      className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0"
    >
      {/* IMAGE */}
      <img
        src="https://images.pexels.com/photos/610945/pexels-photo-610945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="İphone 15"
        className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover"
      />
      {/* INFO */}
      <div className="sm:ml-16 sm:w-48">
        {/* TITLE */}
        <h3 className="capitalize font-medium">Iphone 15</h3>
        {/* COMPANY */}
        <h4 className="mt-2 capitalize text-sm text-neutral-content">
          AppleInc
        </h4>
      </div>
      <div className="sm:ml-12">
        {/* AMOUNT */}
        <div className="form-control max-w-xs">
          <label htmlFor="amount" className="label p-0">
            <span className="label-text">Amount</span>
          </label>
          <select
            name="amount"
            id="amount"
            className="mt-2 select select-base select-bordered select-xs"
            value="2"
          ></select>
        </div>
        {/* REMOVE */}
        <button className="mt-2 link link-primary link-hover text-sm">
          remove
        </button>
      </div>

      {/* PRICE */}
      <p className="font-medium sm:ml-auto">112.99 $</p>
    </article>
  );

  /*
    const dispatch = useDispatch();

  const removeItemFromTheCart = () => {
    dispatch(removeItem({ cartID }));
  };
  const handleAmount = (e) => {
    dispatch(editItem({ cartID, amount: parseInt(e.target.value) }));
  };

  const { cartID, title, price, image, amount, company, productColor } =
    cartItem;
*/
};
export default CartItem;
