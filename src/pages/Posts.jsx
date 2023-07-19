import { useEffect, useState } from "react";
import { Counter } from "./../components/Counter";
import { PostList } from "./../components/PostList";
import { PostForm } from "./../components/PostForm";
import { PostFilter } from "./../components/PostFilter";
import { MyModal } from "./../UI/MyModal/MyModal";
import { MyButton } from "./../UI/MyButton/MyButton";
import { usePosts } from "./../hooks/usePosts";
import postService from "./../api/postService";
import { useFetching } from "./../hooks/useFetching";
import {getPageCount, useGetPagesArray} from './../utils/pages'
import { Pagination } from "./../UI/Pagination/Pagination";

export const Posts = () => {
    const [posts, setPosts] = useState([{id: 0, body: 'js luchshiy yazik', title: 'js'}, {id: 1, body: 'go luchshiy yazik', title: 'go'}])
    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
      const response = await postService.getAll(limit, page)
      setPosts(response.data)
      setTotalPages(getPageCount(response.headers['x-total-count'], limit))
    })
    const [filter,setFilter] = useState({sort: '', searchQuery: ''})
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const pagesArray = useGetPagesArray(totalPages)
  
   const createPost = (post) => {
    setPosts([...posts, {id: Math.random(), ...post}])
    setModal(false)
   }
   const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
   }
  
  useEffect(() => {
    fetchPosts();
   }, [page])
  
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.searchQuery)
  
    return (
      <div className="App">
       <Counter />
        <MyButton onClick={() => setModal(true)}>Создать пост</MyButton>
        <MyModal visible={modal} setVisible={setModal}>
          <PostForm create={createPost}/>
        </MyModal>
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && <h1>error occured</h1>}
      {isPostsLoading ? <h1>posts loading...</h1> : <PostList remove={removePost} posts={sortedAndSearchedPosts}/>}
      <Pagination pagesArray={pagesArray} setPage={setPage} page={page}/>
      </div>
    );
  }
