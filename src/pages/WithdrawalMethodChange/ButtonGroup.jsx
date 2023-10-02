import React from 'react'

function ButtonGroup() {
  return (
    <>
         <div className='btn-wrapper' style={{marginTop:"30px"}}>
            <div className='btn-primary'>
                <p className='btn-continue'>CONTINUE</p>
            </div>
        </div>

        <div className='btn-secondary'>
            <p className='btn-cancel'>CANCEL</p>
        </div>
    </>
  )
}

export default ButtonGroup