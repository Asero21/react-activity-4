
import RootLayout from "./shared/components/Layouts/RootLayout";
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/Cars';
import ContactUsPage from './pages/ContactUs';

const App = () => {
  return (

    <RootLayout>
       
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/Cars" element={<AboutPage />} />
          <Route path="/ContactUs" element={<ContactUsPage />} />
        </Routes>
    
    </RootLayout>

  );
}

export default App;
