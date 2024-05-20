
import { Link } from "react-router-dom"
import CoreMenu from "./CoreMenu";


export const CategoryData = [
  {
    id: 1,
    name: 'Cable Curl',
    image: '/images/cablecurl.jpg',
    price: '₱2,990',
    teacher: '',
    category: '/Cable/CableCurl',
    subcategories: ['Biceps']
  },
  {
    id: 2,
    name: 'Pull Down',
    image: '/images/pulldown.jpg',
    price: '₱2,100',
    teacher: '',
    category: '/Cable/PullDown',
    subcategories: ['Back']
  },
  {
    id: 3,
    name: 'Biceps Curl',
    image: '/images/bicepscurl.jpg',
    price: '₱1,500',
    teacher: '',
    category: '/Cable/BicepsCurl',
    subcategories: ['Biceps']
  },
  {
    id: 4,
    name: 'Hammer Curl',
    image: '/images/hammercurl.jpg',
    price: '₱4,500',
    teacher: '',
    category: '/Cable/HammerCurl',
    subcategories: ['Forearms']
  },
  {
    id: 5,
    name: 'Push Down',
    image: '/images/pushdown.jpg',
    price: '₱2,600',
    teacher: '',
    category: '/Cable/PushDown',
    subcategories: ['Back']
  },
  {
    id: 6,
    name: 'Seated Row',
    image: '/images/seatedrow.jpg',
    price: '₱1,700',
    teacher: '',
    category: '/Cable/SeatedRow',
    subcategories: ['Back']
  },
];



const CoreList = () => {
  return(
    <CoreMenu>
      <div className="">       
        <h2 className="font-bold mb-3 text-lg text-bgButton flex justify-center items-center">Cable Exercises</h2>
      
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
        
      
    </CoreMenu>
  )
}
export default CoreList