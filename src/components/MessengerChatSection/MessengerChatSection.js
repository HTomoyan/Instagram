import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { selectMessages } from '../../store/slice/messages/messagesSlice'
import { selectUsers } from '../../store/slice/users/usersSlice'
import MessengerChat from '../MessengerChat/MessengerChat'
import MessengerChatForm from '../MessengerChatForm/MessengerChatForm'
import './MessengerChatSection.css'

function MessengerChatSection() {
	const {activeUserId} = useSelector(selectMessages)
	const {usersData} = useSelector(selectUsers)
	const messages = useMemo(() => {
		return [
			...usersData.map(user => ({
				id: user.id,
				name: user.username
			}))
		]
	},[usersData])
  return (
	 <div className='Messenger-right-col'>
		<div className='UserSction'>
			{
				messages.map(user => (
					<p key={user.id}>  {activeUserId === user.id ? user.name : ''} </p>
				))
			}
		</div>
		<div className='Chat'>
			<MessengerChat />
		</div>
		<MessengerChatForm />
	 </div>
  )
}

export default MessengerChatSection
