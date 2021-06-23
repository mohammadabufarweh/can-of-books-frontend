import React  from 'react'

class Books extends React.Component {
    render() {
        return (
            <>
                <h2>My books</h2>
                {this.props.books.length && this.props.books.map((book, idx) => (
                    <div key={idx}>
                        <p>Book Name :  {book.name}</p>
                        <br></br>
                        <br></br>

                        <p> Book Description : {book.description}</p>
                        <br></br>
                        <br></br>
                        <p>Book Status : {book.status}</p>
                        <br></br>
                        <br></br>
                        <button onClick={e => this.props.deleteMyBook(idx)} >Delete Book</button>
                        
                        <button onClick={e => this.props.showUpdateForm(book, idx)} >Show Update Form</button>
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>
                ))}
            </>
        )
    }
}

export default Books
