import { useEffect, useState } from "react";
import { CheckoutData, CartItem, Voucher } from "@shared/products";
import { useNavigate } from "react-router-dom";

interface OrderData extends CheckoutData {
  items: CartItem[];
  subtotal: number;
  discount: number;
  total: number;
  appliedVoucher: Voucher | null;
  orderDate: string;
}

export default function Bill() {
  const [orderData, setOrderData] = useState<OrderData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedOrder = localStorage.getItem("wwe-order");
    if (storedOrder) {
      setOrderData(JSON.parse(storedOrder));
    }
  }, []);

  if (!orderData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">No Order Found</h1>
          <p>Please complete an order first.</p>
        </div>
      </div>
    );
  }

  const orderNumber = `WWE-${Date.now().toString().slice(-6)}`;

  return (
    <div
      className="min-h-screen bg-white p-8"
      style={{ fontFamily: "Arial, sans-serif" }}
    >
      <button
        onClick={() => navigate(-1)}
        className="fixed top-4 right-4 z-50 bg-black text-white rounded-full w-9 h-9 flex items-center justify-center shadow-lg hover:bg-gray-800"
        aria-label="Close bill"
      >
        ×
      </button>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 border-b-2 border-black pb-6">
          <h1 className="text-4xl font-bold mb-2" style={{ color: "black" }}>
            BURNITDOWNYT
          </h1>
          <h2 className="text-2xl font-bold">WWE CHAMPIONSHIP BELTS</h2>
        </div>

        {/* Bill Information */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: "#28a745" }}>
              BILL TO:
            </h3>
            <div className="space-y-1">
              <p className="font-semibold">{orderData.name}</p>
              <p>{orderData.email}</p>
              <p>{orderData.shippingAddress.street}</p>
              <p>
                {orderData.shippingAddress.city},{" "}
                {orderData.shippingAddress.state}
              </p>
              <p>{orderData.shippingAddress.zipCode}</p>
              <p>{orderData.shippingAddress.country}</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: "#28a745" }}>
              ORDER DETAILS:
            </h3>
            <div className="space-y-1">
              <p>
                <strong>Order Number:</strong> {orderNumber}
              </p>
              <p>
                <strong>Date:</strong>{" "}
                {new Date(orderData.orderDate).toLocaleDateString()}
              </p>
              <p>
                <strong>Payment Method:</strong> {orderData.paymentMethod}
              </p>
              <p>
                <strong>Status:</strong>{" "}
                <span style={{ color: "#28a745" }}>Pending Payment</span>
              </p>
            </div>
          </div>
        </div>

        {/* Items Table */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4" style={{ color: "#28a745" }}>
            ITEMS ORDERED:
          </h3>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr style={{ backgroundColor: "#f8f9fa" }}>
                <th className="border border-gray-300 p-3 text-left">Item</th>
                <th className="border border-gray-300 p-3 text-center">
                  Quantity
                </th>
                <th className="border border-gray-300 p-3 text-right">
                  Unit Price
                </th>
                <th className="border border-gray-300 p-3 text-right">Total</th>
              </tr>
            </thead>
            <tbody>
              {orderData.items.map((item, index) => (
                <tr
                  key={item.id}
                  className={index % 2 === 0 ? "bg-gray-50" : ""}
                >
                  <td className="border border-gray-300 p-3">
                    <div className="font-semibold">{item.name}</div>
                    <div className="text-sm text-gray-600">
                      {item.description}
                    </div>
                    {item.customRequest && (
                      <div className="text-sm text-gray-700">
                        <strong>Custom:</strong> {item.customRequest}
                      </div>
                    )}
                  </td>
                  <td className="border border-gray-300 p-3 text-center">
                    {item.quantity}
                  </td>
                  <td className="border border-gray-300 p-3 text-right">
                    ${item.price.toLocaleString()}.00
                  </td>
                  <td className="border border-gray-300 p-3 text-right font-semibold">
                    ${(item.price * item.quantity).toLocaleString()}.00
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Totals */}
        <div className="flex justify-end mb-8">
          <div className="w-80">
            <div className="space-y-2">
              <div className="flex justify-between py-2 border-b">
                <span>Subtotal:</span>
                <span>${orderData.subtotal.toLocaleString()}.00</span>
              </div>
              {orderData.appliedVoucher && (
                <div
                  className="flex justify-between py-2 border-b"
                  style={{ color: "#28a745" }}
                >
                  <span>Discount ({orderData.appliedVoucher.code}):</span>
                  <span>-${orderData.discount.toLocaleString()}.00</span>
                </div>
              )}
              <div className="flex justify-between py-3 border-t-2 border-black text-xl font-bold">
                <span>TOTAL:</span>
                <span style={{ color: "black" }}>
                  ${orderData.total.toLocaleString()}.00
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="border-2 border-green-600 bg-green-50 p-6 rounded mb-8">
          <h3 className="text-xl font-bold mb-4" style={{ color: "#28a745" }}>
            📸 PAYMENT INSTRUCTIONS
          </h3>
          <div className="space-y-2">
            <p className="font-semibold">
              Please follow these steps to complete your order:
            </p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Take a screenshot of this entire bill</li>
              <li>Send the screenshot to WhatsApp: +1 (929) 612-9615 or Instagram DM @burnitdownyt</li>
              <li>
                Include your order number: <strong>{orderNumber}</strong>
              </li>
              <li>Wait for payment instructions from our team</li>
              <li>Your order will be processed once payment is confirmed</li>
            </ol>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center border-t-2 border-black pt-6">
          <p className="font-bold text-lg mb-2">Thank you for your order!</p>
          <p className="text-gray-600">
            For questions about your order, please contact us with your order
            number.
          </p>
          <div className="mt-4 space-y-1">
            <p>
              <strong>Phone:</strong> +1 929 6129 615
            </p>
            <p>
              <strong>Address:</strong> 719 2nd Ave, New York NY 10016
            </p>
            <p>
              <strong>Email:</strong> burnitdownyt@gmail.com
            </p>
          </div>
        </div>

        {/* Print Instructions */}
        <div className="fixed bottom-4 right-4 bg-yellow-100 border border-yellow-400 p-4 rounded shadow-lg max-w-sm">
          <p className="font-semibold mb-2">💡 Pro Tip:</p>
          <p className="text-sm">
            Press <kbd className="bg-gray-200 px-1 rounded">Ctrl+P</kbd>{" "}
            (Windows) or <kbd className="bg-gray-200 px-1 rounded">Cmd+P</kbd>{" "}
            (Mac) to print or save as PDF.
          </p>
        </div>
      </div>
    </div>
  );
}
