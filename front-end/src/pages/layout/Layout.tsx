import { Link, Outlet } from "react-router-dom";
import Header from "../header/Header";
interface Props {}
function Layout(props: Props) {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Layout;
