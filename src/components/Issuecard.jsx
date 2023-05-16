import React from 'react';
import axios from 'axios'


function Issuecard(props) {
    const updateissue=()=>{
        axios.post('https://brisa-server.onrender.com/updateissue',{_id:props.isuid})
            .then((res) => {
                alert("Issue is closed")
            });
    }
  return (
    <div className='issuecard'>
        <div className="cardtitle">{props.title}</div>
        <div className="cardDesc">{props.desc}</div>
        <button onClick={updateissue} className="closeissue">close issue</button>
    </div>
  )
}

export default Issuecard