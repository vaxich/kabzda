import React, { useCallback, useMemo } from "react"
import { useState } from "react"

export default {
    title: "useCallBack"
}



export const ExampleUseCallBack = () => {
    console.log('useCallBack');
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['react', 'js', 'css', 'html']);

    const newArray = useMemo(() => {
        const newArray = books.filter(u => u.toLowerCase().indexOf('a') > -1)
        return newArray
    }, [books])

    // const addBook = () => {
    //     const newBooks = [...books, 'Angular' + new Date().getTime()];
    //     setBooks(newBooks)
    // }

    const memoizedAddBook = useCallback(() => {
        const newBooks = [...books, 'Angular' + new Date().getTime()];
        setBooks(newBooks)
    }, [books])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>

        {counter}
        <Book addBook={memoizedAddBook} />

    </>
}

const BooksSecret = (props: BookSecretPropsType) => {
    console.log('booksSecret');
    return <div>

        <button onClick={() => props.addBook()}>addBook</button>
    </div>

}

const Book = React.memo(BooksSecret)

type BookSecretPropsType = {

    addBook: () => void
}