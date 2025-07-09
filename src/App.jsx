import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Kamp from './pages/Kamp'
import Antika from './pages/Antika'
import Hakkimizda from './pages/Hakkimizda'
import Iletisim from './pages/Iletisim'

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/kamp" element={<Kamp />} />
                <Route path="/antika" element={<Antika />} />
                <Route path="/hakkimizda" element={<Hakkimizda />} />
                <Route path="/iletisim" element={<Iletisim />} />
            </Routes>
        </Router>
    )
}

export default App
