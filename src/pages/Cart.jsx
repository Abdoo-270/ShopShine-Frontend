import { useState } from "react";
import CartItemsList from "../components/CartItemsList";
import CartTotals from "../components/CartTotals";
import SectionTitle from "../components/SectionTitle";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Cart = () => {
  const user = useSelector((state) => state.userState.user);
  toast.success("website under development");
  return (
    <>
      <SectionTitle text="Shopping Cart" />
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals />
          {user ? (
            <button
              onClick={() => toast.success("website under development")}
              className="btn btn-primary btn-block mt-8"
            >
              proceed to checkout
            </button>
          ) : (
            <Link to="/login" className="btn btn-primary btn-block mt-8">
              please login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};
export default Cart;
