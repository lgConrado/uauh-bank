import BannerBankBeneficios from "../../components/Banner/Beneficios";
import BannerBankContaDigital from "../../components/Banner/ContaDigital";
import BannerBankEmprestimoConsignado from "../../components/Banner/EmprestimoConsignado";
import BannerBankPrincipal from "../../components/Banner/Principal";
import { useEffect } from "react";
import FooterBank from "../../components/Footer";
import CookieBanner from "../../components/Cookie";

const Bank = () => {
  useEffect(() => {
    const scrollToBannerPrincipal = () => {
      const element = document.getElementById("banner--b--principal");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("load", scrollToBannerPrincipal);

    return () => {
      window.removeEventListener("load", scrollToBannerPrincipal);
    };
  }, []);
  return (
    <>
      <main className="main">
        <div>
          <CookieBanner/>
          <BannerBankPrincipal />
          <BannerBankContaDigital />
          <BannerBankBeneficios />
          <BannerBankEmprestimoConsignado />
        </div>
      </main>
      <FooterBank />
    </>
  );
};

export default Bank;
