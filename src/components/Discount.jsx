const Discount = () => {
  return (
    <div>
      <div className="bg-gradient-to-b from-pink-100 to-purple-200">
        <div className="container m-auto px-6 py-20 md:px-12 lg:px-20">
          <div className="m-auto text-center lg:w-8/12 xl:w-7/12">
            <h2 className="text-2xl text-pink-900 font-bold md:text-4xl">
              Subscribe today for VIP access to the best car deals and
              personalized recommendations.
            </h2>
          </div>
          <div className="mt-12 m-auto -space-y-4 items-center justify-center md:flex md:space-y-0 md:-space-x-4 xl:w-10/12">
            <div className="relative z-10 -mx-4 group md:w-6/12 md:mx-0 lg:w-5/12">
              <div
                aria-hidden="true"
                className="absolute top-0 w-full h-full rounded-2xl bg-white shadow-xl transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"
              ></div>
              <div className="relative p-6 space-y-6 lg:p-8">
                <h3 className="text-3xl text-gray-700 font-semibold text-center">
                  Discount
                </h3>
                <div>
                  <div className="relative flex justify-around">
                    <div className="flex items-end">
                      <span className="text-8xl text-gray-800 font-bold leading-0">
                        5
                      </span>
                      <div className="pb-2">
                        <span className="block text-2xl text-gray-700 font-bold">
                          %
                        </span>
                        <span className="block text-xl text-purple-500 font-bold">
                          Off
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <ul
                  role="list"
                  className="w-max space-y-4 py-6 m-auto text-gray-600"
                >
                  <li className="space-x-2">
                    <span className="text-purple-500 font-semibold">
                      Toyota
                    </span>
                    <span>Family Cars above $22000</span>
                  </li>
                  <li className="space-x-2">
                    <span className="text-purple-500 font-semibold">Tesla</span>
                    <span>Electric Cars above $35000</span>
                  </li>
                  <li className="space-x-2">
                    <span className="text-purple-500 font-semibold">BMW</span>
                    <span>Cars Price above $25000</span>
                  </li>
                </ul>
                <p className="flex items-center justify-center space-x-4 text-lg text-gray-600 text-center">
                  <span>Call us at</span>
                  <a
                    href="tel:+24300"
                    className="flex space-x-2 items-center text-purple-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-6"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                    </svg>
                    <span className="font-semibold">+4917822222</span>
                  </a>
                  <span>or</span>
                </p>
                <button
                  type="submit"
                  title="Submit"
                  className="block w-full py-3 px-6 text-center rounded-xl transition bg-purple-600 hover:bg-purple-700 active:bg-purple-800 focus:bg-indigo-600"
                >
                  <span className="text-white font-semibold">
                    Send us an email
                  </span>
                </button>
              </div>
            </div>

            <div className="relative group md:w-6/12 lg:w-7/12">
              <div
                aria-hidden="true"
                className="absolute top-0 w-full h-full rounded-2xl bg-white shadow-lg transition duration-500 group-hover:scale-105"
              ></div>
              <div className="relative p-6 pt-16 md:p-8 md:pl-12 md:rounded-r-2xl lg:pl-20 lg:p-16">
                <ul role="list" className="space-y-4 py-6 text-gray-600">
                  <li className="space-x-2">
                    <span className="text-purple-500 font-semibold">
                      Service
                    </span>
                    <span>Free First 2 services</span>
                  </li>
                  <li className="space-x-2">
                    <span className="text-purple-500 font-semibold">
                      Customization
                    </span>
                    <span>Free customization up to $1000</span>
                  </li>
                  <li className="space-x-2">
                    <span className="text-purple-500 font-semibold">
                      Monthly Check
                    </span>
                    <span>Get monthly check of your cars for 1 year</span>
                  </li>
                  <li className="space-x-2">
                    <span className="text-purple-500 font-semibold">
                      Magazine
                    </span>
                    <span>Receive Weekly magazine free</span>
                  </li>
                </ul>
                <p className="text-gray-700">
                  Our Cars are the best in the town. We offer the best price in
                  the country. Give us the opportunity to serve you.
                </p>
                <div className="mt-6 flex justify-between gap-6">
                  <img
                    className="w-16 lg:w-20"
                    src="https://i.ibb.co/jLkZjQ7/toyota-logo-vector.png"
                    loading="lazy"
                    alt="airbnb"
                  />
                  <img
                    className="w-16 lg:w-20"
                    src="https://i.ibb.co/WPjjgb7/bmw-logo-vector-01.png"
                    loading="lazy"
                    alt="bissell"
                  />
                  <img
                    className="w-16 lg:w-20"
                    src="https://i.ibb.co/s1b8PNb/tesla-logo.png"
                    loading="lazy"
                    alt="ge"
                  />
                  {/* <img
                    className="w-20 lg:w-28"
                    src="https://tailus.io/sources/blocks/organization/preview/images/clients/microsoft.svg"
                    loading="lazy"
                    alt="microsoft"
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
