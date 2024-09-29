// RiskDashboard.js
import React, { useState } from 'react';
import { Table, Button, Tag, message } from 'antd';
import moment from 'moment';

const initialRisks = [
  {
    key: '1',
    description: 'Budget Overrun',
    probability: 'High',
    impact: 5,
    status: 'Open',
    reviewDate: moment().subtract(1, 'days'), // Overdue
  },
  {
    key: '2',
    description: 'Staff Shortage',
    probability: 'Medium',
    impact: 3,
    status: 'Under Review',
    reviewDate: moment().add(1, 'days'), // Upcoming review
  },
  {
    key: '3',
    description: 'Compliance Issues',
    probability: 'Low',
    impact: 2,
    status: 'Closed',
    reviewDate: moment().subtract(3, 'days'), // Overdue
  },
  {
    key: '4',
    description: 'Resource shortage',
    probability: 'Low',
    impact: 2,
    status: 'Closed',
    reviewDate: moment().subtract(3, 'days'), // Overdue
  },
];

const RiskDashboard = () => {
  const [risks, setRisks] = useState(initialRisks);

  const updateStatus = (key, newStatus) => {
    const updatedRisks = risks.map((risk) =>
      risk.key === key ? { ...risk, status: newStatus } : risk
    );
    setRisks(updatedRisks);
    message.success(`Risk status updated to "${newStatus}"`);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Open':
        return 'red';
      case 'Under Review':
        return 'orange';
      case 'Closed':
        return 'green';
      default:
        return '';
    }
  };

  const columns = [
    {
      title: 'Risk Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Probability',
      dataIndex: 'probability',
      key: 'probability',
    },
    {
      title: 'Impact',
      dataIndex: 'impact',
      key: 'impact',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag color={getStatusColor(status)}>{status}</Tag>
      ),
    },
    {
      title: 'Review Date',
      dataIndex: 'reviewDate',
      key: 'reviewDate',
      render: (date) => date.format('YYYY-MM-DD'),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Button.Group>
          <Button onClick={() => updateStatus(record.key, 'Closed')}>Close</Button>
          <Button onClick={() => updateStatus(record.key, 'Under Review')}>Review</Button>
        </Button.Group>
      ),
    },
  ];

  return (
    <div className="common">
      <h2 style={{textAlign:"center", marginBottom:'20px'}}>Risk Dashboard</h2>
        <Table columns={columns} dataSource={risks} />
    </div>
  );
};

export default RiskDashboard;
