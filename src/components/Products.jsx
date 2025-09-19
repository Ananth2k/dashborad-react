import { ChevronRight } from "lucide-react"; // example icon (customize as needed)

const products = [
  {
    name: "ASOS Ridley High Waist",
    price: "$79.49",
    qty: 82,
    amt: "$6,518.18",
  },
  {
    name: "Marco Lightweight Shirt",
    price: "$128.50",
    qty: 37,
    amt: "$4,754.50",
  },
  {
    name: "Half Sleeve  Shirt",
    price: "$39.99",
    qty: 64,
    amt: "$2,559.36",
  },
  {
    name: "Lightweight Jacket",
    price: "$20.00",
    qty: 184,
    amt: "$3,680.00",
  },
  {
    name: "Marco Shoes",
    price: "$79.49",
    qty: 64,
    amt: "$1,965.81",
  },
];

export default function Products() {
  return (
    <div className="bg-gray-50 rounded-2xl p-6 w-full max-w-4xl mx-auto">
      <div className="font-semibold text-lg mb-3">Top Selling Products</div>
      {/* Table (desktop) */}
      <div className="hidden md:block">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-200 text-gray-400">
              <th className="font-medium py-2">Name</th>
              <th className="font-medium py-2">Price</th>
              <th className="font-medium py-2">Quantity</th>
              <th className="font-medium py-2">Amount</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {products.map((item) => (
              <tr key={item.name} className="border-b last:border-0 border-gray-100">
                <td className="py-2">{item.name}</td>
                <td className="py-2">{item.price}</td>
                <td className="py-2">{item.qty}</td>
                <td className="py-2">{item.amt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Mobile: stacked card/table */}
      <div className="md:hidden flex flex-col gap-3">
        {products.map((item) => (
          <div key={item.name} className="bg-white rounded-xl p-3 shadow-sm flex flex-col">
            <div className="flex items-center justify-between">
              <div className="font-medium">{item.name}</div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
            <div className="flex flex-wrap text-sm text-gray-600 mt-2">
              <div className="w-1/2 pb-1">Price: <span className="font-semibold">{item.price}</span></div>
              <div className="w-1/2 pb-1 text-right">Qty: <span className="font-semibold">{item.qty}</span></div>
              <div className="w-full pt-1">Amount: <span className="font-semibold">{item.amt}</span></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
