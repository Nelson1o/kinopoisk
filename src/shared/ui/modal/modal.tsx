import { type MouseEvent } from "react";
import ReactDOM from "react-dom";

import styles from "./styles.module.scss";

type ModalProps = {
  active: boolean;
  setActive: (flag: boolean) => void;
  setFavorite: () => void;
};

export const Modal = ({ active, setActive, setFavorite }: ModalProps) => {
  if (!active) return null;

  return ReactDOM.createPortal(
    <div
      className={active ? `${styles.modal} ${styles.active}` : styles.modal}
      onClick={() => setActive(false)}
    >
      <div
        className={styles.content}
        onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        <p className={styles.title}>Добавить фильм в избранное?</p>
        <div className={styles.group}>
          <button onClick={() => setActive(false)}>Отмена</button>
          <button onClick={setFavorite}>Подтвердить</button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")!
  );
};
