import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../Context/Index";

const Navbar = () => {
  const { searchParam, setSearchParam, handleSubmit } = useGlobalContext();
  return (
    <nav
      style={{
        marginBottom: "15px",
      }}
    >
      <NavLink to={"/"} style={{ textDecoration: "none" }}>
        <h2>Food Recipe App</h2>
      </NavLink>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Search items"
          value={searchParam}
          onChange={(ev) => setSearchParam(ev.target.value)}
        />
      </form>
    </nav>
  );
};

export default Navbar;
