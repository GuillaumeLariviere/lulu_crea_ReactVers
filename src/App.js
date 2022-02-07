
import './App.css';
import BaseScreen from './screens/BaseScreen';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseScreen/>} >
          <Route index 
                element={<HomeScreen/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
