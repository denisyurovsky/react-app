export const PostItem = ({post, remove}) => {
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <button onClick={() => remove(post)}>Удалить</button>
        </div>
    )
}