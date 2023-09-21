import { Table } from "antd"
import { ColumnsType } from "antd/es/table";


interface CategoryInfo {
    id: string;
    name: string;
    status: boolean;
  }

interface Props {
    data: CategoryInfo[];
    columns: ColumnsType<CategoryInfo>;
  }

const CategoryList = ({ data, columns} : Props) => {
  const pagination = {
    pageSize: 10, 
    total: data.length,
  };

    return (
        <Table columns={columns} dataSource={data} pagination={pagination} />
    )
}

export default CategoryList