import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from './components/Model';
import * as Sentry from "@sentry/react";
import Features from "./components/Features";
import ProChip from "./components/ProChip";
import Footer from "./components/Footer";

const App = () => {

  // return <button onClick={() => methodDoesNotExist()}>Break the world</button>;
  
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <ProChip />
      <Footer />
    </main>
  )
}

export default Sentry.withProfiler(App);
