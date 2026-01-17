
import './App.css';
import Hero from './Components/Hero';
import Banner from './Components/Banner';
import Animation from './Components/Animation';
import Dexkor from './Components/Dexkor';
import Third from './Components/Third';
import {Demo} from './Components/Demo';
import Customer from './Components/Customer';
import {Left} from './Components/Left';
import Right from './Components/Right';
import Revence from './Components/Revence';
import Dexy from './Components/Dexy';
import CustomersReportSection from './Components/CustomersReportSectio';
import TransformationCallSection from './Components/TransformationCallSection';
import FAQSection from './Components/FAQSection';
import SuiteDemoBanner from './Components/SuiteDemoBanner';
import Footer from './Components/Footer';
import Super from './Components/Super';
import Work from './Components/Work';
import Cta from './Components/Cta';
import Stars from './Components/Stars'; 
import Faq from './Components/Faq'; 
import Logo  from './Components/Logo';  
import Mainfooter from './Components/Mainfooter';
import PopupModal from "./Components/Pop";
import { useState } from 'react';
function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <div className="App">
      <Hero />
      <Banner/>
      <Cta openPopup={() => setIsPopupOpen(true)}/>
      <Logo/>
      <Dexkor openPopup={() => setIsPopupOpen(true)}/>
      <Third openPopup={() => setIsPopupOpen(true)}/>
      <Stars/>
      <Demo openPopup={() => setIsPopupOpen(true)}/>
      <Customer openPopup={() => setIsPopupOpen(true)}/>
      <Left openPopup={() => setIsPopupOpen(true)}/>
      <Right openPopup={() => setIsPopupOpen(true)}/>
      <Revence openPopup={() => setIsPopupOpen(true)}/>
      <Faq openPopup={() => setIsPopupOpen(true)}/>
      <Dexy openPopup={() => setIsPopupOpen(true)}/>
      <CustomersReportSection/>
      <TransformationCallSection openPopup={() => setIsPopupOpen(true)}/>
      <Super openPopup={() => setIsPopupOpen(true)} />
      <Work openPopup={() => setIsPopupOpen(true)}/>
      <FAQSection openPopup={() => setIsPopupOpen(true)}/>
      <SuiteDemoBanner openPopup={() => setIsPopupOpen(true)}/>
      <Footer/>
      <Mainfooter openPopup={() => setIsPopupOpen(true)}/>
      <PopupModal show={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
     
    </div>
    );
}

export default App;
