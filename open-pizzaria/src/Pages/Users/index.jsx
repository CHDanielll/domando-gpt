import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import "./Users.css"

export default function index() {
    // UseState do react para gerenciar o estado dos usuários
    const [usuarios, setUsuarios] = useState([])
    
    // hook useEffect para buscar os usuários da API quando o componente for montado

    useEffect(() => {
        console.log("Oláaaaaa");
    }, [])

  return (
    <main className="containerUsers">
      <h1>Listade de Usuarios</h1>
      <section className="contentUsers">
        <article>
            <strong>Nome: Kaio</strong>
            <strong>Telefone: 11 99999-9999</strong>
        </article>
      </section>
      <Link to="/">Voltar para HOME</Link>
    </main>
  )
}
