import {
  About,
  Contact,
  Footer,
  Header,
  Hero,
  Benifits,
  Testimon,
  Trending,
  MbileMenu,
} from "./components";
import "./App.css";
function App() {
  return (
    <div className="md:mt-24">
      <Header />
      <Hero />
      <Benifits />

      <Trending />
      <Testimon />
      <About />
      <Contact />
      <Footer />
      <MbileMenu />
    </div>
  );
}

export default App;
