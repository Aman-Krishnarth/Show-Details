import axios from "axios";
import React, { useEffect, useState } from "react";

// const data = [
//   {
//     _id: "67a628592402bdbc6a8fb05a",
//     cardHolderName: "Kratos",
//     cardNumber: "1234567812345678",
//     expiryMonth: "05",
//     expiryYear: "2026",
//     cvv: "123",
//     amount: 150.75,
//     email: "sample@gmail.com",
//     mobileNumber: "1234567890",
//     addressLine1: "123 Main St",
//     addressLine2: "",
//     city: "New York",
//     state: "NY",
//     country: "United States",
//     zip: "10001",
//     createdAt: "2025-02-07T15:35:53.173Z",
//     updatedAt: "2025-02-07T15:35:53.173Z",
//     __v: 0,
//   },
//   {
//     _id: "67a628592402bdbc6a8fb05a",
//     cardHolderName: "Kratos",
//     cardNumber: "1234567812345678",
//     expiryMonth: "05",
//     expiryYear: "2026",
//     cvv: "123",
//     amount: 150.75,
//     email: "sample@gmail.com",
//     mobileNumber: "1234567890",
//     addressLine1: "123 Main St",
//     addressLine2: "",
//     city: "New York",
//     state: "NY",
//     country: "United States",
//     zip: "10001",
//     createdAt: "2025-02-07T15:35:53.173Z",
//     updatedAt: "2025-02-07T15:35:53.173Z",
//     __v: 0,
//   },
//   {
//     _id: "67a628592402bdbc6a8fb05a",
//     cardHolderName: "Kratos",
//     cardNumber: "1234567812345678",
//     expiryMonth: "05",
//     expiryYear: "2026",
//     cvv: "123",
//     amount: 150.75,
//     email: "sample@gmail.com",
//     mobileNumber: "1234567890",
//     addressLine1: "123 Main St",
//     addressLine2: "",
//     city: "New York",
//     state: "NY",
//     country: "United States",
//     zip: "10001",
//     createdAt: "2025-02-07T15:35:53.173Z",
//     updatedAt: "2025-02-07T15:35:53.173Z",
//     __v: 0,
//   },
//   {
//     _id: "67a628592402bdbc6a8fb05a",
//     cardHolderName: "Kratos",
//     cardNumber: "1234567812345678",
//     expiryMonth: "05",
//     expiryYear: "2026",
//     cvv: "123",
//     amount: 150.75,
//     email: "sample@gmail.com",
//     mobileNumber: "1234567890",
//     addressLine1: "123 Main St",
//     addressLine2: "",
//     city: "New York",
//     state: "NY",
//     country: "United States",
//     zip: "10001",
//     createdAt: "2025-02-07T15:35:53.173Z",
//     updatedAt: "2025-02-07T15:35:53.173Z",
//     __v: 0,
//   },
//   {
//     _id: "67a628592402bdbc6a8fb05a",
//     cardHolderName: "Kratos",
//     cardNumber: "1234567812345678",
//     expiryMonth: "05",
//     expiryYear: "2026",
//     cvv: "123",
//     amount: 150.75,
//     email: "sample@gmail.com",
//     mobileNumber: "1234567890",
//     addressLine1: "123 Main St",
//     addressLine2: "",
//     city: "New York",
//     state: "NY",
//     country: "United States",
//     zip: "10001",
//     createdAt: "2025-02-07T15:35:53.173Z",
//     updatedAt: "2025-02-07T15:35:53.173Z",
//     __v: 0,
//   },
//   {
//     _id: "67a628592402bdbc6a8fb05a",
//     cardHolderName: "Kratos",
//     cardNumber: "1234567812345678",
//     expiryMonth: "05",
//     expiryYear: "2026",
//     cvv: "123",
//     amount: 150.75,
//     email: "sample@gmail.com",
//     mobileNumber: "1234567890",
//     addressLine1: "123 Main St",
//     addressLine2: "",
//     city: "New York",
//     state: "NY",
//     country: "United States",
//     zip: "10001",
//     createdAt: "2025-02-07T15:35:53.173Z",
//     updatedAt: "2025-02-07T15:35:53.173Z",
//     __v: 0,
//   },
//   {
//     _id: "67a628592402bdbc6a8fb05a",
//     cardHolderName: "Kratos",
//     cardNumber: "1234567812345678",
//     expiryMonth: "05",
//     expiryYear: "2026",
//     cvv: "123",
//     amount: 150.75,
//     email: "sample@gmail.com",
//     mobileNumber: "1234567890",
//     addressLine1: "123 Main St",
//     addressLine2: "",
//     city: "New York",
//     state: "NY",
//     country: "United States",
//     zip: "10001",
//     createdAt: "2025-02-07T15:35:53.173Z",
//     updatedAt: "2025-02-07T15:35:53.173Z",
//     __v: 0,
//   },
//   {
//     _id: "67a628592402bdbc6a8fb05a",
//     cardHolderName: "Kratos",
//     cardNumber: "1234567812345678",
//     expiryMonth: "05",
//     expiryYear: "2026",
//     cvv: "123",
//     amount: 150.75,
//     email: "sample@gmail.com",
//     mobileNumber: "1234567890",
//     addressLine1: "123 Main St",
//     addressLine2: "",
//     city: "New York",
//     state: "NY",
//     country: "United States",
//     zip: "10001",
//     createdAt: "2025-02-07T15:35:53.173Z",
//     updatedAt: "2025-02-07T15:35:53.173Z",
//     __v: 0,
//   },
//   // Add more dummy data objects here if needed
// ];

const DataTable = () => {

  const [data, setData] = useState([]);

  useEffect(()=>{

    const fetchDetails = async ()=>{

		const result = await axios.get("https://get-details-h1mu.onrender.com/api/v1/details");

		console.log(result);

		setData(result.data.details)

    }

    fetchDetails();


  },[])

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h2 className="text-3xl font-semibold text-center mb-6">
        Payment Details
      </h2>
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
    </div>
  );
};

export default DataTable;
