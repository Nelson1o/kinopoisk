import type { Actor } from "@/shared/types";

import styles from "./styles.module.scss";

type MovieActorsProps = {
  actors?: Actor[];
};

export const MovieActors = ({ actors }: MovieActorsProps) => (
  <>
    <h3 className={styles.title}>В главных ролях</h3>
    <ul className={styles.list}>
      {actors?.slice(0, 10).map(({ id, name }) => (
        <li key={id} className={styles.item}>
          {name}
        </li>
      ))}
    </ul>
    <div className={styles.total}>Всего {actors?.length} актера</div>
  </>
);
