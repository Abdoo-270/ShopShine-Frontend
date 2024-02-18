import { useState } from "react";
import CartItemsList from "../components/CartItemsList";
import CartTotals from "../components/CartTotals";
import SectionTitle from "../components/SectionTitle";
import { Link } from "react-router-dom";
const Cart = () => {
  const [user, setUser] = useState(true);
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
            <Link to="/checkout" className="btn btn-primary btn-block mt-8">
              proceed to checkout
            </Link>
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
