import { Route, Switch } from "react-router-dom";

// IMPORTING PAGES
import AllProducts from "./pages/AllProducts";
import CheckoutPayment from "./pages/CheckoutPayment";
import Hamper from "./pages/Hamper";
import MyBasket from "./pages/MyBasket";
import MyCheckOut from "./pages/MyCheckOut";
import MyOrders from "./pages/MyOrders";
import OrderConfirmation from "./pages/OrderConfirmation";
import ProductDisplay from "./pages/ProductDisplay";
import SearchResults from "./pages/SearchResults";
import SignIn from "./pages/SignIn";
import TrackOrder from "./pages/TrackOrder";

function App() {
	return (
		<Switch>
			<Route exact path="/AllProducts" component={AllProducts} />
			<Route exact path="/Hamper" component={Hamper} />
			<Route exact path="/MyBasket" component={MyBasket} />
			<Route exact path="/myCheckOut" component={MyCheckOut} />

			<Route exact path="/signIn" component={SignIn} />
			<Route exact path="/myOrders" component={MyOrders} />
			<Route exact path="/checkoutPayment" component={CheckoutPayment} />
			<Route exact path="/orderConfirmation" component={OrderConfirmation} />
			<Route exact path="/trackOrder" component={TrackOrder} />
			<Route exact path="/searchResults" component={SearchResults} />
			<Route exact path="/productDisplay" component={ProductDisplay} />
		</Switch>
	);
}

export default App;
