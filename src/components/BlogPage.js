

import { useParams } from 'react-router-dom';
import UseCustomHook from '../useCustomHook';
import { useNavigate } from 'react-router-dom';


const BlogPage = () => {
    const { id } = useParams();
    const { data: vehicle, isLoading, isError } = UseCustomHook(`http://localhost:8000/blogs/${id}`)
    let navigate = useNavigate()


    let handleDelete = () => {
        fetch(`http://localhost:8000/blogs/${id}`,
            {
          method:"DELETE"  
            }).then(() => {
            navigate(-1)
        })
    }


    return (
        <div>
            {isLoading ? <div>Loading....</div> : ""}
            {isError ? <div>There is an Error Fetching the data</div> : ""}
            {
                vehicle && (
                    <div>
                        <h2 className='head'>{vehicle.title}</h2>
                        <p className="body">{vehicle.body}</p>
                        <p><b>Founded by:</b> {vehicle.founder}</p>
                        <button onClick={handleDelete}>Delete Blog</button>
                    </div>
                )
            }
        </div>
    );
}

export default BlogPage;
