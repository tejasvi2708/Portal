
import React, { useState } from 'react';
import { Table, Button, Modal, Form, Input, DatePicker, Space, message } from 'antd';
import moment from 'moment';

const ProjectList = ({ projects, updateProject, deleteProject }) => {
  const [editingProject, setEditingProject] = useState(null);
  const [form] = Form.useForm();

  const columns = [
    {
      title: 'Project Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      key: 'startDate',
      render: (date) => moment(date).format('YYYY-MM-DD'),
    },
    {
      title: 'End Date',
      dataIndex: 'endDate',
      key: 'endDate',
      render: (date) => moment(date).format('YYYY-MM-DD'),
    },
    {
      title: 'Geographical Scope',
      dataIndex: 'scope',
      key: 'scope',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, project) => (
        <Space>
          <Button type="primary" onClick={() => handleEdit(project)}>
            Edit
          </Button>
          <Button type="danger" onClick={() => deleteProject(project.key)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const handleEdit = (project) => {
    setEditingProject(project);
    form.setFieldsValue({
      name: project.name,
      description: project.description,
      startDate: moment(project.startDate),
      endDate: moment(project.endDate),
      scope: project.scope,
    });
  };

  const handleSave = () => {
    form
      .validateFields()
      .then((values) => {
        updateProject({
          key: editingProject.key,
          name: values.name,
          description: values.description,
          startDate: values.startDate,
          endDate: values.endDate,
          scope: values.scope,
        });
        setEditingProject(null);
        message.success('Project updated successfully!');
      })
      .catch(() => {
        message.error('Please fill all required fields');
      });
  };

  return (
    <div>
      <h2>Submitted Projects</h2>
      <Table 
        columns={columns} 
        dataSource={projects.map((project, index) => ({
          key: index,
          ...project,
        }))} 
        pagination={{ pageSize: 5 }} 
      />
      
      <Modal
        title="Edit Project"
        open={!!editingProject}
        onCancel={() => setEditingProject(null)}
        onOk={handleSave}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="Project Name"
            rules={[{ required: true, message: 'Please enter project name' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true, message: 'Please enter description' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="startDate"
            label="Start Date"
            rules={[{ required: true, message: 'Please select a start date' }]}
          >
            <DatePicker />
          </Form.Item>
          <Form.Item
            name="endDate"
            label="End Date"
            rules={[{ required: true, message: 'Please select an end date' }]}
          >
            <DatePicker />
          </Form.Item>
          <Form.Item
            name="scope"
            label="Geographical Scope"
            rules={[{ required: true, message: 'Please enter the scope' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ProjectList;
