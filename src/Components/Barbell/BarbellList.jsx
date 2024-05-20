
import CategoryMenu from "./BarbellMenu"
import { Link } from "react-router-dom"


// eslint-disable-next-line react-refresh/only-export-components
export const CategoryData = [
  {
    id: 1,
    name: 'Beach Press',
    image: '/images/beachPress.jpg',
    price: '₱1,500',
    teacher: '',
    category: '/Barbell/BenchPress',
    subcategories: ['Chest']
  },
  {
    id: 2,
    name: 'Full Squat',
    image: '/images/fullsquat.jpg',
    price: '₱2,360',
    teacher: '',
    category: '/Barbell/FullSquat',
    subcategories: ['Quadriceps']
  },
  {
    id: 3,
    name: 'Deadlift',
    image: '/images/deadlift.jpg',
    price: '₱3,100',
    teacher: '',
    category: '/Barbell/Deadlift',
    subcategories: ['Hips']
  },
  {
    id: 4,
    name: 'Reverse Curl',
    image: '/images/reversecurl.jpg',
    price: '₱1,200',
    teacher: '',
    category: '/Barbell/ReverseCurl',
    subcategories: ['Forearms']
  },
  {
    id: 5,
    name: 'Front Squat',
    image: '/images/frontsquat.jpg',
    price: '₱3,000',
    teacher: '',
    category: '/Barbell/FrontSquat',
    subcategories: ['Hips']
  },
  {
    id: 6,
    name: 'Incline Row',
    image: '/images/inclinerow.jpg',
    price: '₱2,500',
    teacher: '',
    category: '/Barbell/InclineRow',
    subcategories: ['Back']
  },
];



const SideBarList = () => {
  return(
    <CategoryMenu>
      <div className="">       
        <h2 className="font-bold mb-3 text-lg text-bgButton flex justify-center items-center">Barbell Exercises</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
        {
          CategoryData.map(category => (
            <div key={category.id} className="shadow-lg relative p-2 rounded-lg bg-fontColor cursor-pointer hover:scale-90 transition-all ease-in-out hover:shadow-[#bbf7d0]">
              <Link to={category.category}>
                <img src={category.image} alt={category.name} className="h-[140px] w-full md:h-[200px] object-fit rounded-lg"/>

                <div className="flex justify-between mx-1 items-start pt-1">
                  <div>
                    <h1 className="font-bold text-xs md:text-md lg:md dark:text-bgFooter">{category.name}</h1>
                    <h1 className="text-xs">{category.teacher}</h1>
                    {category.subcategories.map(subcategory => (
                      <h6 key={subcategory} className="absolute top-2 left-2 text-xs text-fontColor bg-[#34d399] p-1 rounded-sm md:text-md lg:text-md font-medium">{subcategory}
                      </h6>
                    

                    ))}
                  </div>
                  <div>                     
                    <p className="text-xs dark:text-bgFooter">{category.price}</p>
                        
                  </div>
                
                </div>
              </Link>
              
            </div>
          ))
        }

      </div>
    </div>
        
      
    </CategoryMenu>
  )
}
export default SideBarList