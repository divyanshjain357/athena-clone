import "./App.scss";
import Header from "./components/header/header.component";
import VerticalSlider from "./components/verticalSlider/VerticalSlider";
import Accordionn from "./components/Accordion/Accordion";
function App() {
	return (
		<div className="App">
			<Header />
			<VerticalSlider />
			<Accordionn />
		</div>
	);
}

export default App;
