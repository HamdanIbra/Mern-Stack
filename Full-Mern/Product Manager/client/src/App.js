import './App.css';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';
import {Routes,Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route element={<Main/>} path="/" exact/>
        <Route element={<Detail/>} path="/product/:id" exact/>
        <Route element={<Update/>} path="/product/:id/edit" exact/>
      </Routes>
      
    </div>
  );
}

export default App;
