import React from 'react';


const Home = () => {
  return (
    <section
      id='home'
      className='justify-evenly'
    >
    <div className='title'>
      <h2 className='all-heading'>Choose it.</h2>
      <h2 className='all-heading'>Select it.</h2>
      <h2 className='all-heading'>Buy it.</h2>
      </div> 
    <div>

      {/* <div className="flex min-h-screen items-center justify-center bg-neutral-800"> */}
  <div className="mx-auto max-w-6xl px-6">
    <div className="flex shree">
      <div className="group relative h-[60rem] w-[30rem] cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
        <img className="h-full object-cover transition-all group-hover:scale-125" src="https://images.unsplash.com/photo-1617114919297-3c8ddb01f599?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="" />
        <div className="invisible absolute inset-0 bg-gradient-to-b from-green-500/20 to-black group-hover:visible">
          <div className="absolute inset-x-5 bottom-6">
            <div className="flex gap-3 text-white">
              <div>
                <p className="font-sembold text-xl text-gray-100">Men's Fashion</p>
                <p className="text-gray-300">New Design</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="group relative h-[60rem] w-32 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
        <img className="h-full object-cover transition-all group-hover:scale-125" src="https://images.unsplash.com/photo-1519235106638-30cc49b5dbc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1536&q=80" alt="" />
        <div className="invisible absolute inset-0 bg-gradient-to-b from-green-500/20 to-black group-hover:visible">
          <div className="absolute inset-x-5 bottom-6">
            <div className="flex gap-3 text-white">
              <div>
                <p className="font-sembold text-xl text-gray-100">Women Fashion</p>
                <p className="text-gray-300">Best Design</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="group relative h-[60rem] w-32 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
        <img className="h-full object-cover transition-all group-hover:scale-125" src="https://images.unsplash.com/photo-1554342321-0776d282ceac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8a2lkfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" alt="" />
        <div className="invisible absolute inset-0 bg-gradient-to-b from-green-500/20 to-black group-hover:visible">
          <div className="absolute inset-x-5 bottom-6">
            <div className="flex gap-3 text-white">
              <div>
                <p className="font-sembold text-xl text-gray-100">Child Fashion</p>
                <p className="text-gray-300">New Design</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="group relative h-[60rem] w-32 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
        <img className="h-full object-cover transition-all group-hover:scale-125" src="https://images.unsplash.com/photo-1608649672403-3609a75eae18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80" alt="" />
        <div className="invisible absolute inset-0 bg-gradient-to-b from-green-500/20 to-black group-hover:visible">
          <div className="absolute inset-x-5 bottom-6">
            <div className="flex gap-3 text-white">
              <div>
                <p className="font-sembold text-xl text-gray-100">Old Fashion</p>
                <p className="text-gray-300">Better Design</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>


    </section>
  );
};

export default Home;
