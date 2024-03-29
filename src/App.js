import "./App.css";
import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";

function App() {
  function hackerEffect(e) {
    let iterations = 0;
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const interval = setInterval(() => {
      e.target.innerText = e.target.innerText
        .split("")
        .map((letter, i) =>
          i < iterations
            ? e.target.dataset.value[i]
            : letters[Math.floor(Math.random() * 26)]
        )
        .join("");
      if (iterations >= e.target.dataset.value.length) clearInterval(interval);

      iterations += 1 / 2;
    }, 30);
  }
  return (
    <div className="App">
      <NavBar hackerEffect={hackerEffect} />
      <Banner hackerEffect={hackerEffect} />
      <Skills hackerEffect={hackerEffect} />
      <Projects hackerEffect={hackerEffect} />
      <Contact hackerEffect={hackerEffect} />
      <Footer />
    </div>
  );
}

export default App;
