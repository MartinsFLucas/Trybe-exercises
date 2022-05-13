import React from "react";

const conteudos = [
  {
    conteudo: "High Order Functions",
    bloco: 8,
    status: "Aprendido",
  },
  {
    conteudo: "Composicao de Componentes",
    bloco: 11,
    status: "Aprendendo",
  },
  {
    conteudo: "Composicao de Estados",
    bloco: 12,
    status: "Aprenderei",
  },
  {
    conteudo: "Redux",
    bloco: 16,
    status: "Aprenderei",
  },
];

class Content extends React.Component {
  render() {
    return (
      <div className="content">
        {conteudos.map((item) => (
          <div key={item.conteudo} className="card">
            <p>
              <b>O conteúdo é: </b>
              {item.conteudo}
              <br />
              <b>Status: </b>
              {item.status} <br />
              <b>Bloco: </b>
              {item.bloco}
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default Content;
