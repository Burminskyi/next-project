import { getMenu } from "@/api/meu";
import styles from "./page.module.css";


export default async function Home() {
  // const menu = await getMenu(0);

  return (
    <main className={styles.main}>
      Главная страница
      <div>
        {/* <div>{JSON.stringify(menu)}</div>
        <div>{menu.length}</div> */}
      </div>
    </main>
  );
}
