import classess from './MyButton.module.css'
export const MyButton = ({children, ...props}) => {
    return (
        <button {...props} className={classess.myBtn}>
            {children}
        </button>
    )
}