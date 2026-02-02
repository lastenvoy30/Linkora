import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="app-container">
        <Sidebar></Sidebar>
        <div className="content">
          <Header></Header>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App;
