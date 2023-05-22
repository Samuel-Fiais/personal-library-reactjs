import { createContext, useContext, useEffect, useState } from "react";
import { Book } from '../models/BookModel';

type BookContextType = {
	books: Book[],
	setBooks: (books: Book[]) => void,
	handleAddBook: (book: Book) => void,
	handleDeleteBook: (id: string) => void,
	handleUpdateBook: (book: Book) => void,
}

interface IBookProvider {
	children: React.ReactNode
}

const BookContext = createContext<BookContextType>({
	books: [],
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	setBooks: () => {},
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	handleAddBook: () => {},
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	handleDeleteBook: () => {},
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	handleUpdateBook: () => {},
})

export const useBookContext = () => useContext(BookContext)

export const BookProvider: React.FC<IBookProvider> = ({ children }) => {
	const data = localStorage.getItem('books')
	const [books, setBooks] = useState<Book[]>(
		data ? JSON.parse(data) : [],
	)

	useEffect(() => {
		localStorage.setItem('books', JSON.stringify(books))
	})

	const handleAddBook = (Book: Book) => {
		const newBookList = [...books, Book]
		setBooks(newBookList)
	}

	const handleDeleteBook = (id: string) => {
		const newBookList = books.filter((Book) => Book.id !== id)
		setBooks(newBookList)
	}

	const handleUpdateBook = (Book: Book) => {
		const newBookList = books.map((item) => {
			if (item.id === Book.id) {
				return Book
			}
			return item
		})
		setBooks(newBookList)
	}

	return (
		<BookContext.Provider
			value={{
				books,
				setBooks,
				handleAddBook,
				handleDeleteBook,
				handleUpdateBook,
			}}
		>
			{children}
		</BookContext.Provider>
	)
}