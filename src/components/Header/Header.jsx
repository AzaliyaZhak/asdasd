import "./Header.css"

const Header = (props) => {
  return (
    <header className="header">
      <h1 className="title">Todos ({props.compleated} / {props.length})</h1>
    </header>
  );
};

export default Header;
