import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUserFriends } from '@fortawesome/free-solid-svg-icons'
import './Person.css'

const Person = (props) => {
    // console.log(props);
    const { img, name, email, phone, salary } = props.user;
    const { street, suite, city, zipcode } = props.user.address;
    return (
        <div className="container">
            <div className="text-center">
                <h1>Friend Details</h1>
            </div>
            <div className="person">
                <div className="person-image">
                    <img class="rounded-circle" style={{ width: 200 }} src={img} alt="" />
                </div>
                <div className="person-details">
                    <p>Name: {name}</p>
                    <p>Email : {email}</p>
                    <p>Phone : {phone}</p>
                    <p>Salary : ${salary}</p>
                    <small>Address : {street}{suite}{city}{zipcode}</small><br />
                    <button
                        onClick={() => props.handleAddFriend(props.user)}
                        className="btn btn-success"> <FontAwesomeIcon icon={faUserFriends} />    Add Friend
                </button>
                </div>

            </div>
        </div>

    );
};

export default Person;