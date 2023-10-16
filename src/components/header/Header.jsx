import Banner from "../common/Banner"
import Navbar from "../navbar/Navbar"

const Header = () => {
  return (
    <>
      <header className="header">
        <Navbar />
        <Banner />
      </header>
    </>
  )
}

export default Header
