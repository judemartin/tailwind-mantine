import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useTheme } from "next-themes";
import Header from "../components/Header";
import Users from "../components/Users";
import Transactions from "../components/Transactions";
export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="scrollbar-hide">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex flex-col justify-center items-center mt-10 scrollbar-hide">
        {/* <Users /> */}
        <Transactions />
        <Transactions />
        <Transactions />
        <Transactions />
        <Transactions />
        <Transactions />
      </main>
    </div>
  );
}
