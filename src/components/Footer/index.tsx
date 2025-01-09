import Logo from "../../assets/logo-azul-bank.svg";

const FooterBank = () => {
  return (
    <footer className="footer footer--c">
      <div className="footer__content">
        <div className="footer__content__logo footer--b__logo">
            <img src={Logo} alt="" />
        </div>
        <div className="footer__content__lists">
          <div className="footer__content__list">
            <h4 className="heading--b--quaternary">Sobre nós</h4>
            <ul>
              <a
                href="/bank/etica-compliance"
                className="link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="text--cinza">Ética e Compilance</li>
              </a>
              <a
                href="/bank/politica-privacidade"
                className="link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="text--cinza">Política de privacidade</li>
              </a>
              <a
                href="/bank/termo-uso"
                className="link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="text--cinza">Termo de uso</li>
              </a>
              <a
                href="/bank/quem-somos"
                className="link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="text--cinza">Quem somos?</li>
              </a>
            </ul>
          </div>
          <div className="footer__content__list">
            <h4 className="heading--b--quaternary">Serviços</h4>
            <ul>
              <a href="https://uauh.com.br/" className="link">
                <li>Cartões benefícios</li>
              </a>
              <a href="/#banner--conta-digital" className="link">
                <li>Conta digital</li>
              </a>
              <a href="/#banner--emprestimo-consignado" className="link">
                <li>Empréstimo consignado</li>
              </a>
            </ul>
          </div>
          <div className="footer__content__list">
            <h4 className="heading--b--quaternary">Navegação</h4>
            <ul>
              <a href="/#banner--beneficios" className="link">
                <li>Benefícios</li>
              </a>
              <a href="/#banner--conta-digital" className="link">
                <li>Conta digital</li>
              </a>
              <a href="/#banner--emprestimo-consignado" className="link">
                <li>Empréstimo consignado</li>
              </a>
            </ul>
          </div>
          <div className="footer__content__list">
            <h4 className="heading--b--quaternary">Fale conosco</h4>
            <ul>
              <li className="text--cinza">0800 361 9000</li>
              <li className="text--cinza">+55 (44) 9.9185-8651</li>
              <li className="text--cinza">contasbank@uauh.com.br</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__banner footer--b__banner">
        Copyright &copy; 2024. Todos os direitos reservados.
        <br />
        <b>MH SOCIEDADE DE CREDITO DIRETO SA - CNPJ: 51.834.986/0001-36</b>
      </div>
    </footer>
  );
};

export default FooterBank;
