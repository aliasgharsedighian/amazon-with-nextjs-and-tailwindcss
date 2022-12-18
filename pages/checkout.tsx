import React from "react";
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header";
import { selectItems } from "../slices/basketSlice";
import { ProductsType } from "../typing"; 

type Props = {
  price: number;
}

function Checkout({ price }: Props) {
  const items = useSelector(selectItems);
  return (
    <div className="bg-gray-100">
      <Header />

      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* {left} */}
        <div className="flex-grow m-5 shadow-sm">
          <img
            className="w-[1020px] h-[250px] object-contain"
            src="http://localhost:3000/images/imgs/Prime-day-banner.png"
            alt=""
          />

          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0
                ? "Your Amazon Basket is empty."
                : "Shopping Basket"}
            </h1>

            {items.map((item: ProductsType, i:number) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                rating={item.rating}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                hasPrime={item.hasPrime}
              />
            ))}
          </div>
        </div>

        {/* {right} */}
        <div>
          {items.length > 0 && (
            <>
              <h2>
                Subtotal ({items.length} items):
                <span>
                  <span>${price}</span>
                </span>
              </h2>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default Checkout;
