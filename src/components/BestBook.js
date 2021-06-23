import React, { Component } from 'react'
import Books from './Books';
import { withAuth0 } from "@auth0/auth0-react";
import axios from 'axios';

import CreateForm from './CreateForm';
import UpdateForm from './UpdateForm';

export class BestBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            userEmail: this.props.auth0.user.email,
            serverUrl: process.env.REACT_APP_SERVER_URL,
            booksData: [],
            bookName: '',
            showUpdateForm: false,
            bookNameUpdate: '',
            bookIndex: 0,

            bookDescription:'',
            bookDescriptionUpdate: '',

            bookStatus:'',
            bookStatusUpdate: '',
        }
    }


    updatebookName = (bookName) => this.setState({ bookName });
    updatebookNameUpdateForm = (bookName) => this.setState({ bookNameUpdate: bookName });

    updatebookDescription = (bookDescription) => this.setState({ bookDescription });
    updatebookDescriptionUpdateForm = (bookDescription) => this.setState({ bookDescriptionUpdate: bookDescription });

    updatebookStatus = (bookStatus) => this.setState({ bookStatus });
    updatebookStatusUpdateForm = (bookStatus) => this.setState({ bookStatusUpdate: bookStatus });
    

    showUpdateForm = (bookObject, idx) => this.setState({ showUpdateForm: !this.state.showUpdateForm, bookNameUpdate: bookObject.name, bookIndex: idx , bookDescription : bookObject.description , bookStatus:bookObject.status  } )



    createMyBook = (e) => {
        e.preventDefault()
        // we are going to create a request body object, which will contain the email and the cat name to be sent over to the backend server

        const reqBody = {
            bookName: this.state.bookName,
            userEmail: this.state.userEmail,
            bookStatus:this.state.bookStatus,
            bookDescription:this.state.bookDescription
        }

        // to send a request for creating new data, we will be using the POST method
        axios.post(`${this.state.serverUrl}/books`, reqBody).then(response => {
            this.setState({
                booksData: response.data.books
            })
        }).catch(error =>
            alert(error.message)
        )

    }

    updateMyBook = (e) => {
        e.preventDefault();
        const reqBody = {
            bookName: this.state.bookNameUpdate,
            userEmail: this.state.userEmail,

            bookStatus:this.state.bookStatusUpdate,
            bookDescription:this.state.bookDescriptionUpdate
        }

        // to send a request for creating new data, we will be using the POST method
        axios.put(`${this.state.serverUrl}/books/${this.state.bookIndex}`, reqBody).then(response => {
            this.setState({
                booksData: response.data.books,
              

            })
        }).catch(error =>
            alert(error.message)
        )
    }

    deleteMyBook = (index) => {
        // This function will be sending an axios request to the backend with the cat index to be deleted
        // NOTE! when deleting items with axios, axios does not accept request body assignment

        axios.delete(`${this.state.serverUrl}/books/${index}?email=${this.state.userEmail}`).then(response => {
            this.setState({
                booksData: response.data.books,
                showUpdateForm: false
            });
        }).catch(error =>
            alert(error.message)
        )
    }

    // this is a react function that will execute once the component rendered
    componentDidMount = () => {
        axios.get(`${this.state.serverUrl}/books?email=${this.state.userEmail}`).then(response => {
            this.setState({
                booksData: response.data[0].books
            })
        }).catch(
            error => {
                alert(error.message);
            }
        );
    }

    render() {
        // console.log(this.props.auth0);
        return (
            <div>
                <div>
                    {/* <h2>{this.state.userName}</h2>
                    <p>{this.state.userEmail}</p>
                    <img src={this.state.userPicture} alt={this.state.userName} /> */}
                </div>
                {/* {this.state.booksData.length > 0 &&
                    <div>
                        <Books
                            books={this.state.booksData}
                        />
                    </div>
                } */}
                       <div>
                    <CreateForm
                        updatebookName={this.updatebookName}
                        updatebookDescription={this.updatebookDescription}
                        updatebookStatus={this.updatebookStatus}
                        createMyBook={this.createMyBook}
                    />
                </div>
                {this.state.showUpdateForm &&
                    <div>
                        <UpdateForm
                            updateMyBook={this.updateMyBook}
                            updatebookNameUpdateForm={this.updatebookNameUpdateForm}
                            bookNameUpdate={this.state.bookNameUpdate}
                            

                            updatebookDescriptionUpdateForm={this.updatebookDescriptionUpdateForm}
                            bookDescriptionUpdate={this.state.bookDescriptionUpdate}

                            updatebookStatusUpdateForm={this.updatebookStatusUpdateForm}
                            bookStatusUpdate={this.state.bookStatusUpdate}
                        />
                    </div>

                }
                {this.state.booksData.length > 0 &&
                    <div>
                        <Books
                            books={this.state.booksData}
                            deleteMyBook={this.deleteMyBook}
                            showUpdateForm={this.showUpdateForm}
                        />
                    </div>
                }
            </div>
        )
    }
}


export default withAuth0 (BestBook)
