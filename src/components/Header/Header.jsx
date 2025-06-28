import Link from "next/link"
import styles from "./Header.module.css"

export default function Header() {
    return (
        <>
            <div className={styles.cabecalho}>
                <h1>Meu site✨</h1>
                <div className={styles.cabe}>
                    <ul>
                        <li> <Link href={"/pages/Index"} className={styles.item}  >Home</Link></li>
                        <li>  <Link href={"/pages/Galeria"}  className={styles.item} >Galeria</Link></li>
                        <li>  <Link href={"/pages/Contato"}  className={styles.item} >Contato</Link></li>
                    </ul>

                </div>
            </div>
        </>
    )
}