import { useState, useMemo } from "react";
import { Counter } from "./components/Counter";
import { PostList } from "./components/PostList";
import { PostForm } from "./components/PostForm";
import { PostFilter } from "./components/PostFilter";
import { MyModal } from "./UI/MyModal/MyModal";
import { MyButton } from "./UI/MyButton/MyButton";

function App() {
  const [posts, setPosts] = useState([{id: 0, body: 'js luchshiy yazik', title: 'js'}, {id: 1, body: 'go luchshiy yazik', title: 'go'}])

 const createPost = (post) => {
  setPosts([...posts, {id: Math.random(), ...post}])
  setModal(false)
 }

 const removePost = (post) => {
  setPosts(posts.filter((p) => p.id !== post.id))
 }
const [filter,setFilter] = useState({sort: '', searchQuery: ''})
const [modal, setModal] = useState(false)

 const sortedPosts =useMemo(() => {
  if (filter.sort) {
    return [...posts.sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]))]
  }
  return posts
 }, [posts, filter.sort])

 const sortedAndSearchedPosts = useMemo(() => {
  return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.searchQuery.toLowerCase()))
 }, [filter.searchQuery, sortedPosts])

  return (
    <div className="App">
      <MyButton onClick={() => setModal(true)}>Создать пост</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
     <Counter />
    <PostFilter filter={filter} setFilter={setFilter} />
     <PostList remove={removePost} posts={sortedAndSearchedPosts}/>

    </div>
  );
}

export default App;
