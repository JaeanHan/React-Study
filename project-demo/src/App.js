import FooterJong from "./components/footer/FooterJong";
import FooterJae from "./components/footer/footerModified/FooterJae";
import Header from "./components/header/Header";
import Modal from "./components/modal/Modal";

function App() {
  return (
    <div className="App" style={{ width: "100%", height: "100vh" }}>
      <Header />
      <FooterJong />
      <FooterJae />
    </div>
  );
}

export default App;
