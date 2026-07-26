const App = () => {
  const paragraphCss = { 
    color: "#ccc", 
    backgroundColor: "#333",
    padding: "8px",
    borderRadius: "4px"
  }
  return (
    <>
    <h2 style={
      { color: "red", backgroundColor: "yellow" }
    }>
      Welcome to Reactjs
    </h2>

    <p style={paragraphCss}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic rerum soluta repellendus error accusamus fugiat fuga doloremque temporibus laborum iusto vero sit laboriosam ipsam nisi, saepe natus blanditiis asperiores numquam.
    </p>

    <footer className="bottom">
      Copyright &copy; 2026
    </footer>
    </>
  )
}

export default App 

// camelCase
// snake_case