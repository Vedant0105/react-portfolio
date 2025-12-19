// Dashboard.tsx
import React from "react";

const Dashboard: React.FC = () => {

  const data = [
    ["A", "B", "C"],
    ["GG", 1, 2, 3],
    ["RR", 4, 5, 6],
    ["TT", 7, 8, 9],
  ]
  return (
    <table className="min-w-full mt-10 table-auto border-collapse border border-gray-300">
      <tbody>
        {
          data.map((row, i) => (
            <tr key={i} >
              {row.map((cell, j) => (
                <td key={j} className="border border-gray-300 px-4 py-2 text-center">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Dashboard;
