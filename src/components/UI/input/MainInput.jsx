import classes from './MainInput.module.css'

const MainInput = props => {
  return (
    <input className={classes.mainInput} {...props} />
  )
}

export default MainInput