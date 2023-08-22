import { Link, Outlet } from "react-router-dom";
import Header from "../navigation/Navigation";
import './Layout.css'
interface Props {}
function Layout(props: Props) {
  return (
    <>
      <div className="layout">
        <div className="header">
          <Header />
        </div>
        <div className="body">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Layout;
