import { Route, Switch } from "react-router-dom";

// IMPORTING PAGES
import AllProducts from "./pages/AllProducts";
import MyBasket from "./pages/MyBasket";
import MyCheckOut from "./pages/MyCheckOut";

function App() {
	return (
		<Switch>
			<Route exact path="/" component={AllProducts} />
			<Route exact path="/myBasket" component={MyBasket} />
			<Route exact path="/myCheckOut" component={MyCheckOut} />
		</Switch>
	);
}

export default App;
