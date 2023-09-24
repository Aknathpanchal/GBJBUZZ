import React from 'react';
// import { navigation } from '../data';
import { Link } from 'react-scroll';
import { navigation } from '../data';



const Nav = () => {
  return (
    <nav>
      <ul 
      style={{ 
        display: 'flex', 
        gap: '8%', 
        textTransform: 'capitalize', 
        fontSize: '15px' 
      }}
      >
        {navigation.map((item, idx) => {
          return (
            <li
            style={{color: 'white', 
            cursor: 'pointer'}}
              // className='text-white hover:text-accent cursor-pointer'
              key={idx}
            >
              <Link
                to={item.href}
                activeClass='active'
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                style={{
                                  cursor: 'pointer',
                                  transitionDuration: 'color 300ms',}}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;