import styles from "./styles.module.scss";

type FieldValueProps = {
  name: string;
  value?: string | number;
};

export const FieldValue = ({ name, value }: FieldValueProps) => (
  <div className={styles.field}>
    <div className={styles.name}>{name}</div>
    <div className={styles.value}>{value ?? "-"}</div>
  </div>
);
