'use client'
import styles from '../../styles/Navegacion.module.css'
import Link from "next/link"
import { MyContext } from "../context/MyContext"
import { useContext } from "react"
import logo from '../assets/img/logo.png'
import Image from 'next/image'



const links = [
{
    label: 'Iniciar sesión',
    route: '/inicioSesion'
},
{
  label: 'PruebaDos',
  route: '/rpruebados'
},
{
  label: 'Prueba',
  route: '/rprueba'
}]



const linksDII = [
{
    label: 'Tareas',
    route: '/tareas'
},
{
    label: 'prueba',
    route: '/pruebas'
},
// {
//     label: '4',
//     route: '/'
// }
]

export default function Navegacion() {

    const { sesionIniciada } = useContext(MyContext);

    return (
        <nav className="navbar">
          <header className={styles.header}>
            <nav>
              <ul className={styles.navegacion}>
              <Link href="/">
                      <Image src={logo} alt="Logo" className={styles.logo} priority/>
                  </Link>
                {sesionIniciada ? (
                  linksDII.map(({ label, route }) => (
                    <li key={route}>
                      <Link href={route}>
                        {label}
                      </Link>
                    </li>
                  ))
                ) : (
                  links.map(({ label, route }) => (
                    <li key={route}>
                      <Link href={route}>
                        {label}
                      </Link>
                    </li>
                  ))
                )}
              </ul>
            </nav>
          </header>
        </nav>
      )
}

