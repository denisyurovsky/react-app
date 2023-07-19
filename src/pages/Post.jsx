import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { useFetching } from "../hooks/useFetching";
import postService from "../api/postService";

export const Post = () => {
    const params = useParams();
    const [post, setPost] = useState('');
    const [comments, setComments] = useState([]);
    const [fetchPost, isLoading, error] = useFetching(async () => {
        const response = await postService.getPostById(params.id);
        setPost(response.data);
    })
    const [fetchComments, isCommentsLoading, isCommentsError] = useFetching(async () => {
        const response = await postService.getCommentsById(params.id);
        setComments(response.data);
    })

    useEffect(() => {
        fetchPost()
        fetchComments()
    }, [])
    return (<div>
        {isLoading ? <div>loading</div> : 
        <>
        <h1>post {params.id}</h1>
        <p>{post.title}</p>
        <p>{post.body}</p>
        </>
        }
        {error && <div>an error occured</div>}
        {isCommentsError && <div>an error occured</div>}
        {isCommentsLoading ? <div>comments loading</div> : 
        comments.map((item) => {
            return <div>
                <h5>{item.email}</h5>
                <div>{item.body}</div>
            </div>
        })
        }
        </div>)
}