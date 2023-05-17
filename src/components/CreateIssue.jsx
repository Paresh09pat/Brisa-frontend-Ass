import axios from 'axios';
import React from 'react';

function CreateIssue() {
    const handleform = (event) => {
        event.preventDefault();
        const issuetitle = event.target[0].value;
        const issuedesc = event.target[1].value;
        axios.post("https://brisa-server.onrender.com/createissue", { title: issuetitle, desc: issuedesc})
            .then(res => {
                window.location.href = 'https://monumental-entremet-da7f3e.netlify.app/'
            }).catch(e => {
                console.log(e);
            })
    }
    return (
       <div className='outform'>
         <form className='CreateIssue' onSubmit={handleform}>
            <input type="text" className='title'placeholder='Please Enter Title' />
            <textarea type="text" placeholder='Enter Your issue here . . .' className='description'/>
            <button type='submit' className='submitissue'>Submit New Issue</button>
        </form>
       </div>
    )
}

export default CreateIssue;