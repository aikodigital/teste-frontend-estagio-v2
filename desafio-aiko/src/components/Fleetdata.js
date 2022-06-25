export const Fleetdata = () => {
  return (
    <div>
      <div
        style={{ marginTop: "-120px" }}
        className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-2 xl:grid-cols-4 gap-x-10"
      >
        {/* <!--Card 1--> */}
        <div>
          <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
            <button
              type="button"
              className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              style={{ marginTop: "-80px" }}
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
            <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
              Maintenance
            </h5>
            <p className="text-5xl text-red-600 text-base">14%</p>
            <button
              type="button"
              className="mt-6 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Button
            </button>
          </div>
        </div>
        {/* <!--Card 3--> */}
        <div>
          <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
            <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
              Productivity
            </h5>
            <p className="text-5xl text-green-500 text-base">77%</p>
            <button
              type="button"
              className="mt-6 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Button
            </button>
          </div>
        </div>

        {/* <!--Card 4--> */}
        <div>
          <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
            <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
              Fleet chart
            </h5>
            <p className="text-5xl text-green-500 text-base">77%</p>
            <button
              type="button"
              className="mt-6 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
