import { useState } from "react";
import { Link } from "react-router";

import firstVideo from "@/shared/assets/not-found-video/1.mp4";
import secondVideo from "@/shared/assets/not-found-video/2.mp4";
import thirdVideo from "@/shared/assets/not-found-video/3.mp4";
import fourthVideo from "@/shared/assets/not-found-video/4.mp4";
import fifthVideo from "@/shared/assets/not-found-video/5.mp4";
import lightLogo from "@/shared/assets/icons/logo.svg";

import styles from "./styles.module.scss";

const VIDEO_URLS = [
  firstVideo,
  secondVideo,
  thirdVideo,
  fourthVideo,
  fifthVideo,
];

const getRandomVideoUrl = () => {
  const randomIndex = Math.floor(Math.random() * VIDEO_URLS.length);
  const selectedVideoUrl = VIDEO_URLS[randomIndex];

  return selectedVideoUrl;
};

export const NotFound = () => {
  const [currentVideoUrl] = useState(() => getRandomVideoUrl());

  return (
    <div className={styles.errorPage}>
      <div className="container">
        <Link to="/" className={styles.logo}>
          <img
            className={styles.logoImage}
            src={lightLogo}
            alt="Main logo"
            width={164}
            height={36}
          />
        </Link>

        <div className={styles.wrapper}>
          <div className={styles.wrapperLeft}>
            <h1 className={styles.title}>404. Страница не найдена</h1>
            <div className={styles.description}>
              <p>
                Возможно, она была перемещена, или вы просто неверно указали
                адрес страницы.
              </p>
            </div>
            <Link to="/" className={styles.link}>
              Перейти на главную
            </Link>
          </div>
          <div className={styles.wrapperRight}>
            <video
              autoPlay
              loop
              muted
              playsInline
              className={styles.video}
              src={currentVideoUrl}
              width={500}
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
};
