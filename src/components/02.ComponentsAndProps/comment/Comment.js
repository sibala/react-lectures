import React from 'react'
import Avatar from './Avatar';
import UserInfo from './UserInfo';

function Comment(props) {
    function formatDate(date) {
        return date.toLocaleDateString();
    }

    return (
        <div className="Comment">
            {/* Version 1 - Before refactoring */}
            {/* <div className="UserInfo">
                <img className="Avatar"
                    src={props.author.avatarUrl}
                    alt={props.author.name}
                />
                <div className="UserInfo-name">
                    {props.author.name}
                </div>
            </div> */}

            {/* Version 2 - refactoring to Avatar component */}
            {/* <div className="UserInfo">
                <Avatar user={props.author} />
              
                <div className="UserInfo-name">
                    {props.author.name}
                </div>
            </div> */}


            {/* Version 3 - refactoring to UserInfo component */}
            <UserInfo user={props.author}/>

            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    )
}

export default Comment