

import { Link } from "react-router-dom"
import CompoundMenu from "./CompoundMenu";


export const CategoryData = [
  {
    id: 1,
    name: 'Smith Squat',
    image: '/images/smithmachine.jpg',
    price: '₱4,500',
    teacher: '',
    category: '/Machine/SmithSquat',
    subcategories: ['Hips']
  },
  {
    id: 2,
    name: 'Calf Raise',
    image: '/images/calfraise.jpg',
    price: '₱1,500',
    teacher: '',
    category: '/Machine/CalfRaise',
    subcategories: ['Calves']
  },
  {
    id: 3,
    name: 'Rear Lunge',
    image: '/images/rearlunge.jpg',
    price: '₱4,300',
    teacher: '',
    category: '/Machine/RearLunge',
    subcategories: ['Quadriceps']
  },
  {
    id: 4,
    name: 'Drag Curl',
    image: '/images/dragcurl.jpg',
    price: '₱2,500',
    teacher: '',
    category: '/Machine/DragCurl',
    subcategories: ['Biceps']
  },
  {
    id: 5,
    name: 'Hex Press',
    image: '/images/hexpress.jpg',
    price: '₱3,500',
    teacher: '',
    category: '/Machine/HexPress',
    subcategories: ['Chest']
  },
  {
    id: 6,
    name: 'Sumo Squat',
    image: '/images/sumo.jpg',
    price: '₱1,500',
    teacher: '',
    category: '/Machine/SumoSquat',
    subcategories: ['Hips']
  },
];



const CompoundList = () => {
  return(
    <CompoundMenu>
      <div className="">       
        <h2 className="font-bold mb-3 text-lg text-bgButton flex justify-center items-center">Machine Exercises</h2>
      
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
        
      
    </CompoundMenu>
  )
}
export default CompoundList