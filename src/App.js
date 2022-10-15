import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import FoodOrder from './Pages/FoodOrder/FoodOrder';
import Menu from './Pages/Dashboard/Menu/Menu';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<Menu/>}></Route>
          <Route path='order' element={<FoodOrder />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
