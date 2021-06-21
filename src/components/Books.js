import React, { Component } from 'react'

export class Books extends Component {
    render() {
        return (
            <>
                <h2>My books</h2>
                {this.props.books.length && this.props.books.map((book, idx) => (
                    <div key={idx}>
                        {book.name}
                    </div>
                ))}
            </>
        )
    }
}

export default Books
