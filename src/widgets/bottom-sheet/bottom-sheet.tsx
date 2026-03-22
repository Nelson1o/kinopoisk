import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import { Table } from "./ui";

import styles from "./styles.module.scss";

export const BottomSheet = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: (flag: boolean) => void;
}) => {
  const [height, setHeight] = useState(() => window.innerHeight / 2);
  const isDragging = useRef(false);

  const handleStart = () => {
    isDragging.current = true;
  };

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      const clientY = e.clientY;
      const newHeight = window.innerHeight - clientY;

      if (newHeight > 100 && newHeight < window.innerHeight * 0.95) {
        setHeight(newHeight);
      }
    };

    const handleEnd = () => {
      isDragging.current = false;
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleEnd);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleEnd);
    };
  }, []);

  if (!isOpen) return null;

  return createPortal(
    <>
      <div className={styles.backdrop} onClick={() => onClose(false)} />
      <div className={styles.sheet} style={{ height: `${height}px` }}>
        <div
          className={styles.dragHandle}
          onMouseDown={handleStart}
          onTouchStart={handleStart}
        >
          <div className={styles.handleBar} />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>Режим сравнения фильмов</h2>
          <Table />
        </div>
      </div>
    </>,
    document.getElementById("portal-root")!
  );
};
