import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav
            style={{
                backgroundColor: '#4a3f35',
                padding: '1em 0',
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
            }}
        >
            <ul
                style={{
                    listStyle: 'none',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '2rem',
                    margin: 0,
                    padding: 0,
                }}
            >
                <li><Link to="/" style={linkStyle}>Ana Sayfa</Link></li>
                <li><Link to="/kamp" style={linkStyle}>Kamp Ürünleri</Link></li>
                <li><Link to="/antika" style={linkStyle}>Antika Ürünler</Link></li>
                <li><Link to="/hakkimizda" style={linkStyle}>Hakkımızda</Link></li>
                <li><Link to="/iletisim" style={linkStyle}>İletişim</Link></li>
            </ul>
        </nav>
    )
}

const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1.1rem',
}
