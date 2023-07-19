import { MyInput } from "../UI/MyInput/MyInput"
import { MyButton } from "../UI/MyButton/MyButton"
import { useState } from "react";
export const PostForm = ({create}) => {
    const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addNewPost = (e) => {
    e.preventDefault()
    create({title, body})
    setBody('')
    setTitle('')
  }
    return (
        <form>
        <MyInput value={title}  onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Название поста"/>
        <MyInput value={body} onChange={(e) => setBody(e.target.value)} type="text" placeholder="Описание"/>
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
       </form>
    )
}