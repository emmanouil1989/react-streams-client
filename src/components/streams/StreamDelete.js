import React from 'react'
import Modal from '../Modal';
import history from '../../history'
const StreamDelete =()=>{
    const actions = (
        // react fragment allow to group jsx elements and not produce div html
        <>
            <button className={"ui negative button"}>Delete</button>
            <button className={"ui button"}>Cancel</button>
        </>
    );

    return(
        <div>
            StreamDelete
            <Modal
                title={"Delete Stream"}
                content={'Are you sure you want to delete this stream?'}
                actions={actions}
                onDismiss={()=> history.push('/')}
            />
        </div>
    )

};


export default StreamDelete;
