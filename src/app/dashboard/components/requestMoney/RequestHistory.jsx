import React, { useEffect, useState } from "react";
import axios from "axios";

const RequestHistory = ({ email }) => {
  const [sentRequests, setSentRequests] = useState([]);
  const [receivedRequests, setReceivedRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!email) return;

    const fetchRequests = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/requests?email=${email}`
        );

        setSentRequests(res.data.data.sent);
        setReceivedRequests(res.data.data.received);
      } catch (error) {
        console.error("Failed to load requests:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, [email]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500">Loading your requests...</p>
      </div>
    );
  }

  return (
    <div className="space-y-10 p-6 bg-white rounded-lg shadow-md">
      {/* Sent Requests */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Requests You Sent
        </h2>
        {sentRequests.length === 0 ? (
          <p className="text-gray-500">No sent requests found.</p>
        ) : (
          <div className="space-y-4">
            {sentRequests.map((req) => (
              <div
                key={req._id}
                className={`flex items-center justify-between p-4 border rounded-lg ${
                  req.status === "Received"
                    ? "bg-green-50 border-green-200"
                    : req.status === "Declined"
                    ? "bg-red-50 border-red-200"
                    : "bg-yellow-50 border-yellow-200"
                }`}
              >
                <div>
                  <p className="font-medium text-gray-900">
                    To: {req.receiverEmail}
                  </p>
                  <p className="text-sm text-gray-600">
                    {req.category} •{" "}
                    {req.dueDate
                      ? `Due ${new Date(req.dueDate).toLocaleDateString()}`
                      : "No Due Date"}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-800">${req.amount}</p>
                  <p className="text-xs text-gray-600">
                    {req.status === "Pending"
                      ? "Pending"
                      : req.status === "Approved"
                      ? "Received"
                      : req.status === "Declined"
                      ? "Declined"
                      : "Unknown"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Received Requests */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Requests You Received
        </h2>
        {receivedRequests.length === 0 ? (
          <p className="text-gray-500">No received requests found.</p>
        ) : (
          <div className="space-y-4">
            {receivedRequests.map((req) => (
              <div
                key={req._id}
                className={`flex items-center justify-between p-4 border rounded-lg ${
                  req.status === "Received"
                    ? "bg-green-50 border-green-200"
                    : req.status === "Declined"
                    ? "bg-red-50 border-red-200"
                    : "bg-yellow-50 border-yellow-200"
                }`}
              >
                <div>
                  <p className="font-medium text-gray-900">
                    From: {req.senderEmail}
                  </p>
                  <p className="text-sm text-gray-600">
                    {req.category} •{" "}
                    {req.dueDate
                      ? `Due ${new Date(req.dueDate).toLocaleDateString()}`
                      : "No Due Date"}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-800">${req.amount}</p>
                  <p className="text-xs text-gray-600">
                    {req.status === "Pending"
                      ? "Pending"
                      : req.status === "Approved"
                      ? "Sent"
                      : req.status === "Declined"
                      ? "Declined"
                      : "Unknown"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RequestHistory;
