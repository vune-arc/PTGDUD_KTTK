function Table() {
  return (
    <div>
      <div className="flex justify-between p-6">
        <div className=" flex items-center gap-2 mb-4  ">
          <img src="./img/File text 1.png" className="w-6 h-6" alt="Report Icon" />
          <h2 className="text-xl font-semibold">Detailed report</h2>
        </div>
        <div className='flex'>
          <img src="./image/Move up.png" alt="" className='h-[25px] absolute mt-4 ml-1' />
          <button
            className='px-8 py-2 border rounded-lg border-pink-400 text-pink-400 hover:bg-pink-50'
          >
            Add User
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-50">
             
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CUSTOMER NAME</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">COMPANY</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ORDER VALUE</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ORDER DATE</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">STATUS</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              
              <td className="py-4 px-6 text-sm text-gray-900">John Doe</td>
              <td className="py-4 px-6 text-sm text-gray-900">ABC Corp</td>
              <td className="py-4 px-6 text-sm text-gray-900">$2,500</td>
              <td className="py-4 px-6 text-sm text-gray-900">2025-04-14</td>
              <td className="py-4 px-6 text-sm text-gray-900">
                <span className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">Completed</span>
              </td>
              <td className="py-4 px-6 text-sm text-gray-900">
                <button className="text-blue-500 hover:text-blue-700">Edit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Table;