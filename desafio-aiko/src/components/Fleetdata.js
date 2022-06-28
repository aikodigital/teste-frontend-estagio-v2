export const Fleetdata = () => {
  return (
    <div className="grid gap-2 sm:grid-cols-2 mb-16 lg:grid-cols-2 xl:grid-cols-4 m-4">
      {/* <!--Card 1--> */}

      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
        <div
          type="button"
          className=" inline-block px-4 py-4 bg-orange-600 text-white font-medium text-xs leading-tight uppercase rounded-lg shadow-md "
          style={{ transform: "translate(-0.5rem, -7.5ex)" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
          Profits
        </h5>
        <p className="text-5xl text-green-500 text-base break-normal">
          $45000.00
        </p>
      </div>

      {/* <!--Card 2--> */}

      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
        <button
          type="button"
          className=" inline-block px-4 py-4 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded-lg shadow-md "
          style={{ transform: "translate(-0.5rem, -7.5ex)" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        </button>
        <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
          Productivity
        </h5>
        <p className="text-5xl text-green-500 text-base break-normal">89%</p>
      </div>

      {/* <!--Card 3--> */}

      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
        <button
          type="button"
          className=" inline-block px-4 py-4 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded-lg shadow-md "
          style={{ transform: "translate(-0.5rem, -7.5ex)" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </button>
        <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
          Fleet maintenance
        </h5>
        <p className="text-5xl text-green-500 text-base break-normal">9%</p>
      </div>

      {/* <!--Card 4--> */}

      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
        <div
          type="button"
          className=" inline-block px-4 py-4 bg-pink-600 text-white font-medium text-xs leading-tight uppercase rounded-lg shadow-md  "
          style={{ transform: "translate(-0.5rem, -7.5ex)" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
            />
          </svg>
        </div>
        <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
          Fleet chart
        </h5>
        <p className="text-5xl text-green-500 text-base break-normal"></p>
      </div>
    </div>
  );
};
