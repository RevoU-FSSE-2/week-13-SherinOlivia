import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Col, Row, Input, Form as AntForm } from 'antd';
import { Formik, Form, Field, ErrorMessage  } from 'formik';
import * as Yup from 'yup'
import { TextLevel } from '../../components';
import styles from './Login.module.css'
import { Link, useNavigate } from 'react-router-dom';

interface LoginInfo {
    email: string;
    password: string;
}


const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid Email!").required('Please Enter Your Email'),
    password: Yup.string().min(8, "Password must have at least 8 characters")
    .required('Please Enter Your Password')
})

const Login: React.FC = () => {
  const navigate = useNavigate()

  const handleSubmit = (values: LoginInfo) => {
    console.log(`Successfully logged in`, values)
    navigate('/');
  }

  return (
    <Row className={styles.wrapper}>
    <Col span={8}></Col>
    <Col span={8} className={styles.body}>
        <Card className={styles.card}>
            <Formik 
            initialValues = {{ email: "", password: ""}}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}>
                <Form name="basic" autoComplete="off">
                    <TextLevel level={3} content={"Login"}/>
                     
                    <AntForm.Item label="Email" name="email">
                    <Field prefix={<UserOutlined className="site-form-item-icon" />} 
                    name="email" as={Input} placeholder="Enter Your Email" />
                    
                    <div className={styles.error}>
                        <ErrorMessage name="email" />
                    </div>
                    </AntForm.Item>
                
                    <AntForm.Item label="Password" name="password">
                    <Field prefix={<LockOutlined className="site-form-item-icon" />} 
                    name="password" as={Input} placeholder="Enter Your Password" />

                    <div className={styles.error}>
                        <ErrorMessage name="password" />
                    </div>
                    </AntForm.Item>
                
                    <AntForm.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <div>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                            </Button>
                            Or <Link to={'/register'}>register now!</Link>
                        </div>
                    </AntForm.Item>
                </Form>
            </Formik>
        </Card>
    </Col>
    </Row>

  );
};

export default Login;