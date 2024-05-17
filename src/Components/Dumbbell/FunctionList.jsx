

import { Link } from "react-router-dom"
import FunctionMenu from "./FunctionMenu";


export const CategoryData = [
  {
    id: 1,
    name: 'Step-Up',
    image: '/images/stepup.jpg',
    price: '₱3500',
    teacher: 'johm dou',
    category: '/Dumbbell/Step-Up',
    subcategories: ['Hips']
  },
  {
    id: 2,
    name: 'Lateral Raise',
    image: '/images/lateralraise.jpg',
    price: '₱2800',
    teacher: 'andoy',
    category: '/Dumbbel/LateralRaise',
    subcategories: ['Shoulders']
  },
  {
    id: 3,
    name: 'Fly',
    image: '/images/fly.jpg',
    price: '₱1500',
    teacher: 'Lando Sanchez',
    category: '/Dumbbell/Fly',
    subcategories: ['Chest']
  },
  {
    id: 4,
    name: 'Arnold Press',
    image: '/images/arnoldpress.jpg',
    price: '₱3200',
    teacher: 'Lando Sanchez',
    category: '/Dumbbell/ArnoldPress',
    subcategories: ['Shoulders']
  },
  {
    id: 5,
    name: 'Pull Over',
    image: '/images/pullover.jpg',
    price: '₱2400',
    teacher: 'Lando Sanchez',
    category: '/Dumbbell/PullOver',
    subcategories: ['Chest']
  },
  {
    id: 6,
    name: 'Kick Back',
    image: '/images/kickback.jpg',
    price: '₱1500',
    teacher: 'Lando Sanchez',
    category: '/Dumbbell/KickBack',
    subcategories: ['Triceps']
  },
];



const FunctionList = () => {
  return(
    <FunctionMenu>
      <div className="">       
        <h2 className="font-bold mb-3 text-lg text-bgButton flex justify-center items-center">Dumbbell Exercises</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
        {
          CategoryData.map(category => (
            <div key={category.id} className="shadow-lg relative p-2 rounded-lg bg-fontColor cursor-pointer hover:scale-90 transition-all ease-in-out hover:shadow-[#bbf7d0]">
              <Link to={category.category}>
                <img src={category.image} alt={category.name} className="h-[140px] w-full md:h-[200px] object-fit rounded-lg"/>

                <div className="flex justify-between mx-1 items-start pt-1">
                  <div>
                    <h1 className="font-bold text-xs md:text-md lg:md">{category.name}</h1>
                    <h1 className="text-xs">{category.teacher}</h1>
                    {category.subcategories.map(subcategory => (
                      <h6 key={subcategory} className="absolute top-2 left-2 text-xs text-fontColor bg-[#34d399] p-1 rounded-sm md:text-md lg:text-md font-medium">{subcategory}
                      </h6>
                    

                    ))}
                  </div>
                  <div>                     
                    <p className="text-xs">{category.price}</p>
                        
                  </div>
                
                </div>
              </Link>
              
            </div>
          ))
        }

      </div>
    </div>
        
      
    </FunctionMenu>
  )
}
export default FunctionList