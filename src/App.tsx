import "./App.css";
import InputComponent from "./components/InputComponent";
import SayacCompenent from "./components/SayacCompenent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Merhaba misafir !</p>
        <br />
        buraya müşteri adı yazılsın...
        <InputComponent />
        <br />
        buraya adres yazılsın....
        <InputComponent />
        <br />
        buraya eposta yazılsın...
        <InputComponent />
        <br />
        <SayacCompenent baslik="adet" renk="red" />
        <button>siparişi tamamla</button>
      </header>
    </div>
  );
}

export default App;
