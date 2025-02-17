function Alert({message}) {
  return (
    <>
   {message && <div className="alert alert-success alert-dismissible fade show mt-1" role="alert">
  <strong>{message}</strong> 
  </div>}
  </>
  )
}

export default Alert