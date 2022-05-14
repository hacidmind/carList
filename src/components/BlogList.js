import "./BlogList.css"

import { Link } from 'react-router-dom';

const Bloglist = ({ blogs, heading }) => {


    return (
        <div>
            <h1>{heading}</h1>
            {
                blogs.map((vehicle) => (
                    <div className="blog-preview" key={vehicle.id}>
                        <Link to={`/blog/${vehicle.id}`}>
                            <h2 className='head'>{vehicle.title}</h2>
                        </Link>
                        <p className="body">{vehicle.body}</p>
                        

                    </div>
                ))
            }
        </div>
    );
}

export default Bloglist;
