import React from 'react'
import { Link } from 'react-router-dom'

function NoIssue() {
    const handleCreateIssue=()=>{

    }
  return (
    <div className='noissue'>
        <div className="welcome">Welcome to issues!</div>
        <div className="desc">Issues are used to track todos, bugs, feature requests, and more. As issues are created, they'll appear here in a searchable and filterable list. To get started, you should </div>
        <Link to="/createissue"><button className="createbtn" onClick={handleCreateIssue}>Create Issue</button></Link>
    </div>
  )
}

export default NoIssue