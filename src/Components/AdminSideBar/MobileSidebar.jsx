const MobileSidebar = ({isOpen}) => {
  return(
    <div className={`bg-bgButton col-span-2 1xs:block mt-1 md:hidden h-screen transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-[150%]'}`}>
        <div className="container mx-auto">
          hellosdods
        </div>
    </div>
  )
}
export default MobileSidebar