import Link from "next/link";
import { useRouter } from "next/router";
import { FilterBar } from "../FilterBar";
import styles from "./styles.module.scss";

export function Header() {
	const router = useRouter();

	const isHomePage = router.asPath === "/";

	return (
		<header className={styles.header}>
			<Link href={"/"}>Equipment Checkup</Link>
			{isHomePage && <FilterBar />}
		</header>
	);
}
