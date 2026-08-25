import React from "react";
import "./Cardapio.css";

export default function Cardapio() {
  return (
    <div className="cardapio">
      <div className="cardapio-container">

        <h1>🍕 Nosso Cardápio</h1>

        <p className="introducao">
          Escolha sua pizza favorita e aproveite o melhor sabor da nossa
          pizzaria!
        </p>

        <div className="abas">

          {/* ABAS */}
          <input type="radio" id="pizzas" name="aba" defaultChecked />
          <label htmlFor="pizzas">🍕 Pizzas</label>

          <input type="radio" id="doces" name="aba" />
          <label htmlFor="doces">🍫 Pizzas Doces</label>

          <input type="radio" id="bebidas" name="aba" />
          <label htmlFor="bebidas">🥤 Bebidas</label>

          <input type="radio" id="combos" name="aba" />
          <label htmlFor="combos">🔥 Combos</label>

          {/* PIZZAS */}
          <div className="conteudo pizzas">
            <h2>🍕 Pizzas Tradicionais</h2>

            <div className="item">
              <div>
                <h3>🍅 Margherita</h3>
                <p>Molho de tomate, mussarela, tomate e manjericão.</p>
              </div>
              <span>R$ 39,90</span>
            </div>

            <div className="item">
              <div>
                <h3>🧀 Quatro Queijos</h3>
                <p>Mussarela, provolone, parmesão e catupiry.</p>
              </div>
              <span>R$ 44,90</span>
            </div>

            <div className="item">
              <div>
                <h3>🥓 Bacon</h3>
                <p>Mussarela, bacon crocante, tomate e orégano.</p>
              </div>
              <span>R$ 42,90</span>
            </div>

            <div className="item">
              <div>
                <h3>🍗 Frango com Catupiry</h3>
                <p>Frango desfiado, mussarela e catupiry cremoso.</p>
              </div>
              <span>R$ 43,90</span>
            </div>

            <div className="item">
              <div>
                <h3>🌽 Milho com Bacon</h3>
                <p>Mussarela, milho, bacon e orégano.</p>
              </div>
              <span>R$ 41,90</span>
            </div>

            <div className="item">
              <div>
                <h3>🥩 Calabresa</h3>
                <p>Calabresa fatiada, cebola, mussarela e orégano.</p>
              </div>
              <span>R$ 39,90</span>
            </div>
          </div>

          {/* PIZZAS DOCES */}
          <div className="conteudo doces">


            <h2>🍫 Pizzas Doces</h2>

            <div className="item">
              <div>
                <h3>🍫 Chocolate</h3>
                <p>Chocolate ao leite e chocolate branco.</p>
              </div>
              <span>R$ 38,90</span>
            </div>

            <div className="item">
              <div>
                <h3>🍓 Morango com Chocolate</h3>
                <p>Chocolate cremoso, morangos frescos e leite condensado.</p>
              </div>
              <span>R$ 42,90</span>
            </div>

            <div className="item">
              <div>
                <h3>🍌 Banana com Canela</h3>
                <p>Banana, açúcar, canela e leite condensado.</p>
              </div>
              <span>R$ 37,90</span>
            </div>
          </div>

          {/* BEBIDAS */}
          <div className="conteudo bebidas">
            <h2>🥤 Bebidas</h2>

            <div className="item">
              <div>
                <h3>🥤 Coca-Cola 2L</h3>
                <p>Refrigerante Coca-Cola tradicional.</p>
              </div>
              <span>R$ 12,00</span>
            </div>

            <div className="item">
              <div>
                <h3>🥤 Guaraná 2L</h3>
                <p>Refrigerante Guaraná Antarctica.</p>
              </div>
              <span>R$ 10,00</span>
            </div>

            <div className="item">
              <div>
                <h3>💧 Água Mineral</h3>
                <p>Água mineral sem gás 500ml.</p>
              </div>
              <span>R$ 4,00</span>
            </div>

            <div className="item">
              <div>
                <h3>🧃 Suco Natural</h3>
                <p>Laranja, maracujá ou abacaxi.</p>
              </div>
              <span>R$ 8,00</span>
            </div>
          </div>

          {/* COMBOS */}
          <div className="conteudo combos">
            <h2>🔥 Combos Especiais</h2>

            <div className="item">
              <div>
                <h3>🍕 Combo Família</h3>
                <p>1 pizza grande + 1 refrigerante 2L.</p>
              </div>
              <span>R$ 49,90</span>
            </div>

            <div className="item">
              <div>
                <h3>🍕 Combo Casal</h3>
                <p>1 pizza média + 1 refrigerante 1L.</p>
              </div>
              <span>R$ 42,90</span>
            </div>

            <div className="item">
              <div>
                <h3>🍕 Combo Completo</h3>
                <p>1 pizza grande + refrigerante 2L + pizza doce pequena.</p>
              </div>
              <span>R$ 69,90</span>
            </div>
          </div>

        </div>

        <div className="pedido">
          <h2>📲 Faça seu pedido!</h2>
          <p>
            Escolha seus sabores favoritos e peça agora mesmo.
          </p>
          <button>🛵 Pedir Agora</button>
        </div>

      </div>
    </div>
  );
}
