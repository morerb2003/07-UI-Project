import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
    return (
        <div className='h-full shrink-0 overflow-hidden relative w-70 rounded-2xl'>
            <img className='h-full w-full object-cover rounded-2xl' src={props.user.img} alt="" />
            <RightCardContent id={props.id} user={props.user} color={props.color} tag={props.tag} />
            

            
        </div>
    )
}

export default RightCard
