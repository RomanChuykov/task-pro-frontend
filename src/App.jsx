import { WelcomePage } from "Pages/WelcomePage";
import { Layout } from "components/Layout/Layout";
import { Route, Routes } from "react-router-dom";

export const App = () => {
	return (
		<Routes>
			<Route path="/welcome" element={<Layout/>}>
				<Route index element={<WelcomePage/>}/>
				<Route path="/auth/:id">
          <Route path="/auth/register"/>
          <Route path="/auth/login"/>
          <Route/>
        </Route>
				<Route path="/home">
					<Route path="/home/:boardName" />
				</Route>
			</Route>
		</Routes>
	);
};
