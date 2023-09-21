import { useEffect, useState } from 'react';
import { Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useNavigate } from 'react-router-dom';
import { CategoryList as CategoryListComponent, TextLevel } from '../../components'
import styles from './CategoryList.module.css'
import { useStatus } from '../../hooks';
import { CategoryInfo } from '../../types';

const CategoryList: React.FC = () => {
  const [categories, setCategories] = useState<CategoryInfo[]>([]);
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_REACT_APP_BASE_URL;
  const getStatusText = useStatus({ status: true });

const handleLogOut = () => {
  localStorage.removeItem('authToken')
  navigate('/login');
} 

const getCategory = async () => { 
  const token = localStorage.getItem('authToken')
  console.log("Auth Token:", token)
  try {
    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('authToken')}`

      },
    })
    const data = await response.json()
    console.log(data)
    setCategories(data.data)
  } catch (error) {
    console.error("ERROR:", error)
    alert("Failed to fetch Categories!")
  }
}

useEffect(() => {
  const token = localStorage.getItem('authToken')
  if(!token) {
    navigate('/login') 
    return
  }
  getCategory()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // remove/delete item
  const removeCategory = async (id: string) => {
    const apiUrl = import.meta.env.VITE_REACT_APP_BASE_URL;
    try {
        const response = await fetch(`${apiUrl}${id}`, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`
          }
        })
  
        if(response.ok) {
            setCategories((categories) => categories.filter((category) => category.id !== id))
            console.log("`Successfully Removed category")
        }
    } catch (error) {
        console.error(error)
    }
  }
  
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
      render: () => getStatusText
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <>
          <Button type={'primary'} onClick={() => navigate(`${apiUrl}update`)}>Edit</Button>
          <Button type={'primary'} onClick={() => removeCategory(record.id) } danger>Delete</Button>
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
  )
}

export default CategoryList;