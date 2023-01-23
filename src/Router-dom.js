import "./Router-dom.css"
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from "./pages/Home"
import { Profile } from "./pages/Profile"
import { Contact } from "./pages/Contact"
import { Navbar } from "./Navbar"
import { useState, createContext } from "react"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export const AppContext = createContext()

function Routerdom() {

  const client = new QueryClient({defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    }
   }
  })
  // if false ? automatic refresh of the page is off.

  const [username, setUsername] = useState("00coding")

  return (
    <div className="Routerdom">
     <QueryClientProvider client={client}>
     <AppContext.Provider value={{username, setUsername}} >
      <Router>
        <Navbar />
        <Routes>

          <Route path="/" element=
          {<Home className="Home" />} />
          
          <Route path="/menu" element=
          {<Profile className="Profile" />} />
          
          <Route path="/contact" element=
          {<Contact className="Contact" />} />
          
          <Route path="*" element=
          { <h1>Page Not Found</h1> } />

        </Routes>
      </Router>
     </AppContext.Provider>
     </QueryClientProvider>
    </div>
  )
}

export default Routerdom