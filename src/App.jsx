
import Body from "./Body"
import Forms from "./pages/Form"

import 'antd/dist/reset.css'; // for AntD v5

import { RouterContextProvider, RouterProvider,createBrowserRouter } from "react-router-dom"


function App() {
  const router=createBrowserRouter([
    {
      path:'',element:<Body/>
    },
    {
      path:'/form',element:<Forms/>
    }
  ])

  return (
  <>
<RouterProvider router={router}/>
  </>
  )
}

export default App
