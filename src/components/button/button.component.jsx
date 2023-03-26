const Button = ({ type, className, name, onClick }) => {
  const styles = () => {
    if (type === 'primary') {
      return 'bg-primary'
    }

    if (type === 'secondary') {
      return 'bg-secondary'
    }
  }

  return (
    <button className={`text-white font-bold rounded-md cursor-pointer hover:scale-110 ease-linear duration-500 ${styles()} ${className}`} onClick={() => onClick()}>
      {name}
    </button>
  )
}

export default Button
