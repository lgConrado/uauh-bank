import { Outlet } from "react-router-dom";
import FooterBank from "../../components/Footer";

const Default = () => {
  return (
    <>
      <Outlet />
      <FooterBank />
    </>
  );
};

export default Default;
