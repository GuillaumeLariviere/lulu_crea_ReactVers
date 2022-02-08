
import './App.css';
import BaseScreen from './screens/BaseScreen';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductDetailsScreen from './screens/ProductDetailsScreen';

function App() {
  return (
<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseScreen/>} >
          <Route index element={<HomeScreen/>} />
          <Route path="/productsdetails/:id" element={<ProductDetailsScreen/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
