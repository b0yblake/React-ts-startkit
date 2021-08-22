import Header from "../../../components/common/TheHeader";
import Footer from "../../../components/common/TheFooter";
import { Main } from "./styles";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};

export default MainLayout;
