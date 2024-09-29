
import React, { useState } from 'react';
import { Table, Button, DatePicker, Select, Form } from 'antd';
import { ExportOutlined } from '@ant-design/icons';

const { Option } = Select;

// Mock data for demonstration
const mockData = [
  {
    key: '1',
    project: 'Project A',
    date: '2024-09-01',
    indicator: 'Indicator 1',
    value: 100,
  },
  {
    key: '2',
    project: 'Project B',
    date: '2024-09-05',
    indicator: 'Indicator 2',
    value: 200,
  },
  // Add more mock data as needed
];

const ReportGenerationUI = () => {
  const [filters, setFilters] = useState({
    project: undefined,
    startDate: null,
    endDate: null,
    indicator: undefined,
  });

  const handleFilterChange = (changedFields) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...changedFields }));
  };

  const filteredData = mockData.filter((item) => {
    const withinDateRange =
      (!filters.startDate || new Date(item.date) >= filters.startDate) &&
      (!filters.endDate || new Date(item.date) <= filters.endDate);
    return (
      (!filters.project || item.project === filters.project) &&
      withinDateRange &&
      (!filters.indicator || item.indicator === filters.indicator)
    );
  });

  const exportToPDF = () => {
    console.log('Exporting to PDF...');
    // Implement PDF export logic here
  };

  const exportToExcel = () => {
    console.log('Exporting to Excel...');
    // Implement Excel export logic here
  };

  return (
    <div className="common">
      <h1 className="heading">Report Generation</h1>
        <div className="container_report">
      <Form layout="vertical">
        <Form.Item label="Project">
          <Select
            placeholder="Select project"
            onChange={(value) => handleFilterChange({ project: value })}
            style={{ width: 200 }}
          >
            <Option value="Project A">Project A</Option>
            <Option value="Project B">Project B</Option>
            {/* Add more project options as needed */}
          </Select>
        </Form.Item>

        <Form.Item label="Start Date">
          <DatePicker
            onChange={(date) => handleFilterChange({ startDate: date })}
          />
        </Form.Item>

        <Form.Item label="End Date">
          <DatePicker
            onChange={(date) => handleFilterChange({ endDate: date })}
          />
        </Form.Item>

        <Form.Item label="Indicator">
          <Select
            placeholder="Select indicator"
            onChange={(value) => handleFilterChange({ indicator: value })}
            style={{ width: 200 }}
          >
            <Option value="Indicator 1">Indicator 1</Option>
            <Option value="Indicator 2">Indicator 2</Option>
            {/* Add more indicator options as needed */}
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" onClick={() => console.log('Generating report...')}>
            Generate Report
          </Button>
        </Form.Item>
      </Form>

      <Table
        dataSource={filteredData}
        columns={[
          { title: 'Project', dataIndex: 'project', key: 'project' },
          { title: 'Date', dataIndex: 'date', key: 'date' },
          { title: 'Indicator', dataIndex: 'indicator', key: 'indicator' },
          { title: 'Value', dataIndex: 'value', key: 'value' },
        ]}
        pagination={false}
        rowKey="key"
      />

      <div style={{ marginTop: '20px' }}>
        <Button
          type="default"
          icon={<ExportOutlined />}
          onClick={exportToPDF}
        >
          Export as PDF
        </Button>
        <Button
          type="default"
          icon={<ExportOutlined />}
          onClick={exportToExcel}
          style={{ marginLeft: '10px' }}
        >
          Export as Excel
        </Button>
      </div>
      </div>
    </div>
  );
};

export default ReportGenerationUI;
