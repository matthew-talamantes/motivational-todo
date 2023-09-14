import BackgroundImage from "@/components/homePage/backgroundImg";
import Header from "@/components/header";
import CurrentDate from "@/components/homePage/currentDate";

import styles from "./styles.module.scss";

export default function Home() {
  return (
    <main className="">
      <div className={styles.bgImgWrapper}>
        <BackgroundImage />
      </div>
      <div className={styles.content}>
        <Header textColor='white' />
        <CurrentDate />
      </div>
    </main>
  )
}