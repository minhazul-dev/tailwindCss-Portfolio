import React from 'react';

import unique from "../../images/unique.png"
import expGrocery from "../../images/exp grocery.png"
import movieBank from "../../images/movieBank.png"
import Navbar from '../Shared/Navbar/Navbar';
import ScrollAnimation from 'react-animate-on-scroll';




//fake data
const projectData = [
    {
        name: 'Unique Templates ',
        description: '"UNIQUE TEMPLATE" is an online template buying site for your website or product. For all this you must have to log in with google to enjoy all this facilities. In this project Some functionality is protected for admins. Different dashboard for users and admin',
        technologies: 'React Js, React Router, Node.js, MongoDB, Firebase Authentication, Bootstrap',
        img: unique,
        website: 'https://unique-templates.web.app/',
        github: 'https://github.com/minhazul-dev/unique-templates-client'
    },
    {
        name: 'Express Grocery ',
        description: '"Express Grocery" is an online grocery store with variety of products. You can buy as well as add products to this website. For all this you must have to log in with google to enjoy all this facilities. This is a full stack project which is connected to database (Mongodb).',
        technologies: 'FrontEnd: React, Bootstrap,firebase. BackEnd: Nodejs,Express. DataBase: Mongodb.',
        img: expGrocery,
        website: 'https://express-grocery-3fd86.web.app/',
        github: 'https://github.com/minhazul-dev/express-grocery'
    },
    {
        name: 'Movie Bank ',
        description: 'A fully responsive website having a lots of movies. Clicking on show details button redirects to a new page and shows specific movie details. All the data are being loaded from TMBD Api.',
        technologies: 'React, Bootstrap.',
        img: movieBank,
        website: 'https://movie-bank01.netlify.app/',
        github: 'https://github.com/minhazul-dev/movie-bank'
    },
    {
        name: 'Premiere league team details ',
        description: 'This is a full responsive dynamic website. It consists of a home page of team logos, names with an "Explore" button which redirects to a different page to show specific details of the selected team',
        technologies: 'React, Bootstrap, React router. Icons: Fontawesome',
        img: unique,
        website: 'https://premiere-league-teams.netlify.app/',
        github: 'https://github.com/minhazul-dev/premire-league-details'
    },

]

const Projects = () => {
    return (
<ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
        <div className="pt-6 pb-12 bg-gray-300">
            <Navbar />
            <div id="card" className>
                <h2 className="text-center font-serif  uppercase text-4xl xl:text-5xl m-4">Recent Projects </h2>
                {/* container for all cards */}
                {
                    projectData.map(project => <div>
                        <div className="container w-100 lg:w-4/5 mx-auto flex flex-col ">
                            {/* card */}
                            <div v-for="card in cards" className="flex flex-col md:flex-row overflow-hidden
                                        bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">
                                {/* media */}
                                <div className="h-64 w-auto md:w-1/2">
                                    <img src={project.img} className="inset-0 h-full w-full object-cover object-center" />
                                </div>
                                {/* content */}
                                <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                                    <h3 className="font-semibold text-lg leading-tight truncate text-black"> {project.name}</h3>
                                    <p className="mt-2 text-black">
                                        {project.description}
                                    </p>
                                    <p className="mt-2 text-purple-800 ">
                                        Technology Used: {project.technologies}
                                    </p>
                                    <p className="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                                        <a target="_blank" href={project.website}>
                                            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                                Live Site
                                       </button>
                                       </a>
                                       <a target="_blank" href={project.github}>
                                       <button class=" ml-3 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                            Github
                                      </button>
                                       </a>
                                    </p>
                                </div>
                            </div>{/*/ card*/}
                        </div>{/*/ flex*/}
                    </div>)
                }
            </div>
        </div>
        </ScrollAnimation>

        //     <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        //     {/*Card 1*/}
        //     <div className="rounded overflow-hidden shadow-lg">
        //       <img className="w-full" src="/mountain.jpg" alt="Mountain" />
        //       <div className="px-6 py-4">
        //         <div className="font-bold text-xl mb-2">Mountain</div>
        //         <p className="text-gray-700 text-base">
        //           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        //         </p>
        //       </div>
        //       <div className="px-6 pt-4 pb-2">
        //         <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        //         <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        //         <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        //       </div>
        //     </div>
        //     {/*Card 2*/}
        //     <div className="rounded overflow-hidden shadow-lg">
        //       <img className="w-full" src="/river.jpg" alt="River" />
        //       <div className="px-6 py-4">
        //         <div className="font-bold text-xl mb-2">River</div>
        //         <p className="text-gray-700 text-base">
        //           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        //         </p>
        //       </div>
        //       <div className="px-6 pt-4 pb-2">
        //         <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        //         <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        //         <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#summer</span>
        //       </div>
        //     </div>
        //     {/*Card 3*/}
        //     <div className="rounded overflow-hidden shadow-lg">
        //       <img className="w-full" src="/forest.jpg" alt="Forest" />
        //       <div className="px-6 py-4">
        //         <div className="font-bold text-xl mb-2">Forest</div>
        //         <p className="text-gray-700 text-base">
        //           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        //         </p>
        //       </div>
        //       <div className="px-6 pt-4 pb-2">
        //         <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        //         <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        //         <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fall</span>
        //       </div>
        //     </div>
        //     <div className="rounded overflow-hidden shadow-lg">
        //       <img className="w-full" src="/forest.jpg" alt="Forest" />
        //       <div className="px-6 py-4">
        //         <div className="font-bold text-xl mb-2">Forest</div>
        //         <p className="text-gray-700 text-base">
        //           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        //         </p>
        //       </div>
        //       <div className="px-6 pt-4 pb-2">
        //         <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        //         <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        //         <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fall</span>
        //       </div>
        //     </div>
        //     <div className="rounded overflow-hidden shadow-lg">
        //       <img className="w-full" src="/forest.jpg" alt="Forest" />
        //       <div className="px-6 py-4">
        //         <div className="font-bold text-xl mb-2">Forest</div>
        //         <p className="text-gray-700 text-base">
        //           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        //         </p>
        //       </div>
        //       <div className="px-6 pt-4 pb-2">
        //         <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        //         <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        //         <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fall</span>
        //       </div>
        //     </div>
        //     <div className="rounded overflow-hidden shadow-lg">
        //       <img className="w-full" src="/forest.jpg" alt="Forest" />
        //       <div className="px-6 py-4">
        //         <div className="font-bold text-xl mb-2">Forest</div>
        //         <p className="text-gray-700 text-base">
        //           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        //         </p>
        //       </div>
        //       <div className="px-6 pt-4 pb-2">
        //         <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        //         <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        //         <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fall</span>
        //       </div>
        //     </div>
        //   </div>
    );
};

export default Projects;