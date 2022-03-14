import { Route, Routes } from "react-router-dom";
import MainMenu from './components/MainMenu';

function App() {

  return (
    <Routes>
      <Route path="/" element={ <MainMenu/> }/>
    </Routes>
  );
}

export default App;
