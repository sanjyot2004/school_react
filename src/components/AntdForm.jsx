import React, { useState } from 'react';
import { Form, Input, Select, Button, message } from 'antd';

const { Option } = Select;

function AntdForm() {
    const [loading,setLoading]=useState(false)
  const onFinish = (values) => {
    setLoading(true)
    // Handle form submission here
    console.log('Received values:', values);
    fetch('https://sanjyot123.pythonanywhere.com/api/student/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        message.success("Registration Successfull")
        form.resetFields()
        setLoading(false)
        // Handle response from PHP script if needed
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false)

        // Handle error if needed
      });
  };
const [form] =Form.useForm()
  return (
    <Form
    form={form}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        label="Name of Student"
        name="name"
        rules={[{ required: true, message: 'Please input student name!' }]}
      >
        <Input placeholder="Enter Student Name" />
      </Form.Item>

      <Form.Item
        label="Name of Parent"
        name="parentname"
        rules={[{ required: true, message: 'Please input parent name!' }]}
      >
        <Input placeholder="Enter Parent Name" />
      </Form.Item>

      <Form.Item
        label="Select Class"
        name="className"
        rules={[{ required: true, message: 'Please select class!' }]}
      >
        <Select placeholder="Select Class">
          <Option value="LKG/UKG Std">LKG/UKG Std</Option>
          <Option value="First Std">First Std</Option>
          <Option value="Second Std">Second Std</Option>
          <Option value="Second Std">Third Std</Option>
          <Option value="Second Std">Fourth Std</Option>
          <Option value="Second Std">Fifth Std</Option>
          <Option value="Second Std">Sixth Std</Option>
          <Option value="Second Std">Seventh Std</Option>
          <Option value="Second Std">Eighth Std</Option>
          {/* Add more options as needed */}
        </Select>
      </Form.Item>

      <Form.Item
  label="Contact Number"
  name="contact"
  rules={[
    { 
      required: true, 
      message: 'Please input contact number!' 
    },
    {
      pattern: /^[0-9]{10}$/,
      message: 'Contact number must be exactly 10 digits long and contain only numbers!'
    }
  ]}
>
  <Input type="tel" placeholder="Enter Contact Number" />
</Form.Item>



      <Form.Item
        label="Email Id"
        name="email"
        rules={[
          { required: true, message: 'Please input your email!' },
          { type: 'email', message: 'Please enter a valid email!' },
        ]}
      >
        <Input type="email" placeholder="Enter Email Id" />
      </Form.Item>

      <Form.Item>
        <Button loading={loading} type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default AntdForm;
