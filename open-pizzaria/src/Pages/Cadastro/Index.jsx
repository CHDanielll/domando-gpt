import React, { useState } from 'react'
import "./Cadastro.css"

export default function index() {
    // Estado para armazenar os dados do formulario
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        telefone: ""
    })

    //Função para lidar com a mudança nos campos do formulário
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }))
    }   

    //Função para envio do formulário
    const handleSubmit = (e) => {
        e.preventDefault()
        alert("Enviar")
    
    }

  return (
    <main className="containerCadastro">
        <h1>Cadastro de usuários</h1>
        <form onSubmit={handleSubmit}>
            <article className="form-control">
                <label htmlFor="nome">Nome</label>
                <input 
                    type="text" 
                    name="nome" 
                    placeholder="Digite seu nome"
                    value={formData.nome}
                    onChange={handleChange}
                />
            </article>
            

            <article className="form-control">
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Digite seu Email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </article>

            
            <article className="form-control">
                <label htmlFor="telefone">Telefone</label>
                <input 
                    type="tel" 
                    name="telefone" 
                    placeholder="Digite seu telefone"
                    value={formData.telefone}
                        onChange={handleChange}
                />
            </article>
            <br />
            <button>Cadastrar</button>
        </form>
    </main>
  )
}