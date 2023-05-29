import { useSelector } from 'react-redux'
import './MessengerChat.css'
import { selectMessages } from '../../store/slice/messages/messagesSlice'
import { selectUsers } from '../../store/slice/users/usersSlice'

function MessengerChat() {
  const {currentDialog} = useSelector(selectMessages)
  const {currentUser} = useSelector(selectUsers)
  return (
	 <div className='MessengerChat'>
      {
        currentDialog.map(message => (
          <h2 className={message.fromId === currentUser.id ? 'right' : 'left'} key={message.id}>{message.body}</h2>
        ))
      }
    </div>
  )
}

export default MessengerChat
