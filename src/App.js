import { Route, Switch } from "react-router-dom";

// IMPORTING PAGES
import AllProducts from "./pages/AllProducts";
import Hamper from "./pages/Hamper";
import MyBasket from "./pages/MyBasket";
import MyCheckOut from "./pages/MyCheckOut";
import SignIn from "./pages/SignIn";

function App() {
	return (
		<Switch>
			<Route exact path="/AllProducts" component={AllProducts} />
			<Route exact path="/Hamper" component={Hamper} />
			<Route exact path="/MyBasket" component={MyBasket} />
			<Route exact path="/myCheckOut" component={MyCheckOut} />
			<Route exact path="/" component={SignIn} />
		</Switch>
	);
}

export default App;
