const AdminSidebar = ({isOpen}) => {
  return(
    <div className={`bg-bgButton col-span-2 1xs:hidden md:block h-screen transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-[150%]'}`}>
        andoy
    </div>
  )
}
export default AdminSidebar