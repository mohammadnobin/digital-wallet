"use client"
import React, { useState } from 'react';
import { AlertTriangle, Flag, MessageSquare, User, Clock, CheckCircle, XCircle, Eye, Trash2, Ban } from 'lucide-react';

const AdminReportsPage = () => {
  const [reports, setReports] = useState([
    {
      id: 1,
      reportedUser: { name: 'John Doe', email: 'john@example.com', id: 101 },
      reportedBy: { name: 'Alice Smith', email: 'alice@example.com', id: 102 },
      reason: 'Spam',
      description: 'This user is posting spam content repeatedly in the comments section.',
      status: 'pending',
      date: '2024-10-20T10:30:00',
      severity: 'medium'
    },
    {
      id: 2,
      reportedUser: { name: 'Bob Johnson', email: 'bob@example.com', id: 103 },
      reportedBy: { name: 'Charlie Brown', email: 'charlie@example.com', id: 104 },
      reason: 'Harassment',
      description: 'User is sending threatening messages to other members.',
      status: 'pending',
      date: '2024-10-19T15:45:00',
      severity: 'high'
    },
    {
      id: 3,
      reportedUser: { name: 'Sarah Wilson', email: 'sarah@example.com', id: 105 },
      reportedBy: { name: 'Mike Davis', email: 'mike@example.com', id: 106 },
      reason: 'Inappropriate Content',
      description: 'Posting offensive images in public forums.',
      status: 'reviewing',
      date: '2024-10-19T09:20:00',
      severity: 'high'
    },
    {
      id: 4,
      reportedUser: { name: 'Tom Harris', email: 'tom@example.com', id: 107 },
      reportedBy: { name: 'Emma White', email: 'emma@example.com', id: 108 },
      reason: 'Fake Account',
      description: 'Suspicious activity, appears to be impersonating another user.',
      status: 'resolved',
      date: '2024-10-18T14:10:00',
      severity: 'medium'
    },
    {
      id: 5,
      reportedUser: { name: 'Lisa Anderson', email: 'lisa@example.com', id: 109 },
      reportedBy: { name: 'James Taylor', email: 'james@example.com', id: 110 },
      reason: 'Scam',
      description: 'Attempting to sell fake products and scam other users.',
      status: 'rejected',
      date: '2024-10-17T11:30:00',
      severity: 'high'
    },
    {
      id: 6,
      reportedUser: { name: 'David Lee', email: 'david@example.com', id: 111 },
      reportedBy: { name: 'Sophia Martinez', email: 'sophia@example.com', id: 112 },
      reason: 'Copyright Violation',
      description: 'Using copyrighted content without permission.',
      status: 'pending',
      date: '2024-10-22T08:15:00',
      severity: 'low'
    }
  ]);

  const [filterStatus, setFilterStatus] = useState('all');
  const [filterSeverity, setFilterSeverity] = useState('all');
  const [selectedReport, setSelectedReport] = useState(null);

  const filteredReports = reports.filter(report => {
    const matchesStatus = filterStatus === 'all' || report.status === filterStatus;
    const matchesSeverity = filterSeverity === 'all' || report.severity === filterSeverity;
    return matchesStatus && matchesSeverity;
  });

  const handleStatusChange = (reportId, newStatus) => {
    setReports(reports.map(report => 
      report.id === reportId ? { ...report, status: newStatus } : report
    ));
    setSelectedReport(null);
  };

  const handleDeleteReport = (reportId) => {
    if (window.confirm('Are you sure you want to delete this report?')) {
      setReports(reports.filter(report => report.id !== reportId));
      setSelectedReport(null);
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'reviewing': return 'bg-blue-100 text-blue-800';
      case 'resolved': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending': return <Clock className="w-4 h-4" />;
      case 'reviewing': return <Eye className="w-4 h-4" />;
      case 'resolved': return <CheckCircle className="w-4 h-4" />;
      case 'rejected': return <XCircle className="w-4 h-4" />;
      default: return <AlertTriangle className="w-4 h-4" />;
    }
  };

  const stats = {
    total: reports.length,
    pending: reports.filter(r => r.status === 'pending').length,
    reviewing: reports.filter(r => r.status === 'reviewing').length,
    resolved: reports.filter(r => r.status === 'resolved').length,
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">User Reports Management</h1>
          <p className="text-gray-600">Review and manage user-reported content and behavior</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Reports</p>
                <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <Flag className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Pending</p>
                <p className="text-3xl font-bold text-yellow-600">{stats.pending}</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-lg">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Under Review</p>
                <p className="text-3xl font-bold text-blue-600">{stats.reviewing}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <Eye className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Resolved</p>
                <p className="text-3xl font-bold text-green-600">{stats.resolved}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Status</label>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="reviewing">Under Review</option>
                <option value="resolved">Resolved</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Severity</label>
              <select
                value={filterSeverity}
                onChange={(e) => setFilterSeverity(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Severity</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Reports List */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reported User</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reported By</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reason</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Severity</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredReports.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="px-6 py-12 text-center text-gray-500">
                      No reports found
                    </td>
                  </tr>
                ) : (
                  filteredReports.map(report => (
                    <tr key={report.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center text-white font-semibold">
                            {report.reportedUser.name.charAt(0).toUpperCase()}
                          </div>
                          <div className="ml-3">
                            <div className="text-sm font-medium text-gray-900">{report.reportedUser.name}</div>
                            <div className="text-xs text-gray-500">{report.reportedUser.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">{report.reportedBy.name}</div>
                        <div className="text-xs text-gray-500">{report.reportedBy.email}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-orange-600" />
                          <span className="text-sm font-medium text-gray-900">{report.reason}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${getSeverityColor(report.severity)}`}>
                          {report.severity.toUpperCase()}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(report.status)}`}>
                          {getStatusIcon(report.status)}
                          {report.status.charAt(0).toUpperCase() + report.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {new Date(report.date).toLocaleDateString()}
                        <div className="text-xs text-gray-400">
                          {new Date(report.date).toLocaleTimeString()}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => setSelectedReport(report)}
                          className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Report Details Modal */}
      {selectedReport && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Report Details</h2>
                <button
                  onClick={() => setSelectedReport(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <XCircle className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Report Info */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Report ID</p>
                      <p className="font-medium text-gray-900">#{selectedReport.id.toString().padStart(4, '0')}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Date Reported</p>
                      <p className="font-medium text-gray-900">
                        {new Date(selectedReport.date).toLocaleDateString()} at {new Date(selectedReport.date).toLocaleTimeString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Severity</p>
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${getSeverityColor(selectedReport.severity)}`}>
                        {selectedReport.severity.toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Status</p>
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedReport.status)}`}>
                        {getStatusIcon(selectedReport.status)}
                        {selectedReport.status.charAt(0).toUpperCase() + selectedReport.status.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Reported User */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Reported User</h3>
                  <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-100 rounded-lg">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                      {selectedReport.reportedUser.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{selectedReport.reportedUser.name}</p>
                      <p className="text-sm text-gray-600">{selectedReport.reportedUser.email}</p>
                    </div>
                  </div>
                </div>

                {/* Reported By */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Reported By</h3>
                  <div className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-100 rounded-lg">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                      {selectedReport.reportedBy.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{selectedReport.reportedBy.name}</p>
                      <p className="text-sm text-gray-600">{selectedReport.reportedBy.email}</p>
                    </div>
                  </div>
                </div>

                {/* Reason & Description */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">Reason</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <AlertTriangle className="w-5 h-5 text-orange-600" />
                    <span className="font-medium text-gray-900">{selectedReport.reason}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">Description</h3>
                  <p className="text-gray-700 bg-gray-50 p-4 rounded-lg">{selectedReport.description}</p>
                </div>

                {/* Action Buttons */}
                <div className="border-t pt-6">
                  <h3 className="text-sm font-semibold text-gray-900 mb-4">Take Action</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedReport.status !== 'reviewing' && (
                      <button
                        onClick={() => handleStatusChange(selectedReport.id, 'reviewing')}
                        className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                        Start Review
                      </button>
                    )}
                    {selectedReport.status !== 'resolved' && (
                      <button
                        onClick={() => handleStatusChange(selectedReport.id, 'resolved')}
                        className="flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      >
                        <CheckCircle className="w-4 h-4" />
                        Mark Resolved
                      </button>
                    )}
                    {selectedReport.status !== 'rejected' && (
                      <button
                        onClick={() => handleStatusChange(selectedReport.id, 'rejected')}
                        className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                      >
                        <XCircle className="w-4 h-4" />
                        Reject Report
                      </button>
                    )}
                    <button
                      onClick={() => handleDeleteReport(selectedReport.id)}
                      className="flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                      Delete Report
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminReportsPage;