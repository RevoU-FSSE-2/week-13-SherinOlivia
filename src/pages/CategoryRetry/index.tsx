import { ColumnsType } from 'antd/es/table';
import { useState, useEffect, useCallback } from 'react';
import { CategoryRetry as CategoryListComponent, TextLevel } from '../../components';
import { CategoryInfo } from '../../types';
import { useStatus } from '../../hooks';
import styles from './CategoryRetry.module.css';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const CategoryRetry: React.FC = () => {
  const [categories, setCategories] = useState<CategoryInfo[]>([]);
  const navigate = useNavigate();

  const apiUrl: string = import.meta.env.VITE_REACT_APP_BASE_URL as string;

  const handleLogOut = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  const getCategory = useCallback(async () => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate('/login');
      return;
    }

    try {
      const fetching = await fetch(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      const response = await fetching.json();
      console.log(response);
      setCategories(response.data ?? []);
    } catch (error) {
      console.error("ERROR:", error);
      alert("Failed to fetch Categories!");
    }
  }, [apiUrl, navigate]);

  useEffect(() => {
    getCategory();
  }, [getCategory]);

  const removeCategory = async (id: string) => {
    try {
      const response = await fetch(`${apiUrl}${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      });

      if (response.ok) {
        setCategories((prevCategories) =>
          prevCategories.filter((category) => category.id !== id)
        );
        console.log('Successfully Removed category');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const columns: ColumnsType<CategoryInfo> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',        
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Status',
      dataIndex: 'is_active',
      key: 'is_active',
      // eslint-disable-next-line react-hooks/rules-of-hooks
      render: (_, record) => useStatus(record.is_active),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <>
          <Button type={'primary'} onClick={() => navigate(`/edit/${record.id}`)}>Edit</Button>
          <Button type={'primary'} onClick={() => removeCategory(record.id) } htmlType="button" danger>Delete</Button>
        </>

      ),
    },
  ];

  return (
    <>
      <div className={styles.categoryList}>
        <div className={styles.categoryTitle}>
          <span><Button type={'primary'} onClick={() => navigate('/add')}>Create New</Button></span>
          <TextLevel level={1} content={"List of Category"} />
          <span className={styles.logout}><Button type={'primary'} onClick={handleLogOut} danger>Log Out</Button></span>
        </div>
        <CategoryListComponent columns={columns} data={categories} />
      </div>
    </>
  );
};

export default CategoryRetry;
