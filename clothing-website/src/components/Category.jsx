import React from "react";
import Categories from './Categories';

const Category = () => {
  return (
    <section className="section bg-secondary" id="category" style={{display:"flex",flexDirection:'column'}}>
      
      <div>
      <h2 style={{fontSize:'5rem'}}>Womens Categories</h2>
      </div>
      <div>
      <Categories/>
      </div>
     
    </section>
  );
};

export default Category;
