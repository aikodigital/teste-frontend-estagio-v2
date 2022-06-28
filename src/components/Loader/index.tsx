import styles from "./styles.module.scss";

interface LoaderProps {
	color?: string;
	size?: number;
}

export function Loader({ color = "green", size = 100 }: LoaderProps) {
	return (
		<div
			className={styles.loader}
			style={{
				width: size,
				height: size,
				borderTopColor: color,
			}}
		></div>
	);
}
