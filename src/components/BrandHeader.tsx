import ImageLinks from '../utils/imageLinks';
import './components.css';

type Props = {}

const BrandHeader = (props: Props) => {
  return (
    <div className="brand_header-container">
      <img
        alt="brand-logo"
        src={ImageLinks.brandLogo}
        className="brand_header-logo"
      />
    </div>
  );
};

export default BrandHeader;
