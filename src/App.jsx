import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import UpcomingRaces from './components/UpcomingRaces'
import Standings from './components/Standings'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app-root">
      <Header />
      <main className="app-main">
        <Hero />
        <UpcomingRaces />
        <Standings />
      </main>
      <Footer />
    </div>
  )
}

export default App
