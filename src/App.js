import { Route, Switch } from "react-router-dom";

// IMPORTING PAGES
import AllProducts from "./pages/AllProducts";
import Hamper from "./pages/Hamper";
import MyBasket from "./pages/MyBasket";
import MyCheckOut from "./pages/MyCheckOut";

function App() {
	return (
		<Switch>
			<Route exact path="/" component={AllProducts} />
			<Route exact path="/myBasket" component={MyBasket} />
			<Route exact path="/myCheckOut" component={MyCheckOut} />
			<Route exact path="/hamper" component={Hamper} />
		</Switch>
	);
}

export default App;
