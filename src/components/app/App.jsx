import './App.css';
import '@fontsource/montserrat';
import '@fontsource/nunito';
import { Routes, Route } from 'react-router-dom';

import Header from '../../widgets/Header/Header';
import Footer from '../../widgets/Footer/Footer';


import Main from '../Main/Main';
import ProductionPage from '../../pages/ProductionPage/ProductionPage';
import ServicesPage from '../../pages/ServicesPage/ServicesPage';
import ServicePage from '../../pages/ServicePage/ServicePage';
import ContactsPage from '../../pages/ContactsPage/ContactsPage';
import ManipulatorsPage from '../../pages/Manipulators/ManipulatorsPage';
import ControlPanelsPage from '../../pages/ControlPanelsPage/ControlPanelsPage';
import RobotsComplexPage from '../../pages/RobotsComplexPage/RobotsComplexPage';
import RetrofittingPage from '../../pages/RetrofittingPage/RetrofittingPage';
import AccessoriesPage from '../../pages/AccessoriesPage/AccessoriesPage';
import SubscriptionPage from '../../pages/SubscriptionPage/SubscriptionPage';
import RentPage from '../../pages/RentPage/RentPage';
import LeasingPage from '../../pages/LeasingPage/LeasingPage';
import EquippingPage from '../../pages/EquippingPage/EquippingPage';
import TornadoPage from '../../pages/TornadoPage/TornadoPage';
import TyphoonPage from '../../pages/TyphoonPage/Typhoon';
import OkoPage from '../../pages/OkoPage/OkoPage';
import {ScrollToTop} from "../../helpers/ScrollToTop/ScrollToTop";


const App = () => {
	return (
		 <div className="app">
			 <Header />
			 <ScrollToTop/>
			 <Routes>
				 <Route path="/" element={<Main />} />
				 <Route path="/production" element={<ProductionPage />} />
				 <Route path="/services" element={<ServicesPage />} />
				 <Route path="/service" element={<ServicePage />} />
				 <Route path="/contacts" element={<ContactsPage />} />
				 <Route path="/manipulators" element={<ManipulatorsPage />} />
				 <Route path="/panels" element={<ControlPanelsPage />} />
				 <Route path="/robots" element={<RobotsComplexPage />} />
				 <Route path="/retrofitting" element={<RetrofittingPage />} />
				 <Route path="/accessories" element={<AccessoriesPage />} />
				 <Route path="/subscription" element={<SubscriptionPage />} />
				 <Route path="/rent" element={<RentPage />} />
				 <Route path="/leasing" element={<LeasingPage />} />
				 <Route path="/equipping" element={<EquippingPage />} />
				 <Route path="/tornado" element={<TornadoPage />} />
				 <Route path="/typhoon" element={<TyphoonPage />} />
				 <Route path="/oko" element={<OkoPage />} />
			 </Routes>
			 <Footer />
		 </div>
	);
};

export default App;
