const InstructorDashboard = ()  => {
  const username = localStorage.getItem('username');

  return(
    <div>
      <h1>welcome , {username ? username : 'Guest'}</h1>

    </div>
  )
}
export default InstructorDashboard