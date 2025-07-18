import './App.css';
import '@fontsource/montserrat';
import {Routes, Route} from 'react-router-dom';
import {Suspense, lazy} from 'react';

import Header from '../../widgets/Header/Header';
import Footer from '../../widgets/Footer/Footer';
import {ScrollToTop} from "../../helpers/ScrollToTop/ScrollToTop";
import Loading from "../Loading/Loading";
import DriveSystemsPage from "../../pages/DriveSystemsPage/DriveSystemsPage";
import PowerPartsPage from "../../pages/PowerPartsPage/PowerPartsPage";


const Main = lazy(() => import('../Main/Main'));
const ProductionPage = lazy(() => import('../../pages/ProductionPage/ProductionPage'));
const ServicesPage = lazy(() => import('../../pages/ServicesPage/ServicesPage'));
const ServicePage = lazy(() => import('../../pages/ServicePage/ServicePage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage/ContactsPage'));
const ManipulatorsPage = lazy(() => import('../../pages/Manipulators/ManipulatorsPage'));
const ControlPanelsPage = lazy(() => import('../../pages/ControlPanelsPage/ControlPanelsPage'));
const RobotsComplexPage = lazy(() => import('../../pages/RobotsComplexPage/RobotsComplexPage'));
const RetrofittingPage = lazy(() => import('../../pages/RetrofittingPage/RetrofittingPage'));
const AccessoriesPage = lazy(() => import('../../pages/AccessoriesPage/AccessoriesPage'));
const SubscriptionPage = lazy(() => import('../../pages/SubscriptionPage/SubscriptionPage'));
const RentPage = lazy(() => import('../../pages/RentPage/RentPage'));
const LeasingPage = lazy(() => import('../../pages/LeasingPage/LeasingPage'));
const EquippingPage = lazy(() => import('../../pages/EquippingPage/EquippingPage'));
const TornadoPage = lazy(() => import('../../pages/TornadoPage/TornadoPage'));
const TyphoonPage = lazy(() => import('../../pages/TyphoonPage/Typhoon'));
const OkoPage = lazy(() => import('../../pages/OkoPage/OkoPage'));

const App = () => {
	return (
		 <div className="app">
			 <Header/>
			 <ScrollToTop/>
			 <Suspense fallback={<Loading/>}>
			 <Routes>
				 <Route path="/" element={<Main/>}/>
				 <Route path="/production" element={<ProductionPage/>}/>
				 <Route path="/services" element={<ServicesPage/>}/>
				 <Route path="/service" element={<ServicePage/>}/>
				 <Route path="/contacts" element={<ContactsPage/>}/>
				 <Route path="/manipulators" element={<ManipulatorsPage/>}/>
				 <Route path="/panels" element={<ControlPanelsPage/>}/>
				 <Route path="/robots" element={<RobotsComplexPage/>}/>
				 <Route path="/retrofitting" element={<RetrofittingPage/>}/>
				 <Route path="/accessories" element={<AccessoriesPage/>}/>
				 <Route path="/subscription" element={<SubscriptionPage/>}/>
				 <Route path="/drive-systems" element={<DriveSystemsPage/>}/>
				 <Route path="/spare-parts" element={<PowerPartsPage/>}/>
				 <Route path="/rent" element={<RentPage/>}/>
				 <Route path="/leasing" element={<LeasingPage/>}/>
				 <Route path="/equipping" element={<EquippingPage/>}/>
				 <Route path="/tornado" element={<TornadoPage/>}/>
				 <Route path="/typhoon" element={<TyphoonPage/>}/>
				 <Route path="/oko" element={<OkoPage/>}/>
			 </Routes>
			 <Footer/>
			 </Suspense>
		 </div>
	);
};

export default App;
