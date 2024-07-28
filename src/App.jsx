
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
      <div className=" max-w-5xl mx-auto">
        <Header></Header>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
