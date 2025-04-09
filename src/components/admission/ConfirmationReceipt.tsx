import React from 'react';
import { format } from 'date-fns';

interface FeeItem {
  name: string;
  amount: number;
}

interface ReceiptProps {
  mcNo: string;
  studentName: string;
  rollNo: string;
  session: string;
  fees: FeeItem[];
  totalAmount: number;
  date: Date;
}

export const ConfirmationReceipt: React.FC<ReceiptProps> = ({
  mcNo,
  studentName,
  rollNo,
  session,
  fees,
  totalAmount,
  date,
}) => {
  return (
    <div className="max-w-2xl mx-auto bg-pink-100 p-8 rounded-lg shadow-lg print:shadow-none">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold">MARWARI COLLEGE</h1>
        <h2 className="text-lg">KISHANGANJ (BIHAR)</h2>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <p><span className="font-semibold">B.A. 2nd Year</span></p>
          <p><span className="font-semibold">MC No:</span> {mcNo}</p>
        </div>
        <div>
          <p><span className="font-semibold">Received from:</span> {studentName}</p>
          <p><span className="font-semibold">Roll No:</span> {rollNo}</p>
          <p><span className="font-semibold">Session:</span> {session}</p>
        </div>
      </div>

      <div className="border-t border-gray-300 my-4">
        <table className="w-full">
          <tbody>
            {fees.map((fee, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="py-2">{fee.name}</td>
                <td className="py-2 text-right">{fee.amount > 0 ? fee.amount.toFixed(2) : '-'}</td>
              </tr>
            ))}
            <tr className="font-bold">
              <td className="py-2">TOTAL</td>
              <td className="py-2 text-right">{totalAmount.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex justify-between items-end">
        <div>
          <p><span className="font-semibold">Rupees:</span> {totalAmount.toFixed(2)}</p>
          <p><span className="font-semibold">Date:</span> {format(date, 'dd/MM/yyyy')}</p>
        </div>
        <div className="text-right">
          <div className="mt-8 border-t border-black pt-2">Cashier</div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        <button 
          onClick={() => window.print()}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 print:hidden"
        >
          Print Receipt
        </button>
      </div>
    </div>
  );
}; 