import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav style={{ backgroundColor: '#4a3f35', padding: '1em' }}>
            <ul style={{ display: 'flex', justifyContent: 'center', listStyle: 'none', gap: '1.5em' }}>
                <li><Link style={{ color: 'white', textDecoration: 'none' }} to="/">Ana Sayfa</Link></li>
                <li><Link style={{ color: 'white', textDecoration: 'none' }} to="/kamp">Kamp Ürünleri</Link></li>
                <li><Link style={{ color: 'white', textDecoration: 'none' }} to="/antika">Antika Ürünler</Link></li>
                <li><Link style={{ color: 'white', textDecoration: 'none' }} to="/hakkimizda">Hakkımızda</Link></li>
                <li><Link style={{ color: 'white', textDecoration: 'none' }} to="/iletisim">İletişim</Link></li>
            </ul>
        </nav>
    )
}
