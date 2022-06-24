import { useRouter } from "next/router";

export function Header() {
  const router = useRouter();

  return (
    <header
      onClick={() => {
        router.push("/");
      }}
    >
      <h1>Equipment Checkup</h1>
      <hr />
    </header>
  );
}
