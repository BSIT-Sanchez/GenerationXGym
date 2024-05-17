

import { Link } from "react-router-dom"
import IsolationMenu from "./IsolationMenu";


export const CategoryData = [
  {
    id: 1,
    name: 'KettlebellSwing',
    image: '/images/kettlebellswing.jpg',
    price: '₱2100',
    teacher: 'johm dou',
    category: '/Kettlebell/KettlebellSwing',
    subcategories: ['Harmstrings']
  },
  {
    id: 2,
    name: 'Snatch',
    image: '/images/snatch.jpg',
    price: '₱2300',
    teacher: 'andoy',
    category: '/Kettlebell/Snatch',
    subcategories: ['Weightlifting']
  },
  {
    id: 3,
    name: 'Seasaw Press',
    image: '/images/seasawpress.jpg',
    price: '₱3100',
    teacher: 'Lando Sanchez',
    category: '/Kettlebell/SeasawPress',
    subcategories: ['Shoulders']
  },
  {
    id: 4,
    name: 'Burpee',
    image: '/images/burpee.jpg',
    price: '₱1500',
    teacher: 'Lando Sanchez',
    category: '/Kettlebell/Burpee',
    subcategories: ['Plyometrics']
  },
  {
    id: 5,
    name: 'Double Jerk',
    image: '/images/doublejerk.jpg',
    price: '₱2400',
    teacher: 'Lando Sanchez',
    category: '/Kettlebell/DoubleJerk',
    subcategories: ['Shoulders']
  },
  {
    id: 6,
    name: 'Bent Press',
    image: '/images/bentpress.jpg',
    price: '₱1500',
    teacher: 'Lando Sanchez',
    category: '/Kettlebell/BentPress',
    subcategories: ['Waist']
  },
];



const IsolationList = () => {
  return(
    <IsolationMenu>
      <div className="">       
        <h2 className="font-bold mb-3 text-lg text-bgButton flex justify-center items-center">Kettlebell Exercises</h2>
      
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
        
      
    </IsolationMenu>
  )
}
export default IsolationList