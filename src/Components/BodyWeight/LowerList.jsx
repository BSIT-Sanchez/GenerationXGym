

import { Link } from "react-router-dom"
import LowerMenu from "./LowerMenu";


export const CategoryData = [
  {
    id: 1,
    name: 'Crunch Floor',
    image: '/images/crunchfloor.webp',
    price: '₱2000',
    teacher: 'Jobert Camo',
    category: '/BodyWeight/CrunchFloor',
    subcategories: ['Waist']
  },
  {
    id: 2,
    name: 'Pull-Up',
    image: '/images/pullup.jpg',
    price: '₱3000',
    teacher: 'Alexa Dumo',
    category: '/BodyWeight/PullUp',
    subcategories: ['Back']
  },
  {
    id: 3,
    name: 'Push-Up',
    image: '/images/pushup.webp',
    price: '₱1000',
    teacher: 'Julius Dela Torre',
    category: '/BodyWeight/PushUp',
    subcategories: ['Chest']
  },
  {
    id: 4,
    name: 'Front Plank',
    image: '/images/frontplank.jpg',
    price: '₱1500',
    teacher: 'Nathaniel Ursua',
    category: '/BodyWeight/FrontPlank',
    subcategories: ['Waist']
  },
  {
    id: 5,
    name: 'Calf Raises',
    image: '/images/img5.jpg',
    price: '₱1500',
    teacher: 'Lando Sanchez',
    category: '/Lower/CalfRaises',
    subcategories: ['Lower Body']
  },
  {
    id: 6,
    name: 'Hamstring Curls',
    image: '/images/img2.jpg',
    price: '₱1500',
    teacher: 'Lando Sanchez',
    category: '/Lower/HamstringCurls',
    subcategories: ['Lower Body']
  },
];



const LowerList = () => {
  return(
    <LowerMenu>
      <div className="">       
        <h2 className="font-bold mb-3 text-lg text-bgButton flex justify-center items-center">BodyWeight Exercises</h2>
      
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
        
      
    </LowerMenu>
  )
}
export default LowerList