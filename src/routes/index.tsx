import { Route, Routes } from "react-router-dom";
import Bank from "../pages/Bank";
import PoliticaBank from "../pages/Bank/Politica";
import TermoUso from "../pages/Bank/TermoUso";
import QuemSomosBank from "../pages/Bank/QuemSomos";
import EticaECompliance from "../pages/Bank/EticaCompliance";

const Rotas = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<CookieBanner/>} /> */}
      <Route path="/" element={<Bank/>} />
      <Route path="/bank/politica-privacidade" element={<PoliticaBank/>} />
      <Route path="/bank/termo-uso" element={<TermoUso />} />
      <Route path="/bank/etica-compliance" element={<EticaECompliance />} />
      <Route path="/bank/quem-somos" element={<QuemSomosBank />} />
    </Routes>
  );
};

export default Rotas;