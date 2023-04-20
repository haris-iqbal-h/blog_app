import {useParams} from 'react-router-dom'
import useFetch from './useFetch';
const BlogDetails = () => {
    const {id}=useParams();
    // console.log('id',id);
    const {data:blog,error,isPending}=useFetch("http://localhost:8000/blogs/"+id)
    // console.log('blog',blog);
    return ( 
        <div className="blog-details">
            <h2>BlogDetails {id}</h2>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                    <article>
                        <h2>{blog.title}</h2>
                        <p>Written By {blog.author}</p>
                        <div>P {blog.body}</div>
                    </article>
            )}
        </div>
    );
}
export default BlogDetails;