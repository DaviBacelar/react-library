import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../components/navbar';
import { booksAction } from '../actions';
import { Link } from 'react-router-dom';

const CategoryView = (props) => {
    const category = props.location.search.split("=")[1];
    const books = useSelector(state => state.books[category])
    
    
    const createBooksList = () => {
        console.log(books);
        if(Array.isArray(books)) {
            let list = [];

            books.map((item, key) => {
                if(!item.deleted) {
                    list.push(
                        <Link to={`/book?_id=${item._id}`}>
                            <div className="grid-item">
                                <div className="book-title">{item.title}</div>
                            </div>
                        </Link>
                    )
                }
            });

            return list;
        }
    }

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="category-header">
                    <h4>{category} <Link to={`/category?category=${category}`}></Link></h4>
                    <Link to={`/create?category=${category}`}><a className="add-button">Add</a></Link>
                </div>
                <hr/>
                <div className="grid">
                    {createBooksList()}
                </div>
            </div>
        </>
    )
}

export default CategoryView