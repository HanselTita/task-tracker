const Button = ({ color, text }) => {
  const onClick = () => {
    console.log("Clicked")
  }

  return (
    <div>
      <button onClick={onClick} className="btn" style={{ backgroundColor: color }}>
        {text}
      </button>
    </div>
  )
}

export default Button
