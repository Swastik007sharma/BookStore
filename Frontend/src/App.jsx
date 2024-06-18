import { Route, Routes } from "react-router-dom";
import { Home, CreateBook, DeleteBook, EditBook, ShowBook } from "./AllExport";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/books/create" element={<CreateBook />} />
				<Route path="/books/details/:id" element={<ShowBook />} />
				<Route path="/books/delete/:id" element={<EditBook />} />
				<Route path="/books/edit/:id" element={<DeleteBook />} />
			</Routes>
		</div>
	);
}

export default App;
