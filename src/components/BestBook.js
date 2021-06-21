import React, { Component } from 'react'
import Books from './Books';
import { withAuth0 } from "@auth0/auth0-react";
import axios from 'axios';

export class BestBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userEmail: this.props.auth0.user.email,
            serverUrl: process.env.REACT_APP_SERVER_URL,
            booksData: []
        }
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
                {this.state.booksData.length > 0 &&
                    <div>
                        <Books
                            books={this.state.booksData}
                        />
                    </div>
                }
            </div>
        )
    }
}


export default withAuth0 (BestBook)
