export const Tooltip = ({
  message,
  children,
}: {
  message: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="relative flex flex-col items-center group z-[9999]">
      {children}
      <div className="absolute bottom-0 -right-14 flex-col items-start hidden mb-8 group-hover:flex">
        <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-gray-600 shadow-lg rounded-md">
          {message}
        </span>
        <div className="w-3 h-3 -mt-5 -ml-1 rotate-45 bg-gray-600"></div>
      </div>
    </div>
  );
};
