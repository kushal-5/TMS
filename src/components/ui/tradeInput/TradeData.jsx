import React, { useState } from 'react';
import { 
  useReactTable, 
  getCoreRowModel,
  getPaginationRowModel,
  flexRender
} from "@tanstack/react-table";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import InputBox from "../../../shared/Inputbox";
import Export from "../../../assets/export.svg";

const data = [
  {
    id: 1,
    contractNumber: "CN-001",
    client: "John Doe",
    project: "Website Development",
    amount: "$5000",
    status: "Completed",
    startDate: "2023-01-01",
    endDate: "2023-06-01",
    remarks: "On time",
  },
  {
    id: 2,
    contractNumber: "CN-002",
    client: "Jane Smith",
    project: "Mobile App",
    amount: "$8000",
    status: "Ongoing",
    startDate: "2023-02-01",
    endDate: "2023-08-01",
    remarks: "Delayed due to API issues",
  },
  {
    id: 1,
    contractNumber: "CN-001",
    client: "John Doe",
    project: "Website Development",
    amount: "$5000",
    status: "Completed",
    startDate: "2023-01-01",
    endDate: "2023-06-01",
    remarks: "On time",
  },
  {
    id: 2,
    contractNumber: "CN-002",
    client: "Jane Smith",
    project: "Mobile App",
    amount: "$8000",
    status: "Ongoing",
    startDate: "2023-02-01",
    endDate: "2023-08-01",
    remarks: "Delayed due to API issues",
  },
  {
    id: 1,
    contractNumber: "CN-001",
    client: "John Doe",
    project: "Website Development",
    amount: "$5000",
    status: "Completed",
    startDate: "2023-01-01",
    endDate: "2023-06-01",
    remarks: "On time",
  },
  {
    id: 2,
    contractNumber: "CN-002",
    client: "Jane Smith",
    project: "Mobile App",
    amount: "$8000",
    status: "Ongoing",
    startDate: "2023-02-01",
    endDate: "2023-08-01",
    remarks: "Delayed due to API issues",
  },
];

const columns = [
  { accessorKey: "id", header: "S.N" },
  { accessorKey: "contractNumber", header: "Contract No." },
  { accessorKey: "client", header: "Client" },
  { accessorKey: "project", header: "Client Name" },
  { accessorKey: "amount", header: "Symbol" },
  { accessorKey: "status", header: "Type" },
  { accessorKey: "startDate", header: "Price(NPR" },
  { accessorKey: "endDate", header: "Quantity" },
  { accessorKey: "remarks", header: "Value(NPR)" },
];

const TradeData = () => {
  const [rowsPerPage, setRowsPerPage] = useState(2);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: rowsPerPage,
      },
    },
  });

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text("Contract Details", 20, 10);

    const tableData = table.getRowModel().rows.map((row) => 
      row.getVisibleCells().map((cell) => cell.getValue())
    );

    autoTable(doc, {
      head: [columns.map((col) => col.header)],
      body: tableData,
      startY: 20,
    });

    doc.save("table-data.pdf");
  };

  // Generate page numbers for pagination
  const generatePaginationNumbers = () => {
    const currentPage = table.getState().pagination.pageIndex + 1;
    const totalPages = table.getPageCount();
    const pages = [];
    
    // Always show first page
    pages.push(1);
    
    // Current page and surrounding pages
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      if (i === 2 && currentPage > 3) pages.push('...');
      pages.push(i);
    }
    
    // Always show last page
    if (currentPage < totalPages - 2) pages.push('...');
    if (totalPages > 1) pages.push(totalPages);
    
    return pages;
  };

  return (
    <div className="w-[1546px] overflow-hidden">
      <h1 className="absolute left-40 top-40 text-white font-roboto text-[20px] font-normal leading-[20px]">
        Daily Trade Book
      </h1>
      <div className="absolute left-40 top-52 flex gap-8">
        <InputBox input="Client name/code" label="CLIENT NAME/CODE" />
        <InputBox input="Symbol" label="SYMBOL" />
      </div>

      <h1 className="absolute left-40 top-80 text-white font-roboto text-[20px] font-normal leading-[20px]">
        Trade Book
      </h1>


<div className="w-[1546px] overflow-hidden absolute left-40 top-[22rem]">
  {/* Table */}
  <div className="left-36 top-[22rem] w-full">
    <table className="w-full border-collapse rounded-3xl border-2 border-black bg-[#1D1D1D] py-4 px-5">
      <thead className="bg-[#1D1D1D] border-2 rounded-lg">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id} className="rounded-lg border-2 border-black">
            {headerGroup.headers.map((header) => (
              <th key={header.id} className="rounded-lg border-2 border-black px-4 py-2 text-left text-white font-roboto text-[16px] font-medium leading-[24px] uppercase">
                {flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody className="text-gray-400 font-roboto text-[14px] font-normal leading-[24px]">
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id} className="rounded-lg border-2 border-black hover:bg-[#1D1D1D]">
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className="border-2 rounded-lg border-black px-4 py-2 bg-[#1D1D1D]">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {/* Pagination + Export Button */}
  <div className="mt-6 flex flex-col items-end gap-4">
    {/* Pagination */}
    <div className="flex items-center justify-between w-full text-white">
      <div className="flex items-center gap-2">
        <button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()} className="px-3 py-1 disabled:opacity-50">
          &lt;
        </button>
        
        {generatePaginationNumbers().map((pageNum, idx) => (
          <button
            key={idx}
            onClick={() => {
              if (typeof pageNum === 'number') {
                table.setPageIndex(pageNum - 1);
              }
            }}
            disabled={pageNum === '...'}
            className={`px-3 py-1 rounded ${
              pageNum === table.getState().pagination.pageIndex + 1
                ? 'bg-[#01BAEF] text-black rounded-full'
                : 'bg-black '
            } ${pageNum === '...' ? '' : ''}`}
          >
            {pageNum}
          </button>
        ))}

        <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()} className="px-3 py-1 disabled:opacity-50">
          &gt;
        </button>
      </div>

      {/* Rows Per Page */}
      <div className="flex items-center gap-2 text-[#9A9EA5] font-roboto text-[14px] not-italic font-normal leading-[18px]">
        <span>Shows:</span>
        <select
          value={rowsPerPage}
          onChange={e => {
            setRowsPerPage(Number(e.target.value));
            table.setPageSize(Number(e.target.value));
          }}
          className="bg-black px-2 py-1 text-white font-roboto text-[14px] not-italic font-medium leading-[18px]"
        >
          {[2, 5, 10, 20, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              {pageSize} rows
            </option>
          ))}
        </select>
      </div>
    </div>


       {/* Export Button - End of Section, Aligned to Table Start */}
       <div className="mt-4 flex justify-start mr-[90rem]">
      <button
        onClick={exportToPDF}
        className="flex items-center text-black justify-center gap-[10px] px-[24px] py-[14px] rounded-md bg-[#F1F510]"
      >
        Export <img src={Export} alt="export" />
      </button>
    </div>

  </div>
</div>

    </div>
  );
};

export default TradeData;