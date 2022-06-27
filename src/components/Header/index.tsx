import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FilterBar } from "../FilterBar";
import styles from "./styles.module.scss";

export function Header() {
  const router = useRouter();

  const isHomePage = router.asPath === "/";

  return (
    <header className={styles.header}>
      <div>
        <Link href={"/"}>Equipment Checkup</Link>
        {isHomePage && <FilterBar />}
      </div>
      <Image src={"/img/aiko.png"} alt="Aiko logo" width={150} height={50} />
    </header>
  );
}
