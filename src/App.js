
import './App.css';
import "./helpers/string.helpers";
import BaseScreen from './screens/BaseScreen';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductDetailsScreen from './screens/ProductDetailsScreen';
import ContactScreen from './screens/ContactScreen';

function App() {
  return (
<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseScreen/>} >
          <Route index element={<HomeScreen/>} />
          <Route path="/productsdetails/:id" element={<ProductDetailsScreen/>}/>
          <Route path="/contact" element={<ContactScreen/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
