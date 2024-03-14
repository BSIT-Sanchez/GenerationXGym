import React from 'react'
import {Link} from 'react-router-dom';

function Footer() {
  const Links = [
  {
    title: 'Company',
    links: [
      {
        name: 'Home',
        link:'/'
      },
      {
        name: 'Instructor',
        link:'/instructor'
      },
      {
        name: 'Classes',
        link:'/classes'
      },
      {
        name: 'About',
        link:'/about'
      },
    ]
  },
  {
    title: 'Top Categories',
    links: [
      {
        name: 'Upper',
        link:'#'
      },
      {
        name: 'Core',
        link:'#'
      },
      {
        name: 'Lower',
        link:'#'
      },
      {
        name: 'Functional ',
        link:'#'
      },
    ]
  },
  {
    title: 'My Account',
    links: [
      {
        name: 'Dashboard',
        link:'/dashboard'
      },
      {
        name: 'My Favorite',
        link:'/favorites'
      },
      {
        name: 'Profile',
        link:'/profile'
      },
      {
        name: 'Change Password',
        link:'/password'
      },
    ]
  },
]
  return (
    <div className='bg-bgFooter dark:bg-fontColor dark:text-bgFooter mt-10 text-fontColor shadow-2xl'>
      <div className='container mx-auto gap-6 grid grid-cols-2 pt-10 px-6 paddingSize md:grid-cols-3 lg:grid-cols-4'>
        {
          Links.map((link, index) => (
            <div key={index} className=''>
              <h3 className='text-bgButton'>{link.title}</h3>
              <ul>
                {link.links.map((text,index) => (
                  <li key={index}>
                    <Link to={text.link}>{text.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))
        }
        <div className="">
          <div className='flex justify-start items-center'>
            <img src='/logo.svg' alt='logo'/>
            <h1>Fitness Gym</h1>
          </div>
          <ul>
            
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Footer