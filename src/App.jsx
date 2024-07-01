import './index.css'
import Header from "./Components/Header"
import About  from './Components/About'
import ResCointainer from './Components/ResCointainer'
import Contact from './Components/Contact'
import {Outlet, RouterProvider, createBrowserRouter,} from 'react-router-dom'
import ResDetails from './Components/ResDetails'
//import { useEffect } from 'react'
//import { useState } from 'react'

// const Counter =()=>{
//   const [count, setCount] = useState(1) //('args') args = default value
//   console.log(count)
//   const increment=()=>{
//     setCount(count+1)
//   }
//   const decrement=()=>{
//     setCount(count-1)
//   }
//   return(
//     <>
//     <h3>Count: {count}</h3>
//     <button onClick={increment}>Increment: +</button>
//     <br />
//     <br />
//     <button onClick={decrement}>Decrement: -</button>
//     </>
//   )
// }

const Home =()=>{
    return (
    <>
    <Header/>
    <br />
    <br />
    <Outlet/>
    
    </>
    )
}
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        children:[
            {
            path: '/',
            element: <ResCointainer/>
        },
            {
                path: "about",
                element: <About/>
        },
            {
                path: "contact",
                element: <Contact/>
        },
            {
                path: "restaurants/:id",
                element: <ResDetails/>
        }]
    }
])
const App = ()=>{
    return(
        <RouterProvider router={router}/>
    )
}
export default App