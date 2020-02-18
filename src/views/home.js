import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { booksAction } from '../actions';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar'
import Storage from '../storageService';

const HomeView = (props) => {
    const books = useSelector(state => state.books);
    const categories = useSelector(state => state.categories);

    const createCategories = () => {
        if(Array.isArray(categories)) {
            let list = [];

            categories.map((item, key) => {
                list.push(
                    <div>
                        <div className="category-header">
                            <h4>{item.value} <Link to={`/category?category=${item.name}`}><span className="see-more">See More</span></Link></h4>
                            <Link to={`/create?category=${item.name}`}><a className="add-button">Add</a></Link>
                        </div>
                        <hr/>
                        <div className="grid">
                            {createBooksList(books[item.name])}
                        </div>
                    </div>
                )
            });

            return list;
        }
    }
    
    const createBooksList = (booksInCategory) => {
        console.log(booksInCategory);
        if(Array.isArray(booksInCategory)) {
            let list = [];

            booksInCategory.map((item, key) => {
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
            {/* <BooksCategories /> */}
            <div className="container">
                {createCategories()}
            </div>
        </>
    )
}

export default HomeView