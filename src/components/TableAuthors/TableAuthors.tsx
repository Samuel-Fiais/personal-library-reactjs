import { useAuthorContext } from "../../contexts/AuthorContext"
import { TableApp } from "../TableApp/TableApp"

export const TableAuthors = () => {
	const { authors } = useAuthorContext()

	return (
		<TableApp rows={authors} />
	)
}