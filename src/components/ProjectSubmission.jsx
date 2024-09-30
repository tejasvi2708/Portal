import React from 'react';
import { Form, Input, DatePicker, Button } from 'antd';
import moment from 'moment';

const ProjectSubmission = ({ addProject }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const projectData = {
      name: values.projectName,
      description: values.description,
      startDate: values.startDate.format('YYYY-MM-DD'),
      endDate: values.endDate.format('YYYY-MM-DD'),
      scope: values.scope,
    };
    addProject(projectData);
    form.resetFields();
  };

  return (
    <Form
      form={form}
      name="project_submission"
      layout="vertical"
      onFinish={onFinish}
      initialValues={{
        startDate: moment(),
        endDate: moment().add(1, 'month'),
      }}
    >
      <Form.Item
        name="projectName"
        label="Project Name"
        rules={[{ required: true, message: 'Please enter the project name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="description"
        label="Description"
        rules={[{ required: true, message: 'Please enter a description!' }]}
      >
        <Input.TextArea rows={3} />
      </Form.Item>

      <Form.Item
        name="startDate"
        label="Start Date"
        rules={[{ required: true, message: 'Please select a start date!' }]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item
        name="endDate"
        label="End Date"
        rules={[{ required: true, message: 'Please select an end date!' }]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item
        name="scope"
        label="Geographical Scope"
        rules={[{ required: true, message: 'Please enter geographical scope!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ProjectSubmission;
