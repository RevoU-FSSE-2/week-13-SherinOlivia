import { useEffect, useState } from 'react';
import { Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useNavigate } from 'react-router-dom';
import { CategoryList as CategoryListComponent, TextLevel } from '../../components'
import styles from './CategoryList.module.css'

// interface GetCategoryResponse {
//   categories: CategoryInfo[];
//   total: number;
//   skip: number;
//   limit: number;
// }
interface CategoryInfo {
  id: string;
  name: string;
  status: boolean;
}


const CategoryList: React.FC = () => {
  const [categories, setCategories] = useState<CategoryInfo[]>([]);
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_REACT_APP_BASE_URL;

const handleLogOut = () => {
  localStorage.removeItem('authToken')
  navigate('/login');
} 

const getCategory = async () => { 
  try {
    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('authToken')}`
      },
    })
    const data = await response.json()
    console.log(data)
    setCategories(data.categories)
  } catch (error) {
    alert("Failed to fetch Categories!")
  }
}

useEffect(() => {
      const token = localStorage.getItem('authToken')
      if(!token) {
        navigate('/login') 
      }
      getCategory()

    }, [])

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
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <>
          <Button type={'primary'} onClick={() => navigate(`${apiUrl}update`)}>Edit</Button>
          <Button type={'primary'} onClick={() => navigate(`${apiUrl}${record.id}`)}>Delete</Button>
        </>

      ),
    },
  ];
  

  return (
    <>
    <div className={styles.categoryList}>
      <div className={styles.categoryTitle}>
      <span><Button type={'primary'} >Create New</Button></span>
        <TextLevel level={1} content={"List of Category"} />
        <span className={styles.logout}><Button type={'primary'} onClick={handleLogOut} danger>Log Out</Button></span>
      </div>
      <CategoryListComponent columns={columns} data={categories}/>
    </div>
    </>
  )
}

export default CategoryList;