import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function Table() {
  const [customers, setCustomers] = useState([]);
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  useEffect(() => {
    fetch("https://67f3c671cbef97f40d2c08a5.mockapi.io/api/v1/customers")
      .then((res) => res.json())
      .then((data) => setCustomers(data))
      .catch((error) => console.error("Error fetching customers:", error));
  }, []);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * rowsPerPage;
  const paginatedData = customers.slice(startIndex, startIndex + rowsPerPage);

  const getStatusStyle = (status) => {
    switch (status.toLowerCase()) {
      case "new":
        return "bg-blue-100 text-blue-700";
      case "in-progress":
        return "bg-yellow-100 text-yellow-700";
      case "completed":
        return "bg-green-100 text-green-700";
      case "pending":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div>
      <div className="flex justify-between p-2">
        <div className="flex items-center gap-2 mb-4">
          <img
            src="./img/File text 1.png"
            className="w-6 h-6"
            alt="Report Icon"
          />
          <h2 className="text-xl font-semibold">Detailed report</h2>
        </div>
        <div className="flex gap-x-6">
          <button className="flex items-center pl-8 pr-8 py-2 border rounded-lg border-pink-400 text-pink-400 hover:bg-pink-50">
            <img
              src="./img/create.png"
              alt=""
              className="h-[25px] mr-2"  // Thêm khoảng cách giữa hình ảnh và chữ
            />
            Add new
          </button>

          <button className="flex items-center pl-8 pr-8 py-2 border rounded-lg border-pink-400 text-pink-400 hover:bg-pink-50">
            <img
              src="./img/Move up.png"
              alt=""
              className="h-[25px] mr-2"  // Thêm khoảng cách giữa hình ảnh và chữ
            />
            Import
          </button>

          <button className="flex items-center pl-8 pr-8 py-2 border rounded-lg border-pink-400 text-pink-400 hover:bg-pink-50">
            <img
              src="./img/Download.png"
              alt=""
              className="h-[25px] mr-2"  // Thêm khoảng cách giữa hình ảnh và chữ
            />
            Export
          </button>
        </div>


      </div>

      <div className="overflow-x-auto px-2">
        <table className="min-w-full bg-white rounded-lg overflow-hidden border">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-6 text-left text-xs font-bold text-gray-700 uppercase">
                CUSTOMER NAME
              </th>
              <th className="py-3 px-6 text-left text-xs font-bold text-gray-700 uppercase">
                COMPANY
              </th>
              <th className="py-3 px-6 text-left text-xs font-bold text-gray-700 uppercase">
                ORDER VALUE
              </th>
              <th className="py-3 px-6 text-left text-xs font-bold text-gray-700 uppercase">
                ORDER DATE
              </th>
              <th className="py-3 px-6 text-left text-xs font-bold text-gray-700 uppercase">
                STATUS
              </th>
              <th className="py-3 px-6 text-left text-xs font-bold text-gray-700 uppercase">
                ACTIONS
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((customer, index) => (
              <tr
                key={customer.id}
                className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-gray-100 transition-colors duration-200`}
              >
                <td className="py-4 px-6 text-left flex items-center gap-2">
                  <img
                    src={customer.avatar}
                    alt="avatar"
                    className="w-8 h-8 rounded-full"
                  />
                  {customer.customerName}
                </td>
                <td className="py-4 px-6 text-left">{customer.companyName}</td>
                <td className="py-4 px-6 text-left">
                  ${parseFloat(customer.orderValue).toFixed(2)}
                </td>
                <td className="py-4 px-6 text-left">
                  {new Date(customer.orderDate).toLocaleDateString()}
                </td>
                <td className="py-4 px-6 text-left">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusStyle(
                      customer.status || ""
                    )}`}
                  >
                    {customer.status}
                  </span>
                </td>
                <td className="py-4 px-6 text-left">
                  <button className="text-blue-500 hover:underline">
                    <img src="/img/create.png" alt="" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex items-center justify-between mt-4 px-2">
          <div className="text-sm text-gray-500">
            Showing <span className="font-medium">{startIndex + 1}</span> to{" "}
            <span className="font-medium">
              {Math.min(page * rowsPerPage, customers.length)}
            </span>{" "}
            of <span className="font-medium">{customers.length}</span> results
          </div>

          <Stack spacing={2}>
            <Pagination
              count={Math.ceil(customers.length / rowsPerPage)}
              page={page}
              onChange={handleChangePage}
              color="primary"
              shape="rounded"
            />
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default Table;
