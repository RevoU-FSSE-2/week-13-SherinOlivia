import styles from './CategoryTable.module.css'


const CategoryTable = () => {

  return (
      <table className={styles.table}>
      <tr>
        <th className={styles.table}>ID</th>
        <th className={styles.table}>Name</th>
        <th className={styles.table}>Status</th>
        <th className={styles.table}>Action</th>
      </tr>
    </table>
  )

}

export default CategoryTable