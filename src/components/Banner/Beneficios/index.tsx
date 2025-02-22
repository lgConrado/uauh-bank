import beneficios from "./beneficios.json";
import bancoParceiro from "../../../assets/ilustracao-banco-parceiro.png";
import semBurocracia from "../../../assets/ilustracao-sem-burocracia.png";
import equipeComprometida from "../../../assets/ilustracao-equipe-comprometida.png";
import solucoesComprometidas from "../../../assets/ilustracao-solucoes-financeiras.png";

interface IBeneficio {
  id: string;
  conteudo: string;
}

const BannerBankBeneficios = () => {
  const cardBeneficio = (id: string) => {
    switch (id) {
      case "banco-parceiro":
        return (
          <img
            src={bancoParceiro}
            className="banner--b--beneficios__content__card__ilustracao"
          />
        );
      case "sem-burocracia":
        return (
          <img
            src={semBurocracia}
            className="banner--b--beneficios__content__card__ilustracao"
          />
        );
      case "equipe-comprometida":
        return (
          <img
            src={equipeComprometida}
            className="banner--b--beneficios__content__card__ilustracao"
          />
        );
      case "solucoes-financeiras":
        return (
          <img
            src={solucoesComprometidas}
            className="banner--b--beneficios__content__card__ilustracao"
          />
        );
    }
  };
  return (
    <section className="banner--b--beneficios" id="banner--beneficios">
      <div className="banner--b--beneficios__content">
        {beneficios.map((beneficio: IBeneficio, index) => {
          return (
            <div className="banner--b--beneficios__content__card" key={index}>
              {cardBeneficio(beneficio.id)}
              <p
                dangerouslySetInnerHTML={{
                  __html: beneficio.conteudo,
                }}
                className="banner--b--beneficios__content__card__conteudo"
              />
            </div>
          );
        })}
      </div>
      
    </section>
  );
};

export default BannerBankBeneficios;
