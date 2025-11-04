import About from "./components/About"
import Carousel from "./components/Carousel"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ScrollButton from "./components/ScrollButton"
import { useContext, useEffect, useRef } from "react"
import IntersectionContext from "./contexts/IntersectionContext"
// https://templatemo.com/live/templatemo_595_3d_coverflow


function App() {
  const { addEntry } = useContext(IntersectionContext);
  const sectionsRef = useRef([]);

  useEffect(() => {
    console.log(sectionsRef.current);
    sectionsRef.current.forEach(ref => addEntry(ref));
  }, [sectionsRef, addEntry]);

  return (
    <>
      <Header />
      <main>
        <Carousel obserArray={sectionsRef.current} />
        <About obserArray={sectionsRef.current} />
        <ScrollButton obserArray={sectionsRef.current} />
      </main>
      <Footer />
    </>
  )
}

export default App
