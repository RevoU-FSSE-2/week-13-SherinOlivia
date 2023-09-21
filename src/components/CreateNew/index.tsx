import { Button, Card, Col, Select, Row, Input, Form as AntForm } from 'antd';
import styles from './CreateNew.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { TextLevel } from "../../components";
import { CategoryInfo, CreateInfo } from "../../types";

interface Props {
    onSubmit: (values: CreateInfo) => void;
    category?: CategoryInfo
}
const initialValues = {
    name: '',
    status: false
}

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Please Enter the Name'),
    status: Yup.boolean().required('Please Enter the Status')
})

const CreateNew = ({onSubmit, category}: Props) => {
    const handleCreate = (values: CreateInfo) => {
        onSubmit(values)
        console.log(`Successfully Created New Category:`, values)
    }
    
    return (
        <Row className={styles.wrapper}>
        <Col span={8}></Col>
        <Col span={8} className={styles.body}>
            <Card className={styles.card}>
                <Formik 
                initialValues={category ?? initialValues}
                validationSchema={validationSchema}
                onSubmit={handleCreate}>
                    {(formikProps) => (
                    <Form name="basic" autoComplete="off">
                        <TextLevel level={3} content={"Create New Category"}/>
                         
                        <AntForm.Item label="Name" name="name">
                        <Field name="name" as={Input} placeholder="Enter Name" />
                        
                        <div className={styles.error}>
                            <ErrorMessage name="name" />
                        </div>
                        </AntForm.Item>

                        <AntForm.Item label="Status" name="status">
                        <Select placeholder="Select Status"   
                        onChange={(value) => {
                            const statusValue = value === "true" ? true : false;
                            formikProps.setFieldValue("status", statusValue);
                            }}
                        value={formikProps.values.status ? "true" : "false"}
                        >
                            <Select.Option value="true">Active</Select.Option>
                            <Select.Option value="false">Deactive</Select.Option>
                        </Select>
                        
                        <div className={styles.error}>
                            <ErrorMessage name="status" />
                        </div>
                        </AntForm.Item>

                        <AntForm.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <div>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Create
                                </Button>
                            </div>
                        </AntForm.Item>
                    </Form>
                    )}
                </Formik>
            </Card>
        </Col>
        </Row>
    
    )
      
}

export default CreateNew