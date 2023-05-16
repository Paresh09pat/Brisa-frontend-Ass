import React, { useEffect, useState } from 'react'
import NoIssue from './NoIssue'
import IssueList from './IssueList';
import axios from 'axios'

function Issues() {
  const [issue, setissue] = useState([])
  useEffect(() => {
    axios.get('https://brisa-server.onrender.com/getissue')
      .then((res) => {
        const data = res.data.output;
        console.log(data);
        setissue(data);
      });
  }, [issue]);
  
  return (
    <div className='issues'>
      {
        issue.length === 0 ? <NoIssue /> : <IssueList isu="hello" sisu={setissue} />
      }
    </div>
  )
}

export default Issues