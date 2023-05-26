import { useContext } from "react";
import { books } from "../products/books";
import { ResultsContext } from "../context/resultcontext";
import { useCart } from "../context/cartcontext";

export const BookList = () => {
  const { results } = useContext(ResultsContext);
  const { addToCart } = useCart();

  return (
    <>
      {results.length > 0 ? (
        ""
      ) : (
        <div className="bg-white dark:bg-gray-800 max-h-30 w-full align-middle">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
              {books.map((book) => (
                <div
                  key={book.id}
                  className="group flex flex-col justify-between"
                >
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      src={book.img}
                      alt={book.title}
                      className="h-full w-full object-cover object-center group-hover:opacity-75 cursor-pointer"
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <h3 className="mt-4 text-sm text-gray-700 dark:border-gray-700 dark:text-white truncate">
                      {book.author}
                    </h3>
                    <p className="mt-1 text-lg font-medium text-gray-900 dark:text-white cursor-pointer md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 truncate">
                      {book.title}
                    </p>
                    <div className="flex justify-around mt-3">
                      <p className="mt-1 text-lg font-medium text-gray-900 dark:text-white">
                        €{book.price}
                      </p>
                      <button
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={() => addToCart(book)}
                      >
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 mr-2 -ml-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                        </svg>
                        Buy now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
