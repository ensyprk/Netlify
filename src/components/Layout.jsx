import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../styles/Layout.css';

const Layout = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProductsOpen, setIsProductsOpen] = useState(false);

    // React Router'dan mevcut konumu (URL) almak için kullanılır
    const location = useLocation();

    /**
     * --- ROTA DEĞİŞİKLİĞİ EFEKTİ ---
     * Bu useEffect, `location.pathname` (yani URL'in yolu) her değiştiğinde çalışır.
     * Bu sayede, kullanıcı menü içindeki bir linke tıklayarak yeni bir sayfaya geçtiğinde,
     * 'closeAllMenus' fonksiyonu çağrılır ve tüm açık menüler (Ürünler dahil) otomatik olarak kapanır.
     * Sorununuzu çözen ana mekanizma budur.
     */
    useEffect(() => {
        closeAllMenus();
    }, [location.pathname]);

    // Hem mobil menüyü hem de ürünler menüsünü kapatan fonksiyon
    const closeAllMenus = () => {
        setIsMenuOpen(false);
        setIsProductsOpen(false);
    };

    // Sadece ürünler menüsünü açıp kapatır
    const toggleProducts = (e) => {
        e.stopPropagation(); // Diğer tıklama olaylarının tetiklenmesini engeller
        setIsProductsOpen(!isProductsOpen);
    };

    // Mobil hamburger menüsünü açıp kapatır
    const toggleHamburgerMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        // Hamburger menüsü açılırken ürünler menüsü kapalı olmalı
        if (!isMenuOpen) {
            setIsProductsOpen(false);
        }
    };

    return (
        <div className="layout">
            <header className="header">
                <div className="header-container">
                    <div className="logo">
                        {/* Logo'ya tıklandığında da menüler kapanır */}
                        <NavLink to="/" onClick={closeAllMenus}>Kampköse</NavLink>
                    </div>

                    <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
                        <ul>
                            <li>
                                <NavLink to="/" onClick={closeAllMenus}>Ana Sayfa</NavLink>
                            </li>
                            <li>
                                <NavLink to="/hakkimizda" onClick={closeAllMenus}>Hakkımızda</NavLink>
                            </li>
                            <li className={`dropdown ${isProductsOpen ? 'open' : ''}`}>
                                <button className="dropdown-toggle" onClick={toggleProducts}>
                                    Ürünler
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        {/* Bu linklere tıklandığında useEffect tetiklenir ve menü kapanır */}
                                        <NavLink to="/urunler/aqua-marine" onClick={closeAllMenus}>Aqua Marine</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/urunler/bicaklar" onClick={closeAllMenus}>Bıçaklar</NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <NavLink to="/iletisim" onClick={closeAllMenus}>Bize Ulaşın</NavLink>
                            </li>
                        </ul>
                    </nav>

                    <button
                        className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`}
                        onClick={toggleHamburgerMenu}
                        aria-label="Menüyü aç/kapat"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </header>

            <main className="main-content">{children}</main>

            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} Kampköse. Tüm hakları saklıdır.</p>
            </footer>
        </div>
    );
};

export default Layout;