import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route } from 'react-router-dom';
import Main from './views/Main'
import New from './views/New'
import Update from './views/Update'
function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <Routes>
        <Route element={<Main/>} path="/" exact/>
        <Route element={<New/>} path="/new" exact/>
        <Route element={<Update/>} path="/edit/:id" exact/>
      </Routes>
    </div>
  );
}

export default App;
