import React from 'react'
import { contactSelectors, removeAllContact } from '../../redux/contactSlice'
import { useSelector,useDispatch } from 'react-redux'
import Item from "./Item"

function List() {
    const contacts = useSelector(contactSelectors.selectAll)
    const total = useSelector(contactSelectors.selectTotal)
   
    const dispatch = useDispatch()

    const handleDeleteAll = () => {
       if (window.confirm("are you sure")) {
        dispatch(removeAllContact())
       }
    }

  return (
    <div>
   {
    total > 1 &&  <div className='deleteAllBtn' onClick={handleDeleteAll}>
    Clear All
   </div>
   }
    <ul className='list'>
    {
        contacts.map(contact => (<Item key={contact.id} item={contact} />))
    }
    </ul>
    </div>
  )
}

export default List