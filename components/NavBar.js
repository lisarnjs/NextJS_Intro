import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from "./NavBar.module.css";

export default function NavBar() {
  const router = useRouter();
  console.log(router.pathname);
  return (
  <nav>
    <Link href="/">
    {/* 백틱을 사용하여 두개 이상의 css classname을 붙혀줄 수 있다. */}
    <a className={`${styles.link} ${router.pathname==="/" ? styles.active : ""}`}>Home</a>
    </Link>
    <Link href="/about">
    {/* join(" ")으로 공백을 간격으로 한 문자열로서 합쳐 버림 
    join() => 한 배열을 다른 한 문자열로 바꾸는 방법 */}
    <a className={[
      styles.link, 
      router.pathname==="/about" ? styles.active : ""
    ].join(" ")}>About</a>
    </Link>
  </nav>
  );
}