import axios from 'axios';
import React from 'react';

function CreateIssue() {
    const handleform = (event) => {
        event.preventDefault();
        const issuetitle = event.target[0].value;
        const issuedesc = event.target[1].value;
        axios.post("https://brisa-server.onrender.com/createissue", { title: issuetitle, desc: issuedesc})
            .then(res => {
                window.location.href = 'https://brisa-tech-task.netlify.app/'
            }).catch(e => {
                console.log(e);
            })
    }
    return (
        <form className='CreateIssue' onSubmit={handleform}>
            <input type="text" className='title'placeholder='Please Enter Title' />
            <span>Enter Your Issue:</span>
            <textarea type="text" className='description'/>
            <button type='submit' className='submitissue'>Submit New Issue</button>
        </form>
    )
}

export default CreateIssue;