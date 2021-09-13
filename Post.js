import {
    useParams
} from 'react-router-dom'

const Post = (props) => {
    // get Id of our array index
    const {id} = useParams();
    // use the id
    const post = props.posts[id]
    return (
        <article>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </article>
    )
}

export default Post;