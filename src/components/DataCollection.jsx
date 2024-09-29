
import React from 'react';
import { Form, Input, InputNumber, DatePicker, Select, Button } from 'antd';

const { Option } = Select;

// Outcome Entry Form
const OutcomeEntryForm = () => {
  const onFinish = (values) => {
    console.log('Outcome form submitted:', values);
  };

  return (
    <Form onFinish={onFinish} layout="vertical">
      <Form.Item label="Outcome Name" name="outcomeName" rules={[{ required: true, message: 'Please input the outcome name!' }]}>
        <Input placeholder="Enter outcome name" />
      </Form.Item>

      <Form.Item label="Description" name="description" rules={[{ required: true, message: 'Please enter description!' }]}>
        <Input.TextArea placeholder="Enter description" />
      </Form.Item>

      <Form.Item label="Baseline Value" name="baselineValue" rules={[{ required: true, type: 'number', message: 'Please input a valid number!' }]}>
        <InputNumber placeholder="Enter baseline value" style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item label="Target Value" name="targetValue" rules={[{ required: true, type: 'number', message: 'Please input a valid number!' }]}>
        <InputNumber placeholder="Enter target value" style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item label="Current Value" name="currentValue" rules={[{ required: true, type: 'number', message: 'Please input a valid number!' }]}>
        <InputNumber placeholder="Enter current value" style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item label="Date Achieved" name="dateAchieved" rules={[{ required: true, message: 'Please select the date!' }]}>
        <DatePicker style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
  );
};

// Output Entry Form
const OutputEntryForm = () => {
  const onFinish = (values) => {
    console.log('Output form submitted:', values);
  };

  return (
    <Form onFinish={onFinish} layout="vertical">
      <Form.Item label="Output Name" name="outputName" rules={[{ required: true, message: 'Please input the output name!' }]}>
        <Input placeholder="Enter output name" />
      </Form.Item>

      <Form.Item label="Description" name="description" rules={[{ required: true, message: 'Please enter description!' }]}>
        <Input.TextArea placeholder="Enter description" />
      </Form.Item>

      <Form.Item label="Target Output" name="targetOutput" rules={[{ required: true, type: 'number', message: 'Please input a valid number!' }]}>
        <InputNumber placeholder="Enter target output" style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item label="Actual Output" name="actualOutput" rules={[{ required: true, type: 'number', message: 'Please input a valid number!' }]}>
        <InputNumber placeholder="Enter actual output" style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item label="Completion Date" name="completionDate" rules={[{ required: true, message: 'Please select the completion date!' }]}>
        <DatePicker style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
  );
};

// Activity Entry Form
const ActivityEntryForm = () => {
  const onFinish = (values) => {
    console.log('Activity form submitted:', values);
  };

  return (
    <Form onFinish={onFinish} layout="vertical">
      <Form.Item label="Activity Name" name="activityName" rules={[{ required: true, message: 'Please input the activity name!' }]}>
        <Input placeholder="Enter activity name" />
      </Form.Item>

      <Form.Item label="Description" name="description" rules={[{ required: true, message: 'Please enter description!' }]}>
        <Input.TextArea placeholder="Enter description" />
      </Form.Item>

      <Form.Item label="Associated Output" name="associatedOutput" rules={[{ required: true, message: 'Please input associated output!' }]}>
        <Input placeholder="Enter associated output" />
      </Form.Item>

      <Form.Item label="Start Date" name="startDate" rules={[{ required: true, message: 'Please select start date!' }]}>
        <DatePicker style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item label="End Date" name="endDate" rules={[{ required: true, message: 'Please select end date!' }]}>
        <DatePicker style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item label="Status" name="status" rules={[{ required: true, message: 'Please select status!' }]}>
        <Select placeholder="Select status">
          <Option value="ongoing">Ongoing</Option>
          <Option value="completed">Completed</Option>
          <Option value="pending">Pending</Option>
        </Select>
      </Form.Item>

      <Form.Item label="Resources Used" name="resourcesUsed" rules={[{ required: true, message: 'Please input resources used!' }]}>
        <Input.TextArea placeholder="Enter resources used" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
  );
};

// Main Form Component
const DataEntryForms = () => {
  return (
    <div className="common">
      <h1>Outcome Entry Form</h1>
      <OutcomeEntryForm />
      
      <h1>Output Entry Form</h1>
      <OutputEntryForm />
      
      <h1>Activity Entry Form</h1>
      <ActivityEntryForm />
    </div>
  );
};

export default DataEntryForms;
