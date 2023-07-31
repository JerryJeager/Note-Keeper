import { RouterProvider, createRoutesFromElements, Route, createBrowserRouter } from "react-router-dom"
import store from './Redux/store'
import { Provider } from 'react-redux'
import Layout from "./Layout"
import Home from "./pages/Home"
import Login from "./pages/Login"
import MyNotes from "./pages/MyNotes"
import CreateNote from "./pages/CreateNote"

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={ <Layout />} >
          <Route index element={ < Home />} />
          <Route path="/Login" element={ <Login />} />
          <Route path="/MyNotes" element={ < MyNotes /> } />
          <Route path="/CreateNote" element={ < CreateNote /> } />
      </Route>
    </>

    )
  )

  return (
    <Provider store={store} >
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
