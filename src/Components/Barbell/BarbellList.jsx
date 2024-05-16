
import CategoryMenu from "./BarbellMenu"
import { Link } from "react-router-dom"


export const CategoryData = [
  {
    id: 1,
    name: 'Beach Press',
    image: '/images/beachPress.jpg',
    price: '₱1500',
    teacher: 'johm dou',
    category: '/Barbell/BenchPress',
    subcategories: ['Chest']
  },
  {
    id: 2,
    name: 'Push-ups',
    image: '/images/img2.jpg',
    price: '₱1500',
    teacher: 'andoy',
    category: '/Barbell/PushUps',
    subcategories: ['Upper Body']
  },
  {
    id: 3,
    name: 'Pull-ups',
    image: '/images/img3.jpg',
    price: '₱1500',
    teacher: 'Lando Sanchez',
    category: '/Barbell/PullUps',
    subcategories: ['Upper Body']
  },
  {
    id: 4,
    name: 'Shoulder Press',
    image: '/images/img2.jpg',
    price: '₱1500',
    teacher: 'Lando Sanchez',
    category: '/Barbell/ShoulderPress',
    subcategories: ['Upper Body']
  },
  {
    id: 5,
    name: 'Bicep Curls',
    image: '/images/img5.jpg',
    price: '₱1500',
    teacher: 'Lando Sanchez',
    category: '/Barbell/BicepCurls',
    subcategories: ['Upper Body']
  },
  {
    id: 6,
    name: 'Tricep Dips',
    image: '/images/img2.jpg',
    price: '₱1500',
    teacher: 'Lando Sanchez',
    category: '/Barbell/TricepDips',
    subcategories: ['Upper Body']
  },
];



const SideBarList = () => {
  return(
    <CategoryMenu>
      <div className="">       
        <h2 className="font-bold mb-3 text-lg text-bgButton flex justify-center items-center">Barbell</h2>
      
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
        
      
    </CategoryMenu>
  )
}
export default SideBarList