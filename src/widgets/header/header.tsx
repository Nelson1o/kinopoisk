import { type ChangeEvent } from "react";
import { Link } from "react-router";

import lightLogo from "@/shared/assets/icons/logo.svg";
// import filterLogo from "@/shared/assets/icons/icon-filter.svg";
import seacrhLogo from "@/shared/assets/icons/icon-search_black.svg";

import styles from "./styles.module.scss";

type HeaderProps = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Header = ({ value, onChange }: HeaderProps) => {
  // const [isOpenFilter, setIsOpenFilter] = useState(true);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <Link to="/" className={styles.logo}>
            <img
              className={styles.logoImage}
              src={lightLogo}
              alt="Main logo"
              width={220}
              height={40}
            />
          </Link>
          <div className={styles.search}>
            <input
              className={styles.input}
              placeholder="Фильмы, сериалы, персоны"
              value={value}
              onChange={onChange}
            />
            {/* <img
              className={styles.filterLogo}
              src={filterLogo}
              alt="filter logo"
              width={20}
              height={20}
              onClick={() => setIsOpenFilter((prev) => !prev)}
            /> */}
            <img
              className={styles.seacrhLogo}
              src={seacrhLogo}
              alt="seacrh logo"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
