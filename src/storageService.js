import { useSelector, useDispatch } from 'react-redux';
import { booksAction, categoriesAction, commentsAction } from './actions';

export const servicesInit = (model, values) => {
    return new Promise((resolve, reject) => {
        const books = useSelector(state => state.books)
        const categories = useSelector(state => state.books)
        const comments = useSelector(state => state.books)
        const dispatch = useDispatch();
      
        if(!books) {
          getAll("books").then(res => {
            let data = res.data;
            let uncategorized = [];
            let read = [];
            let wantToRead = [];
            let reading = [];
      
            if(!Array.isArray(data)) {
                data = [];
            }
            
            else {
                data.map((item, key) => {
                if(item.category != "read" && item.category != "reading" && item.category != "wantToRead") {
                    uncategorized.push(item);
                }
        
                else if(item.category == "read") {
                    read.push(item);
                }
        
                else if(item.category == "reading") {
                    reading.push(item);
                }
        
                else if(item.category == "wantToRead") {
                    wantToRead.push(item);
                }
                })
            }

            dispatch(booksAction({
              uncategorized: uncategorized,
              read: read,
              wantToRead: wantToRead,
              reading: reading,
            }))
          })
        }

        if(!categories) {            
            getAll("categories").then(res => {
                let data = res.data;
                data = [{
                            name: "reading", 
                            value: "Reading"
                        }, 
                        {
                            name: "wantToRead", 
                            value: "Want To Read"
                        }, 
                        {
                            name: "read", 
                            value: "Read"
                        },
                        {
                            name: "uncategorized", 
                            value: "Uncategorized"
                        }]
                localStorage.setItem("categories", JSON.stringify(data));

                dispatch(categoriesAction(data))
            })
        }
    })
}

export const create = (model, values) => {
        return new Promise((resolve, reject) => {
            let docs = JSON.parse(localStorage.getItem(model));

            if(docs == null || docs == undefined) {
                docs = [];
            }

            docs.push(values);
            localStorage.setItem(model, JSON.stringify(docs));
            resolve({data: docs, message: "Stored!"})
        })
}

export const getAll = (model, values) => {
    return new Promise((resolve, reject) => {
        let docs = JSON.parse(localStorage.getItem(model));
        let results = [];

        if(docs == null || docs == undefined) {
            docs = [];
        }

        resolve({message: "fetched", data: docs});
    })
}

export const getComments = (_id) => {
    return new Promise((resolve, reject) => {
        let docs = JSON.parse(localStorage.getItem("comments"));
        let results = [];

        if(docs == null || docs == undefined) {
            docs = [];
        }

        if(_id) {
            if(Array.isArray(docs)) {
                docs.map((item) => {
                    if(item.to_id == _id) {
                        results.push(item);
                    }
                })
            }
        }

        resolve({message: "fetched", data: results});
    })
}

export const getByid = (model, _id) => {
    return new Promise((resolve, reject) => {
        let docs = JSON.parse(localStorage.getItem(model));
        let doc = {};

        docs.map((item) => {
            if(item._id == _id) {
                doc = item;
            }
        })

        resolve({
            message: "Found!",
            data: doc
        });
    })
}

export const getByCategory = (model, category) => {
    return new Promise((resolve, reject) => {
        let docs = JSON.parse(localStorage.getItem(model));
        let results = [];

        docs.map((item) => {
            if(item.category == category) {
                results.push(item);
            }
        })

        resolve({data: results});
    })
}

export const update = (model, filter, values) => {
    return new Promise((resolve, reject) => {
        let docs = JSON.parse(localStorage.getItem(model));
        let fieldsToChange = Object.keys(values);

        fieldsToChange.map((field) => {
            docs[values["_id"]][field] = values[field];
        })

        localStorage.setItem(model, JSON.stringify(docs));
        resolve({data: docs, message: "Updated!"});
    })
}

export const deleteOne = (model, values) => {
    return new Promise((resolve, reject) => {

    })
}