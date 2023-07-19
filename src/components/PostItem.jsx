import { Link } from "react-router-dom"

export const PostItem = ({post, remove, idx}) => {
    return (
        <div>
            <h1>{post.id}.{post.title}</h1>
            <p>{post.body}</p>
            <button><Link to={`/posts/${post.id}`}>Открыть</Link></button>
            <button onClick={() => remove(post)}>Удалить</button>
        </div>
    )
}