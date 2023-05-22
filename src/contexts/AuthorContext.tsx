import { createContext, useContext, useEffect, useState } from "react"
import { Author } from "../models/AuthorModel"

type AuthorContextType = {
	authors: Author[]
	setAuthors: (authors: Author[]) => void
	handleAddAuthor: (Author: Author) => void
	handleDeleteAuthor: (id: string) => void
	handleUpdateAuthor: (Author: Author) => void
}

interface IAuthorProvider {
	children: React.ReactNode
}

const AuthorContext = createContext<AuthorContextType>({
	authors: [],
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	setAuthors: () => {},
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	handleAddAuthor: () => {},
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	handleDeleteAuthor: () => {},
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	handleUpdateAuthor: () => {},
})

export const useAuthorContext = () => useContext(AuthorContext)

export const AuthorProvider: React.FC<IAuthorProvider> = ({ children }) => {
	const data = localStorage.getItem('authors')
	const [authors, setAuthors] = useState<Author[]>(
		data ? JSON.parse(data) : [],
	)

	useEffect(() => {
		localStorage.setItem('authors', JSON.stringify(authors))
	}, [authors])

	const handleAddAuthor = (Author: Author) => {
		const newAuthorList = [...authors, Author]
		setAuthors(newAuthorList)
	}
	
	const handleDeleteAuthor = (id: string) => {
		const newAuthorList = authors.filter((Author) => Author.id !== id)
		setAuthors(newAuthorList)
	}

	const handleUpdateAuthor = (Author: Author) => {
		const newAuthorList = authors.map((item) => {
			if (item.id === Author.id) {
				return Author
			}
			return item
		})
		setAuthors(newAuthorList)
	}

	return (
		<AuthorContext.Provider
			value={{
				authors,
				setAuthors,
				handleAddAuthor,
				handleDeleteAuthor,
				handleUpdateAuthor,
			}}
		>
			{children}
		</AuthorContext.Provider>
	)
}