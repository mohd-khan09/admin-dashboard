import { Space } from "antd";
import "./App.css";
//import AppHeader from "./components/AppHeader/Index";
import SideMenu from "./components/SideMenu/Index";
import PageContent from "./components/PageContent/Index";
import AppFooter from "./components/AppFooter/Index";
import AppHeader from "./components/AppHeader/Index";

function App() {
  return (
    <div className="App">
      <AppHeader/>
      <div className="SideMenuAndPageContent">
        <SideMenu></SideMenu>
        <PageContent></PageContent>
      </div>
      <AppFooter />
    </div>
  );
}

export default App;
