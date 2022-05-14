import './NewBlog.css'

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NewBlog() {

    const [title, setTitle] = useState('')
    const [founder, setFounder] = useState('')
    const [body, setBody] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    let navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        // alert(`You entered: ${title} ${founder} ${body} `)
        const blog = { title, body, founder }
        // console.log(blog);
        setIsLoading(true)
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blog)
        }).then(() => {
            setIsLoading(false);
            navigate('/')
        })
    }

    return (
        <div className='newBlog'>
            <h2>Add A New Blog</h2>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div >
                        <label>Blog Title</label>
                    </div>
                    <div className="col-100">
                        <input type="text" placeholder="Your Title.." required onChange={(e) => setTitle(e.target.value)} />
                    </div>
                </div>
                <div className="row">
                    <div >
                        <label>Founder</label>
                    </div>
                    <div className="col-100">
                        <input type="text" placeholder="The founder.." onChange={(e) => setFounder(e.target.value)} />
                    </div>
                </div>

                <div className="row">
                    <div>
                        <label htmlFor="subject">Body</label>
                    </div>
                    <div className="col-100">
                        <textarea id="subject" placeholder="Body.." style={{ height: "200px" }} onChange={(e) => setBody(e.target.value)}></textarea>
                    </div>
                </div>
                <br />
                <div className="row">
                    {

                      !isLoading &&  <input type="submit" value="Submit" />
                    }
                    {

                      isLoading &&  <input type="submit" value="Adding Blog......" />
                    }
                </div>
            </form>

        </div>
    )
}
