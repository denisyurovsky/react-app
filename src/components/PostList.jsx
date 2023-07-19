import { PostItem } from "./PostItem"

export const PostList = ({posts, remove}) => {
    return (
        <div>{
            posts.length ? 
            posts.map((post) => {
            return <PostItem remove={remove} post={post} key={post.id}/>
           }) : <div>no posts</div>}
           </div>
    )
}