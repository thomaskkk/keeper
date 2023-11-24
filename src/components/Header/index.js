import "./Header.css";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function Header() {
  return (
    <header>
      <h1>
        <TipsAndUpdatesIcon />
        &nbsp;Keeper
      </h1>
    </header>
  );
}

export default Header;
