import React, {useRef} from 'react'
import { FlowContact } from './FlowContact.jsx'
export const FlowList = ({title, contacts , ...props}) => {

    const flowListRef = useRef(null);

    const handleNestedScroll = (e) => {
      e.stopPropagation();
    };

  return (
    <article className='bg-light shadow' onWheel={handleNestedScroll} ref={flowListRef}>
        <h3>{title}</h3>
        <div className='flowContactCont'>
            {contacts?.map(contact => <FlowContact key={contact._id} contact={contact}/>)}
        </div>
    </article>
  )
}
