import { useState } from "react";
import BookEdit from './BookEdit'

function BookShow({book,onDelete,onEdit}){
    const[showEdit, setShowEdit] = useState(false);

    const handeleteClick = () =>{
        onDelete(book.id)
    }

    const habnleEditClick = () =>{
        setShowEdit(!showEdit);
    }


    const handleSubmit = (id, title) => {
        setShowEdit(false);
        onEdit(id, title);
    }


    let content = <h3>{book.title}</h3>

    if(showEdit){
        content = <BookEdit book={book} onEdit={onEdit} onSubmit={handleSubmit}/>
    }

    return (
        <div className="book-show">
            <img src={`https://picsum.photos/seed/${book.id}/200/300`} alt={book.title}/>
            {content}
            <div className="actions">
                <button className="edit" onClick={habnleEditClick}>Edit</button>
                <button className="delete" onClick={handeleteClick}>Delete</button>
            </div>
        </div>
    );
}

export default BookShow;