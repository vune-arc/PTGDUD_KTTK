import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainLayout from './components/MainLayout'
function App() {
  const [count, setCount] = useState(0)

  return (
  
    <div className="flex min-h-screen h-[80vh]">
    <MainLayout/>
    </div>
      
    
  )
}
export default App;