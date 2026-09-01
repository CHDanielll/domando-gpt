import React from 'react'
import "./style.css"

export default function index() {
    return (
        <main className="error-page">
            <div className="error-content">
                <span className="error-code">404</span>

                <h1>Página não encontrada</h1>

                <p>
                    Ops! A página que você está procurando não existe
                    ou foi removida.
                </p>

                <a href="/" className="back-button">
                    Voltar para o início
                </a>
            </div>
        </main>
    )
}