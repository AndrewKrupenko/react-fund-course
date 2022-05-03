import classes from './MainButton.module.css'
import classNames from "classnames"

const MainButton = ({children, rootClass, ...props}) => {
  return (
    <button {...props} className={classNames(classes.mainBtn, rootClass)}>
      {children}
    </button>
  )
}

export default MainButton