import './App.css';
import "./helpers/string.helpers";
import BaseScreen from './screens/BaseScreen';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductRefScreen from './screens/ProductRefScreen';
import ContactScreen from './screens/ContactScreen';
import { useContext } from 'react';
import { AuthContext } from './contexts/authContext';
import LogAndRegScreen from './screens/LogAndRegScreen';
import LogoutScreen from './screens/LogoutScreen';
import AccountScreen from './screens/AccountScreen';
import LuluCestQui from './screens/LuLuCestQui';

function App() {

  const {auth} = useContext(AuthContext);
  return (
<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseScreen/>} >
          <Route index element={<HomeScreen/>} />
          <Route path ="/LuLuCestQui" element ={<LuluCestQui/>}/>
          <Route path="/productsReference" element={<ProductRefScreen/>}/>
          <Route path="/contact" element={<ContactScreen/>}/>
          {auth.role === 0 && (
          <>
            <Route path ="/accountValidate" element={<AccountScreen toValidate/>}/>
            <Route path ="/login" element={<LogAndRegScreen isLogin/>}/>
            <Route path ="/register" element={<LogAndRegScreen isRegister/>}/>
          </>
          )}
          {auth.role > 0 &&(
            <>
              <Route path="/logout" element={<LogoutScreen/>}/>
              <Route path="/account" element={<AccountScreen yourAcc/>}/>
            </>
          )}

        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
