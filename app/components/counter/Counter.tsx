"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  toggleButtonX,
  toggleButtonY,
  selectButtonX,
  selectButtonY,
} from "@/lib/features/counter/counterSlice";
import styles from "./Counter.module.css";

export const Counter = () => {
  const dispatch = useAppDispatch();
  const buttonX = useAppSelector(selectButtonX);
  const buttonY = useAppSelector(selectButtonY);

  const handleXClick = () => {
    dispatch(toggleButtonY());
  };

  const handleYClick = () => {
    dispatch(toggleButtonX());
  };

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Y"
          onDoubleClick={handleYClick}
        >
          {buttonY}
        </button>

        <button
          className={styles.button}
          aria-label="X"
          onDoubleClick={handleXClick}
        >
          {buttonX}
        </button>
      </div>
    </div>
  );
};
