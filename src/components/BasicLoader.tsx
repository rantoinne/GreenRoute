import './components.css';

type Props = {}

const BasicLoader = (props: Props) => {
  return (
    <div className="basic_loader-container">
      <p className="animate-bounce">Loading...</p>
    </div>
  );
};

export default BasicLoader