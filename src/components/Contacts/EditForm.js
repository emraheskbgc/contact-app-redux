import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateContact } from '../../redux/contactSlice'

function EditForm({ contact }) {
    const [name, setName] = useState(contact.name)
    const [phone_number, setPhoneNumber] = useState(contact.phone_number)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!name || !phone_number) return false

        dispatch(updateContact({ id: contact.id, changes: { name, phone_number } }))

        navigate('/')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder='name' value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input placeholder='phone number' value={phone_number}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <div className='btn'>
                    <button type='submit'>Update</button>
                </div>
            </form>

        </div>
    )
}

export default EditForm