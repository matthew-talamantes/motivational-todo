import BackgroundImage from "@/components/backgroundImg";
import Header from "@/components/header";

import styles from "./styles.module.scss";

export default function Home() {
  return (
    <main className="">
      <div className={styles.bgImgWrapper}>
        <BackgroundImage />
      </div>
      <div className={styles.content}>
        <Header textColor='white' />
      </div>
    </main>
  )
}
