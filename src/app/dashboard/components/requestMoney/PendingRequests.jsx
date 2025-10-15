// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { CheckCircle, XCircle } from "lucide-react";

// const PendingRequests = ({ currentUserEmail }) => {
//   const [pendingRequests, setPendingRequests] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // API থেকে pending requests ফেচ করা
//   const fetchPendingRequests = async () => {
//     try {
//       const res = await axios.get(
//         `${process.env.NEXT_PUBLIC_BASE_URL}/api/requests?email=${currentUserEmail}`
//       );

//       // received থেকে শুধুমাত্র pending ফিল্টার করো
//       const receivedRequests = res.data.data.received || [];
//       const pending = receivedRequests.filter((r) => r.status === "Pending");

//       setPendingRequests(pending);
//     } catch (error) {
//       console.error("Error fetching pending requests:", error.response?.data || error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (currentUserEmail) {
//       fetchPendingRequests();
//     }
//   }, [currentUserEmail]);

//   // Approve / Decline হ্যান্ডলার
//   const handleAction = async (requestId, action) => {
//     try {
//       const res = await axios.put(`${process.env.NEXT_PUBLIC_BASE_URL}/api/requests/update-status`, {
//         requestId,
//         status: action,
//       });

//       // লোকাল স্টেট আপডেট
//       setPendingRequests((prev) => prev.filter((req) => req._id !== requestId));
//       alert(`Request ${action === "Received" ? "approved" : "declined"} successfully!`);
//     } catch (error) {
//       console.error("Error updating request:", error.response?.data || error.message);
//       alert("Failed to update request.");
//     }
//   };

//   if (loading) return <p>Loading...</p>;
//   if (pendingRequests?.length === 0) return <p>No pending requests.</p>;

//   return (
//     <div>
//       <h2 className="text-xl font-semibold text-gray-900 mb-4">Pending Requests</h2>
//       <div className="space-y-4">
//         {pendingRequests?.map((req) => (
//           <div
//             key={req._id}
//             className="flex items-center justify-between p-4 bg-yellow-50 border border-yellow-200 rounded-lg"
//           >
//             <div>
//               <p className="font-medium text-gray-900">{req.senderEmail}</p>
//               <p className="text-sm text-gray-600">
//                 {req.category} • Due{" "}
//                 {req.dueDate ? new Date(req.dueDate).toLocaleDateString() : "-"}
//               </p>
//             </div>
//             <div className="flex items-center gap-2">
//               <span className="font-semibold text-yellow-700">${req.amount}</span>
//               <button
//                 onClick={() => handleAction(req._id, "Received")}
//                 className="p-2 bg-green-100 hover:bg-green-200 text-green-700 rounded-md transition"
//               >
//                 <CheckCircle className="w-5 h-5" />
//               </button>
//               <button
//                 onClick={() => handleAction(req._id, "Declined")}
//                 className="p-2 bg-red-100 hover:bg-red-200 text-red-700 rounded-md transition"
//               >
//                 <XCircle className="w-5 h-5" />
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PendingRequests;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { CheckCircle, XCircle } from "lucide-react";

const PendingRequests = ({ currentUserEmail }) => {
  const [pendingRequests, setPendingRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  // API থেকে pending requests ফেচ করা
  const fetchPendingRequests = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/requests?email=${currentUserEmail}`
      );

      // শুধু received requests থেকে pending filter করো
      const receivedRequests = res.data.data.received || [];
      const pending = receivedRequests.filter((r) => r.status === "Pending");

      setPendingRequests(pending);
    } catch (error) {
      console.error("Error fetching pending requests:", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (currentUserEmail) {
      fetchPendingRequests();
    }
  }, [currentUserEmail]);

  // Approve / Decline হ্যান্ডলার
  const handleAction = async (requestId, action) => {
    try {
      const status = action === "Approved" ? "Approved" : "Declined";
      await axios.put(`${process.env.NEXT_PUBLIC_BASE_URL}/api/requests/update-status`, {
        requestId,
        status,
      });

      // লোকাল স্টেট আপডেট
      setPendingRequests((prev) => prev.filter((req) => req._id !== requestId));
      alert(`Request ${status.toLowerCase()} successfully!`);
    } catch (error) {
      console.error("Error updating request:", error.response?.data || error.message);
      alert("Failed to update request.");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (pendingRequests?.length === 0) return <p>No pending requests.</p>;

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Pending Requests</h2>
      <div className="space-y-4">
        {pendingRequests.map((req) => (
          <div
            key={req._id}
            className="flex items-center justify-between p-4 bg-yellow-50 border border-yellow-200 rounded-lg"
          >
            <div>
              <p className="font-medium text-gray-900">{req.senderEmail}</p>
              <p className="text-sm text-gray-600">
                {req.category} • Due{" "}
                {req.dueDate ? new Date(req.dueDate).toLocaleDateString() : "-"}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-yellow-700">${req.amount}</span>
              <button
                onClick={() => handleAction(req._id, "Approved")}
                className="p-2 bg-green-100 hover:bg-green-200 text-green-700 rounded-md transition"
              >
                <CheckCircle className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleAction(req._id, "Declined")}
                className="p-2 bg-red-100 hover:bg-red-200 text-red-700 rounded-md transition"
              >
                <XCircle className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PendingRequests;
