// RiskEntryForm.js
import React from 'react';
import { Form, Input, Select, DatePicker, Button, message } from 'antd';

const { Option } = Select;

const RiskEntryForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    // Handle form submission
    console.log('Received values from form: ', values);
    message.success('Risk details submitted successfully!');
    form.resetFields(); // Reset form fields after submission
  };

  const onFinishFailed = (errorInfo) => {
    // Handle form submission failure
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      form={form}
      name="riskEntry"
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Risk Description"
        name="description"
        rules={[{ required: true, message: 'Please enter a risk description!' }]}
      >
        <Input.TextArea rows={4} />
      </Form.Item>

      <Form.Item
        label="Risk Type"
        name="type"
        rules={[{ required: true, message: 'Please select a risk type!' }]}
      >
        <Select placeholder="Select risk type">
          <Option value="financial">Financial</Option>
          <Option value="operational">Operational</Option>
          <Option value="strategic">Strategic</Option>
          <Option value="compliance">Compliance</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Probability"
        name="probability"
        rules={[{ required: true, message: 'Please select a probability!' }]}
      >
        <Select placeholder="Select probability">
          <Option value="low">Low</Option>
          <Option value="medium">Medium</Option>
          <Option value="high">High</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Impact"
        name="impact"
        rules={[{ required: true, message: 'Please enter the impact value!' }]}
      >
        <Input type="number" placeholder="Impact value" />
      </Form.Item>

      <Form.Item
        label="Mitigation Strategy"
        name="mitigation"
        rules={[{ required: true, message: 'Please enter a mitigation strategy!' }]}
      >
        <Input.TextArea rows={4} />
      </Form.Item>

      <Form.Item
        label="Review Date"
        name="reviewDate"
        rules={[{ required: true, message: 'Please select a review date!' }]}
      >
        <DatePicker style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RiskEntryForm;
