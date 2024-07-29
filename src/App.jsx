
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { createContext, useState } from 'react'

export  const FilterByInputValue = createContext(null);

function App() {
  
  const [inputValue, setInputValue] = useState("");
  function filterFun(input) {
    setInputValue(input);
  }

  return (
    <FilterByInputValue.Provider value={{inputValue,filterFun}}>
      <div className=" max-w-5xl mx-auto">
        <Header></Header>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </FilterByInputValue.Provider>
  )
}

export default App
