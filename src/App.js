import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import LinkTask1 from './Components/React/Home_Rental/linkAPP';
// import Property from './Components/React/Home_Rental/Property/Property';
import Newtask from './Components/React/Newtask/linkapp';


function App() {
  return <Newtask />
  // return <BrowserRouter>
  //   <Routes>
  //     <Route path='/' element={<LinkTask1 />} />
  //     <Route path='/property/:type' element={<Property />} />
  //   </Routes>
  // </BrowserRouter>


}
export default App;
