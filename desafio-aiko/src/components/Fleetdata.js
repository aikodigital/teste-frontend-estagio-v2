export const Fleetdata = () => {
  return (
    <div>
      <div className="grid grid-cols-1 mb-16 lg:grid-cols-2 xl:grid-cols-4 ">
        {/* <!--Card 1--> */}
        <div>
          <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
            <button
              type="button"
              className=" inline-block px-8 py-10 bg-orange-600 text-white font-medium text-xs leading-tight uppercase rounded-lg shadow-md "
              style={{ transform: "translate(0.9rem, -10.5ex)" }}
            >
              Button
            </button>
            <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
              Profits
            </h5>
            <p className="text-5xl text-green-500 text-base break-normal">
              $450.00
            </p>
          </div>
        </div>
        {/* <!--Card 2--> */}
        <div>
          <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
            <button
              type="button"
              className=" inline-block px-8 py-10 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded-lg shadow-md "
              style={{ transform: "translate(0.9rem, -10.5ex)" }}
            >
              Button
            </button>
            <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
              Profits
            </h5>
            <p className="text-5xl text-green-500 text-base break-normal">
              $450.00
            </p>
          </div>
        </div>
        {/* <!--Card 3--> */}
        <div>
          <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
            <button
              type="button"
              className=" inline-block px-8 py-10 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded-lg shadow-md "
              style={{ transform: "translate(0.9rem, -10.5ex)" }}
            >
              Button
            </button>
            <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
              Profits
            </h5>
            <p className="text-5xl text-green-500 text-base break-normal">
              $450.00
            </p>
          </div>
        </div>

        {/* <!--Card 4--> */}
        <div>
          <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
            <button
              type="button"
              className=" inline-block px-8 py-10 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-lg shadow-md  "
              style={{ transform: "translate(0.9rem, -10.5ex)" }}
            >
              Button
            </button>
            <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
              Profits
            </h5>
            <p className="text-5xl text-green-500 text-base break-normal">
              $450.00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
