import styles from "./pagination.module.css";

const Pagination = () => {
  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        //disabled={!hasPrev}
        //onClick={() => router.push(`?page=${page - 1}`)}
      >
        Previous
      </button>
      <button
        //disabled={!hasNext}
        className={styles.button}
        //nClick={() => router.push(`?page=${page + 1}`)}
      >
        Next
      </button>
    </div>
  )
};

export default Pagination;
