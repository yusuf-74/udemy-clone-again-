import React from 'react'
import PeiceMaker from './PeiceMaker'

function ContentMaker(props) {
    const view = props.data.map(el=>{
        return(
            <PeiceMaker key={el.index} data = {el}/>
        )
    })
  return (
    <div className='content-holder'>{view}</div>
  )
}

export default ContentMaker