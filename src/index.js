import React from 'react';
import reactDOM from 'react-dom';
import profile1 from './images/pic-1.jpg';
import profile2 from './images/pic-2.jpg';
import profile3 from './images/pic-3.jpg';
import SingleComment from './SingleComment';
import UserCard from './UserCard';
import UswerCard from './UserCard'

const App = () => {
    return(
        <div className='ui comments'>
            <UserCard>
                <div>
                    My name is Randa Rowsey and I am a woman WWE Heavyweight Champion.
                </div>
            </UserCard>
            <UserCard>
                <SingleComment 
                    name ='Rihanna'
                    date = 'Today at 5:45pm'
                    text = 'it is amazing'
                    picture = {profile1}
                />
            </UserCard>
            <UserCard>
                <SingleComment 
                    name ='Randa'
                    date = 'Today at 6:00pm'
                    text = 'Oh my God, I love this'
                    picture = {profile3}
                />
            </UserCard>
            <UserCard>
                <SingleComment 
                    name ='John' 
                    date = 'Today at 6:33pm'
                    text = 'Thanks'
                    picture = {profile2}
                />
            </UserCard>
        </div>
    )
}


reactDOM.render (
    <App />,
    document.querySelector('#root')
)