import { useBookContext } from "../../contexts/BookContext"
import { TableApp } from "../TableApp/TableApp"

export const TableBooks = () => {
	const { books } = useBookContext()

	return (
		<TableApp rows={books} />
	)
}