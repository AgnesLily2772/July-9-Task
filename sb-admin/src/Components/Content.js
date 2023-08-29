import React from 'react'
import Charts from './Charts';
import Details from './Details';
const Content = (props) => {
  return (
        <>
            <Charts/>
            <Details ProjectsData={props.ProjectsData} colorData={props.colorData}/>
        </>
  )
}

export default Content