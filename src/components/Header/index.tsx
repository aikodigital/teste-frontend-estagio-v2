import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <Link href={"/"}>Equipment Checkup</Link>

      <Image src={"/img/aiko.png"} alt="Aiko logo" width={150} height={50} />
    </header>
  );
}
