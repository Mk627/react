import { Outlet } from "react-router"
import Header from "./Header"

const RouteLayOut = () => {
  return (
    <>

      <Header />
      <Outlet />


    </>
  )
}
export default RouteLayOut