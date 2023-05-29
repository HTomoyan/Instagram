import './MessengerPeoplesMessages.css'
import IMAGES from '../../images'
import MessengerPeoplesMessage from '../MessengerPeoplesMessage/MessengerPeoplesMessage'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { selectUsers } from '../../store/slice/users/usersSlice'

function MessengerPeoplesMessages() {
	const {usersData, currentUser} = useSelector(selectUsers)

	const message = useMemo(() => {
		return[
			...usersData.filter(user => user.id !== currentUser.id)
						.map(user => ({
							id: user.id,
							img: user.avatar,
							name: user.username,
							active: `Active ${Math.round(Math.random() * 20) + 5}m ago`
						}))
		]
	},[usersData,currentUser])

  return (
	 <div className='Messenger-left-col-peoples-messages'>
		{
			message.map(el => <MessengerPeoplesMessage key={el.id} img={el.img} id={el.id} name={el.name} active={el.active}/>)
		}
	 </div>
  )
}

export default MessengerPeoplesMessages
