import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthorPage } from "../pages/AuthorPage";
import { BookPage } from "../pages/BookPage";

export const AppRoutes = () => {
	return (
		<Router>
			<Routes>
				<Route path="/author" element={ <AuthorPage /> } />
				<Route path="/book" element={ <BookPage /> }/>

				<Route path="*" element={ <Navigate to="/author" /> } />
			</Routes>
		</Router>
	)
}