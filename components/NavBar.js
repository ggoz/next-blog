import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
      </ul>
      <ThemeSwitch></ThemeSwitch>
      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-between;
        }
        ul {
          list-style: none;
          padding: 0;
        }

        li {
          display: inline;
        }

        li:not(:first-child) {
          margin-left: 0.75rem;
        }
      `}</style>
    </nav>
  );
};

export default NavBar;
