function Alert({action,message}) {
  return (
    <>
   {message && <div className={`alert alert-${action} alert-dismissible fade show mt-1 text-center fs-4` } role="alert">
  <strong>{message}</strong> 
  </div>}
  </>
  )
}

export default Alert