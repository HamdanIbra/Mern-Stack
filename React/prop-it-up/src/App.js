import './App.css';
import PersonCard from './components/PersonCard';
function App() {
  return (
    <div className="App">
      <PersonCard firstName={"Ibrahim"} lastName={"Hamdan"} age={26} color={"blonde"}/>
      <hr />
      <PersonCard firstName={"Yosef"} lastName={"Labadi"} age={29} color={"black"}/>
      <hr />
      <PersonCard firstName={"Lina"} lastName={"Kilani"} age={26} color={"black"}/>
      <hr />
      <PersonCard firstName={"Majd"} lastName={"Hamad"} age={60} color={"brown"}/>
      <hr />
    </div>
  );
}

export default App;
