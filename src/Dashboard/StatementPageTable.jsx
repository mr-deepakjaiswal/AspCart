import React from 'react';
import { BsArrowDownSquareFill } from "react-icons/bs";

const StatementsPageTable = () => {
  const data = [
    {
      'S.No.': 1,
      Date: '24 May 2024',
      'Order ID': 190856213,
      Type: 'Purchase',
      Detail: 'CodePlus Code And Template Marketplace (6 months included support) \nInvoice IVIPS3488267',
      Action: <span className="text-green-500 text-2xl"><BsArrowDownSquareFill /></span>,
      Price: '$20.25',
      Amount: '$-20.25',
    },
    {
      'S.No.': 2,
      Date: '24 May 2024',
      'Order ID': 190856213,
      Type: 'Purchase',
      Detail: 'CodePlus Code And Template Marketplace (6 months included support) \nInvoice IVIPS3488267',
      Action: <span className="text-green-500 text-2xl"><BsArrowDownSquareFill /></span>,
      Price: '$20.25',
      Amount: '$-20.25',
    },
    {
      'S.No.': 3,
      Date: '24 May 2024',
      'Order ID': 190856213,
      Type: 'Purchase',
      Detail: 'CodePlus Code And Template Marketplace (6 months included support) \nInvoice IVIPS3488267',
      Action: <span className="text-green-500 text-2xl"><BsArrowDownSquareFill /></span>,
      Price: '$20.25',
      Amount: '$-20.25',
    },
    {
      'S.No.': 4,
      Date: '24 May 2024',
      'Order ID': 190856213,
      Type: 'Purchase',
      Detail: 'CodePlus Code And Template Marketplace (6 months included support) \nInvoice IVIPS3488267',
      Action: <span className="text-green-500 text-2xl"><BsArrowDownSquareFill /></span>,
      Price: '$20.25',
      Amount: '$-20.25',
    },
  ];

  return (
    <div className="container mx-auto">
      <table className="table-auto w-full ">
        <thead>
          <tr className="bg-gray-200 ">
            <th className="px-4 py-2">S.No.</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Order ID</th>
            <th className="px-4 py-2">Type</th>
            <th className="px-4 py-2">Detail</th>
            <th className="px-4 py-2">Action</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
              <td className="px-4 py-2">{item['S.No.']}</td>
              <td className="px-4 py-2">{item.Date}</td>
              <td className="px-4 py-2">{item['Order ID']}</td>
              <td className="px-4 py-2">{item.Type}</td>
              <td className="px-4 py-2">{item.Detail}</td>
              <td className="px-4 py-2">{item.Action}</td>
              <td className="px-4 py-2">{item.Price}</td>
              <td className="px-4 py-2">{item.Amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StatementsPageTable;
