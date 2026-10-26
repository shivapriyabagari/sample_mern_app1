import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Adminlogin from './pages/Adminlogin'
import Adminhome from './pages/Adminhome'
import { Routes, Route } from 'react-router-dom'
import register from './pages/register'

function App() {
  return (
    <div>
      <Header />

      <h1>My First Website</h1>
      <h3>Here you will get to know about...</h3>
      <h2>Created by Shivapriya</h2>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/adminlogin" element={<Adminlogin />} />
        <Route path="/adminhome" element={<Adminhome />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App