  
import React, { Component } from 'react'

export class UpdateForm extends Component {
    render() {
        return (
            <form onSubmit={(e) => this.props.updateMyBook(e)}>
                <label>Update Book Name :   </label>
                <input value={this.props.bookNameUpdate} onChange={(e) => this.props.updatebookNameUpdateForm(e.target.value)}></input>
                
                
                <label>Update Book Description :    </label>
                <input value={this.props.bookDescriptionUpdate} onChange={(e) => this.props.updatebookDescriptionUpdateForm(e.target.value)}></input>
                {/* <input type="submit" value="update book Description" /> */}


                <label>Update Book Status :   </label>
                <input value={this.props.bookStatusUpdate} onChange={(e) => this.props.updatebookStatusUpdateForm(e.target.value)}></input>
                {/* <input type="submit" value="update book Status" /> */}

                <input type="submit" value="update book Data" />
            </form>
        )
    }
}

export default UpdateForm