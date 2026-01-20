import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props.users); 
  return (
    <div id='rightContent' className='h-full p-6 w-3/4  flex flex-nowrap gap-6  rouded 4xl overflow-auto '>
        {props.users.map(function(elem,idx){
          return <RightCard key={idx} id={idx} user={elem} color={elem.color} tag={elem.tag} />;

        })}
    </div>
  )
}

export default RightContent
