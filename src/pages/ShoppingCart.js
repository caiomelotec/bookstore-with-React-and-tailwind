import { useCart } from "../context/cartcontext";
// import { books } from "../products/books";
// import { useEffect, useState } from "react";

export const ShoppingCart = () => {
  const { total, cartList, addToCart, removeFromCart, removeAll } = useCart();

  let subtotal = parseFloat(total + 4.99).toFixed(2);

  return (
    <div className="h-screen bg-gray-100 pt-20 dark:bg-gray-800">
      <h1 className="mb-10 text-center text-2xl font-bold dark:text-white">
        Cart Items:{" "}
        {cartList.reduce((total, product) => total + product.quantity, 0)}
      </h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        {cartList.length > 0 ? (
          <div className="rounded-lg md:w-2/3 dark:bg-gray-700">
            {cartList.map((book) => (
              <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start dark:bg-gray-500">
                <img
                  src={book.img}
                  alt={book.title}
                  className="w-full rounded-lg sm:w-40 object-cover"
                />
                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div className="mt-5 sm:mt-0">
                    <h2 className="text-lg font-bold text-gray-900">
                      {book.title}
                    </h2>
                    <p className="mt-1 text-m text-gray-700 font-medium">
                      {book.author}
                    </p>
                  </div>
                  <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div className="flex items-center border-gray-100">
                      <span
                        onClick={() => removeFromCart(book)}
                        className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                      >
                        {" "}
                        -{" "}
                      </span>
                      <p className="bg-white p-1 pl-2 pr-2">{book.quantity}</p>
                      <span
                        className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                        onClick={() => addToCart(book)}
                      >
                        {" "}
                        +{" "}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <p className="text-m font-medium">€{book.price}</p>
                      <svg
                        onClick={() => removeAll(book)}
                        id="x-zinho"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}

        {/*  new thing */}
        {cartList.length > 0 ? (
          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-gray-700">€{total}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Shipping</p>
              <p className="text-gray-700">€4.99</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div className="">
                <p className="mb-1 text-lg font-bold">€{subtotal}</p>
                <p className="text-sm text-gray-700">including VAT</p>
              </div>
            </div>
            <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
              Check out
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
