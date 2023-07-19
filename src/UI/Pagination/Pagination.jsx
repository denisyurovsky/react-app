import { MyButton } from "../MyButton/MyButton"

export const Pagination = ({pagesArray, setPage, page}) => {
    return (
        <>
        {pagesArray.map((p) => {
            return <MyButton style={{backgroundColor: p == page ? 'red' : 'unset'}} onClick={() => setPage(p)} key={p}>{p}</MyButton>
          })}
        </>
    )
}