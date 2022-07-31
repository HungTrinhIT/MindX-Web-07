import { BsFillCartPlusFill } from "react-icons/bs";

const Header = (props) => {
  return (
    <header>
      <div className="logo">
        <h1>ReactMeals</h1>
      </div>
      <nav>
        <BsFillCartPlusFill />
        <span>Your cart</span>
        <span>{0}</span>
      </nav>
    </header>
  );
};

export default Header;
