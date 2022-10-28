import { Link } from "react-router-dom";
import { Logo } from "../../components/index";

const Landing = () => {
  return (
    <div>
      <Logo />
      Landing Page
      <Link to="/register">Login / Register</Link>
    </div>
  );
};

export default Landing;
