import { BsBookmarkStarFill } from "react-icons/bs"
import { Link } from "react-router-dom";


// eslint-disable-next-line react-refresh/only-export-components
export const InstructorList = [
  {
    id: 1,
    name: 'BenchPress',
    image: '/images/beachPress.jpg',
    price: '₱1,500',
    teacher: '',
    category: '/Barbell',
    subcategories: ['Barbell Exercise']
  },
  {
    id: 2,
    name: 'CrunchFloor',
    image: '/images/crunchfloor.webp',
    price: '₱2,000',
    teacher: '',
    category: '/BWeight',
    subcategories: ['BodyWeight Exercise']
  },
  {
    id: 3,
    name: 'CableCurl',
    image: '/images/cablecurl.jpg',
    price: '₱2,990',
    teacher: '',
    category: '/Cable',
    subcategories: ['Cable Exercise']
  },
  {
    id: 4,
    name: 'Step-Up',
    image: '/images/stepup.jpg',
    price: '₱3,500',
    teacher: '',
    category: '/Dumbbell',
    subcategories: ['Dumbbell Exercise']
  },
  {
    id: 5,
    name: 'KettlebellSwing',
    image: '/images/kettlebellswing.jpg',
    price: '₱2,100',
    teacher: '',
    category: '/Kettlebell',
    subcategories: ['Kettebell Exercise']
  },
  {
    id: 6,
    name: 'SmithSquat ',
    image: '/images/smithmachine.jpg',
    price: '₱4,500',
    teacher: '',
    category: '/Machine',
    subcategories: ['Machine Exercise']
  },
];

const ExercisesList = () => {
  return(
    <div>
      <div className="categoryTitle mt-10 dark:bg-bgFooter">
        <BsBookmarkStarFill className="text-bgButton sm:w-6 sm:h-6 w-4 h-4"/>
        <h2 className=" font-bold text-lg sm:text-xl dark:text-fontColor">Popular Exercises</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
        {
          InstructorList.map(category => (
            <div key={category.id} className="shadow-lg relative p-2 rounded-lg bg-fontColor cursor-pointer hover:scale-90 transition-all ease-in-out hover:shadow-[#bbf7d0]">
              <Link to={category.category + '/' +category.name}>
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
  )
}
export default ExercisesList