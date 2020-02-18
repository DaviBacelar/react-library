import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { booksAction } from '../actions';
import { Link } from 'react-router-dom';
import { getByid } from '../storageService';
import Navbar from '../components/navbar';

const BookView = (props) => {
    const [book, setBook] = useState(false);

    if(props.location.search.indexOf("=") > 0 && book == false) {
        getByid("books", props.location.search.split("=")[1])
        .then(res => {
            console.log(res)
            setBook(res.data);
        })
    }

    return (
        <>
            <Navbar />
            {/* <BooksCategories /> */}
            <div className="item-container">
                <h1>{book.title}</h1>
                <h2>{book.author}</h2>
                <p>{book.description}</p>
            </div>
        </>
    )
}

export default BookView