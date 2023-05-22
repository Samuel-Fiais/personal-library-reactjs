import { TableAuthors } from "../components/TableAuthors/TableAuthors"
import { LayoutMain } from "../layout"

export const AuthorPage = () => {
	return (
		<LayoutMain title={'Autores'} table={ <TableAuthors/> } />
	)
}