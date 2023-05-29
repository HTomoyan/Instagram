import React from 'react'
import Posts from '../Posts/Posts'
import Stories from '../Stories/Stories'
import { useDispatch, useSelector } from 'react-redux'
import { logOut, selectUsers } from '../../store/slice/users/usersSlice'

function Main() {
    const {currentUser} = useSelector(selectUsers) 
    const dispatch = useDispatch()

  return (
    <section className="main">
        <div className="wrapper">
            <div className="left-col">
                <Stories/>
                <Posts />
            </div>
            <div className="right-col">
                <span className="profile-card">
                    <div className="profile-pic">
                        <img src={currentUser?.avatar} alt=""/>
                    </div>
                    <div>
                        <p className="username">{currentUser?.username}</p>
                        <p className="sub-text">{currentUser?.name}</p>
                    </div>
                    <button className="action-btn" onClick={() => dispatch(logOut())}>Log Out</button>
                </span>
                <p className="suggestion-text">Suggestions for you</p>
            </div>
        </div>
    </section>
  )
}

export default Main