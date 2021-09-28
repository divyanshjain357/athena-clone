import logo from './logo.svg';
import './App.scss';
import Header from './components/header/header.component';
import VerticalSlider from './components/verticalSlider/verticalSlider.component';
import Accordionn from './components/Accordion/accordion.component';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <VerticalSlider/>
      <Accordionn/>
    </div>
  );
}

export default App;
