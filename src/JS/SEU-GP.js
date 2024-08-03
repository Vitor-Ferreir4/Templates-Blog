import React from "react"
import '../CSS/SEU-CSS.css'


    {/* ESSE FOOTER SERVE APENAS A CONTRUCAO DA PAGINA DE VCS, O FOOTER MESMO SE TRATA DO OUTRO JS!!! NAO MEXAM NO OUTRO JS!!!!!!!! */}
    {/* NAO SE ESQUECAM DE USAR AS MEDIAS QUERRIES!!!!!! */}



function SEU_GP(){
    return(
        <div className="GP">
        <header className="gp-header">
          <h1>COLOQUE SEU CONTEÚDO AQUI E NÃO ALTERE A NAVBAR NEM O FOOTER!!!</h1>
          <p>COLOQUE SEU CONTEÚDO AQUI E NÃO ALTERE A NAVBAR NEM O FOOTER!!!</p>
        </header>
        <div className="gp-content">
          <div className="gp-midia">
            <iframe
              width="560" 
              height="315" 
              src={require(`../midia/pikachu.mp4`)}
              title="YouTube video" 
              allowFullScreen
            ></iframe>
          </div>
          <p>
            troque o iframe por uma imagem caso nao seja do gp de animacao
            <br /><br />
            COLOQUE SEU CONTEÚDO AQUI E NÃO ALTERE A NAVBAR NEM O FOOTER!!!
          </p>
          <ul>
            <li>COLOQUE SEU CONTEÚDO AQUI E NÃO ALTERE A NAVBAR NEM O FOOTER!!!</li>
            <li>COLOQUE SEU CONTEÚDO AQUI E NÃO ALTERE A NAVBAR NEM O FOOTER!!!</li>
          </ul>
          <h2>COLOQUE SEU CONTEÚDO AQUI E NÃO ALTERE A NAVBAR NEM O FOOTER!!!</h2>
          <p>
            COLOQUE SEU CONTEÚDO AQUI E NÃO ALTERE A NAVBAR NEM O FOOTER!!!
            COLOQUE SEU CONTEÚDO AQUI E NÃO ALTERE A NAVBAR NEM O FOOTER!!!
            <br /><br />
            COLOQUE SEU CONTEÚDO AQUI E NÃO ALTERE A NAVBAR NEM O FOOTER!!! 
          </p>
          <a href="#readmore" className="gp-readmore">Leia mais</a>
        </div>
        <footer className="gp-footer">
          <div className="footer-item">
            <img src={require('../midia/kirby.gif')} />
            <p>COLOQUE SEU CONTEÚDO AQUI E NÃO ALTERE A NAVBAR NEM O FOOTER!!!</p>
          </div>
          <div className="footer-item">
            <img src={require('../midia/Kirby2.gif')} />
            <p>COLOQUE SEU CONTEÚDO AQUI E NÃO ALTERE A NAVBAR NEM O FOOTER!!!</p>
          </div>
        </footer>
      </div>

    )
}

export default SEU_GP


