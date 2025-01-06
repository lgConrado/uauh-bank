import notebook from "../../../assets/Notebook_LoginBank.png";
const BannerBankContaDigital = () => {
  
  return (
    <section className="banner--b--conta-digital" id="banner--conta-digital">
      <div className="banner--b--conta-digital__content">
        <img
          src={notebook}
          className="banner--b--conta-digital__content__ilustracao"
        />
        <div className="banner--b--conta-digital__content__texts">
          <h1 className="heading--b--primary">Conta Digital</h1>
          <h2 className="heading--b--secondary">
          Descubra a <b>praticidade e a segurança</b> de ter seu banco digital sempre ao seu alcance. Controle suas finanças, realize transações e aproveite todos os benefícios de uma experiência moderna, rápida e intuitiva, diretamente na palma da sua mão.
          </h2>
          <div className="banner--b--conta-digital__content__button">
            <a
              href="https://uauhbank.ib-front.cashway.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="button button--b--primary">
                Acessar conta
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerBankContaDigital;
