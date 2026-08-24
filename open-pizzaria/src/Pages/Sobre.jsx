import React from "react";
import "./Sobre.css";

export default function Sobre() {
  return (
    <div className="sobre">
      <div className="sobre-container">

        <h1>🍕 Sobre Nossa Pizzaria</h1>

        <p className="introducao">
          Mais do que uma pizzaria, somos um lugar para reunir a família,
          encontrar os amigos e aproveitar uma boa pizza.
        </p>

        <div className="abas">

          <input type="radio" id="historia" name="aba" defaultChecked />
          <label htmlFor="historia">Nossa História</label>

          <input type="radio" id="ingredientes" name="aba" />
          <label htmlFor="ingredientes">Ingredientes</label>

          <input type="radio" id="qualidade" name="aba" />
          <label htmlFor="qualidade">Qualidade</label>

          <input type="radio" id="equipe" name="aba" />
          <label htmlFor="equipe">Nossa Equipe</label>

          <div className="conteudo historia">
            <h2>🍕 Nossa História</h2>
            <p>
              Nossa pizzaria nasceu da paixão por pizzas artesanais e pelo
              desejo de reunir pessoas ao redor de uma boa mesa. Começamos
              pequenos e, com dedicação, conquistamos nossos clientes.
            </p>
          </div>

          <div className="conteudo ingredientes">
            <h2>🧀 Nossos Ingredientes</h2>
            <p>
              Trabalhamos com ingredientes frescos e selecionados. Nossa massa
              é preparada diariamente e nossos molhos possuem receitas
              especiais para deixar cada pizza ainda mais saborosa.
            </p>
          </div>

          <div className="conteudo qualidade">
            <h2>⭐ Nossa Qualidade</h2>
            <p>
              Cada pizza é preparada com muito cuidado, desde a escolha dos
              ingredientes até o momento em que sai do forno. Nosso objetivo é
              oferecer sabor e qualidade em cada pedaço.
            </p>
          </div>

          <div className="conteudo equipe">
            <h2>👨‍🍳 Nossa Equipe</h2>
            <p>
              Nossa equipe é formada por pessoas apaixonadas por gastronomia.
              Trabalhamos juntos para oferecer pizzas deliciosas e um
              atendimento especial aos nossos clientes.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
