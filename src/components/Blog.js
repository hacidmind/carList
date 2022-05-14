import UseCustomHook from '../useCustomHook';
import Bloglist from './BlogList';
// import Spinner from "./"

const Blog = () => {
  
    const { data: blogs, isLoading, isError } = UseCustomHook("http://localhost:8000/blogs")

    return (
        <div>
            {blogs &&
                <Bloglist blogs={blogs} heading='Car Review Blog' />
            }
            {isLoading ? <div>Loading....</div> : ""}
            {isError ? <div>There is an Error Fetching the data</div> : ""}
        </div>
    );
}

export default Blog;
