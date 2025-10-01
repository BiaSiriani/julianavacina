import Image from "next/image";
import styles from "./page.module.css";
import Topbar from "./component/topbar";
import Campanhas from "./component/campanhas";
export default function Home() {
  return (
   <>
   <Topbar />
    <Campanhas />
   </>
  );
}
