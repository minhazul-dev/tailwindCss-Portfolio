import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import reactIntro from '../../images/Blogs Imgs/react intro.png'
import dtypes from '../../images/Blogs Imgs/d types.png'
import fundamen from '../../images/Blogs Imgs/fundamen.png'

const blogData= [
    { name: 'A Simple Introduction To React',
     desc:'React is a declarative, efficient, and flexible JavaScript library it is used to build user interfaces....',
     img: reactIntro
    },
    { name: 'Data Types In Javascript',
     desc:'A data type in a language defines the type of data a variable can hold. In this article, we will discuss the various data types in JavaScript in detail:....',
     img: dtypes
    },
    { name: 'Some fundamentals of Javascript.',
     desc:'In this blog i have tried to simply discuss about the fundamentals of js:....',
     img: fundamen
    },
]

const AllBlogs = () => {
    return (
        <section className="text-gray-900 body-font">
            <Navbar/>
            <p class="text-purple-600 text-center mt-5 underline "> Blogs</p>
        <div className="container px-5 py-24 mx-auto">
        
          <div className="flex flex-wrap -m-4">
           {
               blogData.map(blog=> <div className="p-4 md:w-1/3">
               <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                 <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={blog.img} alt="blog" />
                 <div className="p-6">
                   {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> */}
                   <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{blog.name}</h1>
                   <p className="leading-relaxed mb-3">{blog.desc}</p>
                   <div className="flex items-center flex-wrap ">
                     <a target="_blank" href="https://minhazul-dev.medium.com/a-simple-introduction-to-react-4433a3d4cf7e" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                     <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                     Ream in medium
                      </button>
                     </a>
                   </div>
                 </div>
               </div>
             </div>)
           }
           
          </div>
        </div>
      </section>
    );
};

export default AllBlogs;