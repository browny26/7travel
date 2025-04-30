import "./App.css";
import Container from "./components/Container";
import DateChecker from "./components/DateChecker";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Container>
        <header>
          <Navbar />
        </header>
      </Container>
      <main className="relative">
        <h1 className="absolute top-5 left-1/2 -translate-x-1/2 w-full font-barlow uppercase font-black text-[250px] text-center">
          enjoy nature
        </h1>
        <img
          src="pexels-pixabay-355747.jpg"
          alt="mountain"
          className="w-full object-cover opacity-0"
        ></img>
        <img
          src="pexels-pixabay-355747-Photoroom.png"
          alt="mountain"
          className="w-full object-cover absolute bottom-20"
        ></img>
        <DateChecker />
      </main>
    </>
  );
}

export default App;
