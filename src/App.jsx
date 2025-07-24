import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProductsPage from './pages/ProductsPage';
import AquaMarinePage from './pages/categories/AquaMarinePage';
import KnivesPage from './pages/categories/KnivesPage';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/hakkimizda" element={<AboutPage />} />
                    <Route path="/iletisim" element={<ContactPage />} />
                    <Route path="/urunler" element={<ProductsPage />} />
                    <Route path="/urunler/aqua-marine" element={<AquaMarinePage />} />
                    <Route path="/urunler/bicaklar" element={<KnivesPage />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;