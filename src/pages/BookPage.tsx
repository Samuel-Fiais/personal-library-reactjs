import { TableBooks } from "../components/TableBooks/TableBooks"
import { LayoutMain } from "../layout"

export const BookPage = () => {

	return (
		<LayoutMain title={'Books'} table={ <TableBooks/> } />
	)
}