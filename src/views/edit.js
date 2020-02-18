import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { booksAction } from '../actions';
import { create } from '../storageService';
import Navbar from '../components/navbar'
import { Redirect } from 'react-router-dom';

const CreateView = (props) => {
    const books = useSelector(state => state.books);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [author, setAuthor] = useState("");
    const [reading, setReading] = useState("");
    const [wantToRead, setWantToRead] = useState("");
    const [read , setRead] = useState("");
    const dispatch = useDispatch();

    const createBook = (e) => {
        e.preventDefault();
        
        let _id = Array.isArray(books) ? books.length++ : 0; 
        let category = "";

        if(reading) {
            category = "reading";
        }

        else if(wantToRead) {
            category = "wantToRead";
        }

        else if(read) {
            category = "read";
        }

        create("books", {
            _id: _id,
            timestamp: + new Date(),
            title: title,
            description: description,
            author: author,
            category: category,
            deleted: false
        })
        .then(res => {
            console.log(res.message);
            dispatch(booksAction(res.data));
            window.location = "/"
        })
    }

    const handleCategory = (e) => {
        if(e.target.name == "reading") {
            setReading(reading ? false : true);
            setWantToRead(false);
            setRead(false);
        }

        if(e.target.name == "wantToRead") {
            setReading(false);
            setWantToRead(wantToRead ? false : true);
            setRead(false);
        }

        if(e.target.name == "read") {
            setReading(false);
            setWantToRead(false);
            setRead(read ? false : true);
        }
    }

    const validateForm = () => {
        if(!title.length > 0 || !author.length > 0 || !description.length > 0) {
            return false;
        }

        else  {
            return true;
        }
    }

    return (
        <>
            <Navbar />
            {/* <BooksCategories /> */}
            <form className="login-box" onSubmit={ e => createBook(e) }>
                <h2 className="login-title" style={{textAlign: "center"}}>Add New Book</h2>
                <div className="input-box">
                    <div className="input-div">
                        <label>Title:</label>
                        <input
                            value={title}
                            onChange={e => setTitle(e.target.value)}            
                            type="text"
                            required />
                    </div>
                </div>
                <div className="input-box">
                    <div className="input-div">
                        <label>Description:</label>
                        <input
                            value={description}
                            onChange={e => setDescription(e.target.value)}            
                            type="text"
                            required />
                    </div>
                </div>
                <div className="input-box">
                    <div className="input-div">
                        <label>Author:</label>
                        <input
                            value={author}
                            onChange={e => setAuthor(e.target.value)}            
                            type="text"
                            required />
                    </div>
                </div>
                <div className="input-box">
                    <div className="input-div">
                        <label>Category:</label>
                        <fieldset class="large-5 cell">
                            <input name="reading" type="radio" onClick={(e) => handleCategory(e)} checked={reading}/><label>Reading</label>
                            <input name="wantToRead" type="radio" onClick={(e) => handleCategory(e)} checked={wantToRead}/><label>Want to Read</label>
                            <input name="read" type="radio" onClick={(e) => handleCategory(e)} checked={read}/><label>Read</label>
                        </fieldset>
                    </div>
                </div>
                <div className="login-button-div">
                    <button id="submit" type="submit" className="button expanded" disabled={!validateForm()}>Add</button>
                </div>
            </form>
        </>
    )
}

export default CreateView