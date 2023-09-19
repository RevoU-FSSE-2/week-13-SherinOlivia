import React from 'react';
import { SmileOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { TextLevel } from '../../components';

const onFinish = (values: object) => {
    console.log('Success:', values);
  };
  
  const onFinishFailed = (errorInfo: object) => {
    console.log('Failed:', errorInfo);
  };
  
  type FieldType = {
    name: string;
    username?: string;
    password?: string;
    remember?: string;
  };
  
  const Register: React.FC = () => (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <TextLevel level={3} content={"Register"}/>

      <Form.Item<FieldType>
        label="Name"
        name="name"
        
        rules={[{ required: true, message: 'Please input your name!' }]}
      >
        <Input prefix={<SmileOutlined className="site-form-item-icon" />} />
      </Form.Item>
      
      <Form.Item<FieldType>
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} />
      </Form.Item>
  
      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} />
      </Form.Item>
  
      <Form.Item<FieldType>
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
  
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );

  export default Register