import { MyInput } from "../UI/MyInput/MyInput"
import { MySelect } from "../UI/MySelect/MySelect"

export const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
      <MyInput value={filter.searchQuery} onChange={(e) => setFilter({...filter, searchQuery: e.target.value})}/>
    <MySelect sort={filter.sort} onChange={(sort) => setFilter({...filter, sort})} defaultValue='Сортировка' options={[{value: 'title', name: 'По названию'}, {value: 'body', name: 'По описанию'}]} />
     </div>
    )
}