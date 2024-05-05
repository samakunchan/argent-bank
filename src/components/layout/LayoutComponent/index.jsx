import './index.scss';
import FooterComponent from '../FooterComponent';
import HeaderComponent from '../HeaderComponent';

const LayoutComponent = ({ children }) => {
  return (
    <>
      <HeaderComponent />
      {children}
      <FooterComponent />
    </>
  );
};

export default LayoutComponent;
