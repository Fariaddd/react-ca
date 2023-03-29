import { useSelector } from "react-redux";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import Loader from "./components/shared/Loader";
import Router  from "./routes/Router";

function App() {
  const {isLoading} = useSelector(state => state.loader)
  return (
    <>
      <Header/>
      <Router/>
      {isLoading && <Loader /> }
      <Footer/>
    </>
  )
}
export default App;