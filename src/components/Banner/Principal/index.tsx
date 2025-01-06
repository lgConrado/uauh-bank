import Logo from "../../../assets/logo-azul-escuro-bank.svg";
import BannerPrincipal from "../../../assets/modelo01.png";

const BannerBankPrincipal = () => {

  return (
    <section className="banner--b--principal" id="banner--b--principal">
      <div className="banner--b--principal__logo">
      <img src={Logo} alt="" />
      </div>
      <div className="banner--b--principal__content">
        <div className="banner--b--principal__content__texts">
          <h1 className="heading--b--primary">
            <span>
              Bem-vindo(a) <br />
              ao
            </span>{" "}
            UAUH Bank!
          </h1>
          <h2 className="heading--b--secondary">
            Sinta a diferença de ter um <br />
            banco que <b>entenda as suas necessidades.</b>
          </h2>
        </div>
        <img
          src={BannerPrincipal}
          className="banner--b--principal__content__ilustracao"
        />
      </div>
      <div className="banner--b--principal__figure" />
    </section>
  );
};

export default BannerBankPrincipal;
