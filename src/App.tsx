import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ImageSlider from './components/Slider';
import WhoWeAre from './components/WhoWeAre';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import AboutUs from './pages/AboutUs';
import Gallery from './pages/Gallery';
import ContactUs from './pages/ContactUs';
import DatchikIOTProduct from './pages/DatchikIOTProduct';
import DatchikSmartSolution from './pages/DatchikSmartSolution';
import CustomizedGasDetectorSeries from './pages/CustomizedGasDetectorSeries';
import SmartWatchPowerBank from './pages/SmartWatchPowerBank';
import PowerBank10000 from './pages/PowerBank10000';
import DatchikGame from './pages/DatchikGame';
import OrthopaedicHeatPadKit from './pages/OrthopaedicHeatPadKit';
import ElectricBodyMassager from './pages/ElectricBodyMassager';
import DatchikLightingProduct from './pages/DatchikLightingProduct';
import LEDCFL from './pages/LEDCFL';
import CeilingMountedConcealedLight from './pages/CeilingMountedConcealedLight';
import TubeLight from './pages/TubeLight';
import PanelLight from './pages/PanelLight';


function Home() {
  return (
    <>
      <ImageSlider />
      <WhoWeAre />
      <Services />
      <Testimonials />
      <ContactSection />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/products/datchik-iot-product" element={<DatchikIOTProduct />} />
        <Route path="/products/datchik-smart-solution" element={<DatchikSmartSolution />} />
        <Route path="/products/customized-gas-detector-series" element={<CustomizedGasDetectorSeries />} />
        <Route path="/products/smart-watch-power-bank" element={<SmartWatchPowerBank />} />
        <Route path="/products/power-bank-10000" element={<PowerBank10000 />} />
        <Route path="/products/datchik-game" element={<DatchikGame />} />
        <Route path="/products/orthopaedic-heat-pad-kit" element={<OrthopaedicHeatPadKit />} />
        <Route path="/products/electric-body-massager" element={<ElectricBodyMassager />} />
        <Route path="/products/datchik-lighting-product" element={<DatchikLightingProduct />} />
        <Route path="/products/led-cfl" element={<LEDCFL />} />
        <Route path="/products/ceiling-mounted-concealed-light" element={<CeilingMountedConcealedLight />} />
        <Route path="/products/tube-light" element={<TubeLight />} />
        <Route path="/products/panel-light" element={<PanelLight />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
