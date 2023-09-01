import React, { useEffect, useState } from "react";
import CardProduct from "../../components/CardProduct/CardProduct";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/slices/productSlice";

const Home = () => {
  const [totalPrice, setTotalPrice] = useState(0);

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.data);

  const product = useSelector((state) => state.product);

  const { products, loading, error } = product;

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);
  return (
    <div className="md:container mx-auto md:max-w-full md:px-12 md:py-3">
      <div className="flex justify-between gap-4">
        <div className="w-[70%]">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <div className="grid grid-cols-4 gap-4">
              {products.map((product) => {
                return (
                  <CardProduct
                    id={product.id}
                    title={product.title}
                    image={product.image}
                    desc={product.desc}
                    price={product.price}
                    key={product.id}
                  />
                );
              })}
            </div>
          )}
        </div>
        <div className="w-[30%] p-3 bg-slate-200">
          <h3 className="px-5 font-bold">CART</h3>
          <hr />
          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Title</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 &&
                cart.map((item) => {
                  let total = item.price * item.qty;
                  let rupiahFormat = new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  });
                  return (
                    <tr key={item.id}>
                      <td>{item.title}</td>
                      <td>IDR {rupiahFormat.format(item.price)}</td>
                      <td>{item.qty}</td>
                      <td>{rupiahFormat.format(total)}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <div className="flex justify-between font-bold px-5">
            <span>Total Price</span>
            <span>
              IDR{" "}
              {totalPrice.toLocaleString("id-ID", {
                styles: "currency",
                currency: "IDR",
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
