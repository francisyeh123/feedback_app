import {FaTimes, FaEdit} from 'react-icons/fa'
import React, {useState, useContext} from 'react'
import Card from './shared/Card'
import FeedbackContext from './context/FeedbackContext'

function FeedbackItem({item}) {
    const {deleteFeedback, editFeedback} = useContext(FeedbackContext)

    return (
        <Card>
            <div className='num-display'>{item.rating}</div>
            <button onClick={()=>deleteFeedback(item.id)} className='close'>
                <FaTimes color='pruple' />
            </button>
            <button onClick={()=>{editFeedback(item)}} className='edit'>
                <FaEdit color='purple' />
            </button>
            <div className='text-display'>{item.text}</div>
        </Card>

        // <div className='card'>
        //     <div className='num-display'>{item.rating}</div>
        //     <div className='text-display'>{item.text}</div>
        // </div>
    ) 
}

export default FeedbackItem