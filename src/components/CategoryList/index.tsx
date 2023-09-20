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

    return (
        <Table columns={columns} dataSource={data} />
    )
}

export default CategoryList