import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Layout.css';

const Layout = ({ children }) => {
    const [isProductsOpen, setIsProductsOpen] = useState(false);

    return (
        <div className="layout">
            <header className="header">
                <div className="logo">
                    <Link to="/">Kampköse</Link>
                </div>
                <nav className="nav">
                    <ul>
                        <li>
                            <Link to="/">Ana Sayfa</Link>
                        </li>
                        <li>
                            <Link to="/hakkimizda">Hakkımızda</Link>
                        </li>
                        <li
                            onMouseEnter={() => setIsProductsOpen(true)}
                            onMouseLeave={() => setIsProductsOpen(false)}
                            className="dropdown"
                        >
                            <Link to="/urunler">Ürünler</Link>
                            {isProductsOpen && (
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link to="/urunler/aqua-marine">Aqua Marine</Link>
                                    </li>
                                    <li>
                                        <Link to="/urunler/bicaklar">Bıçaklar</Link>
                                    </li>
                                    {/* Diğer kategori bağlantıları buraya eklenebilir */}
                                </ul>
                            )}
                        </li>
                        <li>
                            <Link to="/iletisim">Bize Ulaşın</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className="main-content">{children}</main>
            <footer className="footer">
                <p>© 2023 Kampköse - Tüm hakları saklıdır.</p>
            </footer>
        </div>
    );
};

export default Layout;