import React, { useState } from "react";
import "./Cadastro.css";

export default function Index() {
    // Estado para armazenar os dados do formulário
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        telefone: ""
    });

    // Estado para armazenar os erros
    const [errors, setErrors] = useState({});

    // Função para lidar com a mudança nos campos do formulário
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));

        // Remove o erro do campo enquanto o usuário preenche
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: ""
        }));
    };

    // Função para validar o formulário
    const validateForm = () => {
        const newErrors = {};

        if (!formData.nome.trim()) {
            newErrors.nome = "O nome é obrigatório.";
        }

        if (!formData.email.trim()) {
            newErrors.email = "O email é obrigatório.";
        }

        if (!formData.telefone.trim()) {
            newErrors.telefone = "O telefone é obrigatório.";
        }

        setErrors(newErrors);

        // Retorna true se não houver nenhum erro
        return Object.keys(newErrors).length === 0;
    };

    // Função para envio do formulário
    const handleSubmit = (e) => {
        e.preventDefault();

        // Primeiro valida o formulário
        if (!validateForm()) {
            return;
        }

        // Enviando os dados para o backend
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Usuário cadastrado com sucesso:", data);

                // Limpa o formulário após o envio
                setFormData({
                    nome: "",
                    email: "",
                    telefone: ""
                });

                // Limpa os erros
                setErrors({});
            })
            .catch((error) => {
                console.error("Erro ao cadastrar usuário:", error);
            });
    };

    return (
        <main className="containerCadastro">
            <h1>Cadastro de usuários</h1>

            <form onSubmit={handleSubmit}>
                <article className="form-control">
                    <label htmlFor="nome">Nome</label>

                    <input
                        id="nome"
                        type="text"
                        name="nome"
                        placeholder="Digite seu nome"
                        value={formData.nome}
                        onChange={handleChange}
                    />

                    {errors.nome && (
                        <span className="error">{errors.nome}</span>
                    )}
                </article>

                <article className="form-control">
                    <label htmlFor="email">Email</label>

                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Digite seu Email"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    {errors.email && (
                        <span className="error">{errors.email}</span>
                    )}
                </article>

                <article className="form-control">
                    <label htmlFor="telefone">Telefone</label>

                    <input
                        id="telefone"
                        type="tel"
                        name="telefone"
                        placeholder="Digite seu telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                    />

                    {errors.telefone && (
                        <span className="error">{errors.telefone}</span>
                    )}
                </article>

                <br />

                <button type="submit">Cadastrar</button>
            </form>
        </main>
    );
}