import Routes from "./Routes/Routes"
import "./fonts/fonts.scss"
import "./App.css"
import Profile from "./Components/Profile"
import Header from "./Components/Header"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <main className="container">
        <div className="row">
          <div className="col-4">
            <Profile />
          </div>
          <Routes />
        </div>
        
      </main>
      <Footer/>
    </>
  )
}

export default App
