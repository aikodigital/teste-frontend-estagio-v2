export const Table = () => {
  return (
    <table className="table-fixed w-full d-flex justify-items-center">
      <thead>
        <tr className="border-solid border-b-2 border-black">
          <th>Song</th>
          <th>Artist</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        <tr className=" hover:bg-gray-200 border-solid border-b text-center">
          <td className="">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
          <td>Malcolm Lockyer</td>
          <td>1961</td>
        </tr>
        <tr className=" hover:bg-gray-200 border-solid border-b text-center">
          <td>Witchy Woman</td>
          <td>The Eagles</td>
          <td>1972</td>
        </tr>
        <tr className=" hover:bg-gray-200 border-solid border-b text-center">
          <td>Shining Star</td>
          <td>Earth, Wind, and Fire</td>
          <td>1975</td>
        </tr>
      </tbody>
    </table>
  );
};
