import { Route, Routes } from 'react-router-dom';
import MainLayout from './Components/Layouts/MainLayout';
import Home from './Components/Pages/Home/Home';
import Shop from './Components/Pages/Shop/Shop';
import Register from './Components/Pages/Register/Register';
import Detail from './Components/Pages/Detail/Detail';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout child={<Home />} />} />
      <Route path='/shop' element={<MainLayout child={<Shop />} />}/>

      <Route path='/sign-up' element={<MainLayout child={<Register />} />}/>

      <Route path='/detail/:slug_:id' element={<MainLayout child={<Detail />} />} />
    </Routes>
  );
}

export default App;
