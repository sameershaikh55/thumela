import { Route, Switch } from "react-router-dom";

// IMPORTING PAGES
import Landing from "./pages/Landing";

function App() {
	return (
		<Switch>
			<Route exact path="/" component={Landing} />
		</Switch>
	);
}

export default App;
