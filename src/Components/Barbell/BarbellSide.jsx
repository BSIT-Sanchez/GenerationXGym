import { Link } from "react-router-dom";
import { categories } from "../CategoryList"
import { IconContext } from "react-icons";

const CategorySideBar = () => {
  return(
    <div className="grid grid-cols-3 mb-3 md:grid-cols-1 gap-2 md:mb-0 ">
      <h2 className="font-bold mb-3 text-lg text-bgButton hidden md:block">Categories</h2>
      {
        categories.map((category, index) => (
          <Link to={'/'+category.name} key={index} className="flex justify-start items-center gap-1 md:gap-2 border rounded-lg cursor-pointer mb-3 p-2 md:mr-10 hover:bg-[#faf5ff] hover:border-[#c084fc] hover:text-[#c084fc] hover:shadow-md transition-all ease-in-out">
            <IconContext.Provider value={{size: '1.5em',color: '#34d399'}}>
                {category.icon}
            </IconContext.Provider>

            <h2 className="text-sm font-normal">{category.name}</h2>
          </Link>
        ))
      } 
    </div>
  )
}
export default CategorySideBar