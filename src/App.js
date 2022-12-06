import logo from './logo.svg'
import './App.css'
import './styles/scrollbar.css'

import Seo from './components/Seo'

import Navbar from './components/Navbar'
import Header from './components/Header'
import Achievements from './components/Achievements'
import Step from './components/Step'
import Call from './components/Call'
import Team from './components/Team'
import Legend from './components/Legend'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Seo/>
      <Navbar/>
      <Header/>
      <Step/>
      <Achievements/>
      <Legend/>
      <Team/>
      <Call/>
      <Footer/>
    </div>
  );
}

export default App;
