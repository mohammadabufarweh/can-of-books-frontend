import React, { Component } from 'react'

export class CreateForm extends Component {
    render() {
        return (
            <form onSubmit={(e) => this.props.createMyBook(e)}>
                <label>Book Name</label>
                <input onChange={(e) => this.props.updatebookName(e.target.value)}></input>

                <label>Book Description</label>
                <input onChange={(e) => this.props.updatebookDescription(e.target.value)}></input>


                <label>Book status</label>
                <input onChange={(e) => this.props.updatebookStatus(e.target.value)}></input>

                <input type='submit' value="create book" />




            </form>

        )
    }
}

export default CreateForm