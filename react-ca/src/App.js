import { useSelector } from "react-redux";
import Loader from "./components/shared/Loader";
import Router  from "./routes/Router";

function App() {
  const {isLoading} = useSelector(state => state.loader)
  return (
    <>
      <Router/>
      {isLoading && <Loader /> }
      
    </>
  )
}
export default App;