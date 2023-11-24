import { Outlet } from "react-router-dom";
import { Header, Footer } from "../index";

const BaseLayout = () => {
  return (
    <>
      <Header />
      <main className="overflow-y-hidden">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default BaseLayout
