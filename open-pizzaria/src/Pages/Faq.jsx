import React, { useEffect, useState } from 'react'
import './Faq.css'

export default function Faq() {


  const faq = [
    {
      id: 1,
      nome: "João Silva",
      imagem: "https://i.pravatar.cc/80?img=10",
      pergunta: "Como posso pedir a pizza?",
      resposta:
        "Você pode fazer o pedido através do nosso site, aplicativo ou entrando em contato com a nossa equipe de atendimento."
    },
    {
      id: 2,
      nome: "Maria Santos",
      imagem: "https://i.pravatar.cc/80?img=5",
      pergunta: "Quanto tempo leva para a entrega?",
      resposta:
        "O tempo de entrega pode variar dependendo da sua localização e do volume de pedidos. Normalmente, a entrega é feita em até 30 minutos."
    },
    {
      id: 3,
      nome: "Ricardo Alves",
      imagem: "https://i.pravatar.cc/80?img=6",
      pergunta: "Posso acompanhar o andamento do meu pedido?",
      resposta:
        "Sim. Você pode acompanhar o andamento do seu pedido através do nosso sistema ou entrando em contato com a nossa equipa."
    },
    {
      id: 4,
      nome: "Pedro Oliveira",
      imagem: "https://i.pravatar.cc/80?img=7",
      pergunta: "O que acontece se o serviço atrasar?",
      resposta:
        "Caso atrase, voce recebe um desconto de 10% no valor do pedido em forma de desconto para o proximo. Entre em contato com a nossa equipe para mais informações."
    },
    {
      id: 5,
      nome: "Ana Costa",
      imagem: "https://i.pravatar.cc/80?img=8",
      pergunta: "Qual o grau de qualidade dos produtos?",
      resposta:
        "Todos os nossos produtos são de alta qualidade, feitos com ingredientes frescos e selecionados. Garantimos a satisfação dos nossos clientes com o sabor e a apresentação das nossas pizzas."
    },
    {
      id: 6,
      nome: "Fernandes Lima",
      imagem: "https://i.pravatar.cc/80?img=9",
      pergunta: "Posso pedir alterações caso o resultado não fique como esperado?",
      resposta:
        "Sim. Caso o resultado não esteja de acordo com o combinado, você pode entrar em contato conosco para avaliarmos a situação e realizarmos os ajustes necessários."
    }
  ]


  const [coments, setComents] = useState([])


  useEffect(() => {

    fetch("http://localhost:3000/comments")
      .then((response) => response.json())
      .then((data) => setComents(data))
      .catch((error) => console.error("Erro na API", error))

  }, [])


  return (
    <section className="faq">


      <section className="contentComents">

        {coments.map((coment) => (
          <article key={coment.id}>

            <strong>Nome: {coment.nomeA}</strong>
            <strong>Avaliação: {coment.avaliacao}</strong>
            <strong>Comentário: {coment.comentario}</strong>
          </article>
        ))}

      </section>


      {faq.map((faq) => (
        <article className="contentBack" key={faq.id}>

          <div className="profile">

            <img
              src={faq.imagem}
              width={60}
              height={60}
              alt={`Foto de ${faq.nome}`}
            />

            <div>
              <h3>{faq.nome}</h3>
            </div>

          </div>


          <div className="faq-content">

            <h2>{faq.pergunta}</h2>

            <p>
              <strong>Resposta:</strong>
              <br />
              {faq.resposta}
            </p>

          </div>

        </article>
      ))}


    </section>
  )
}
