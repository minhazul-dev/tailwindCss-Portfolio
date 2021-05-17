import React from 'react';
import html from '../../images/iconfinder_html5_3069649.png'
import css from '../../images/iconfinder_code-programming-css-style-develop-layout-language_652584.png'
import react from '../../images/React.js_logo-512.png'
import js from '../../images/iconfinder_code-programming-javascript-software-develop-command-language_652581.png'
import mongo from '../../images/iconfinder_mongodb_1012822.png'
import node from '../../images/iconfinder_node_3069651.png'
import git from '../../images/iconfinder_Git_7422463.png'
import github from '../../images/iconfinder_GitHub_4745725.png'
import heroku from '../../images/heroku.png'
import fire from '../../images/iconfinder_google_firebase_1175532.png'
import npm from '../../images/iconfinder_NPM_7422492.png'
import es from '../../images/ecmascript6-logo.png'
import Navbar from '../Shared/Navbar/Navbar';

const Skills = () => {

    const SkillsData = [
        {
            name: 'HTML5',
            img: html,

        },
        {
            name: 'CSS3',
            img: css,

        },
        {
            name: 'React',
            img: react,

        },
        {
            name: 'Javascript',
            img: js,

        },
        {
            name: 'Es6',
            img: es,

        },
        {
            name: 'Node',
            img: node,

        },
        // {
        //     name: 'Express',
        //     img: unique,

        // },
        {
            name: 'MongoDb',
            img: mongo,

        },
        {
            name: 'Github',
            img: github,

        },
        {
            name: 'git',
            img: git,

        },
        {
            name: 'Heroku',
            img: heroku,

        },
        {
            name: 'Firebase',
            img: fire,

        },
        {
            name: 'NPM',
            img: npm,

        },
        // {
        //     name: 'Netlify',
        //     img: unique,

        // },
        // {
        //     name: 'PostMan',
        //     img: unique,

        // },


    ]

    return (
        <main className="">
<Navbar/>
            <div className="mt-5 ml-5">
                <h2 className=" text-4xl md:text-center text-base">Skills</h2>
                <div className="container mt-4 mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {
                            SkillsData.map(skills => (<div className=" w-50 h-50 card m-2 cursor-pointer border border-gray-600 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
                                <div className="m-3">
                                    <h2 className="text-lg mb-3 items-end">{skills.name}</h2>
                                    {/* <p className="font-light font-mono text-sm text-gray-700 hover:text-gray-900 transition-all duration-200">lorem</p> */}
                                    <div className="items-center ">
                                        <img className="w-20 h-20 items-center" src={skills.img} alt="" />
                                    </div>
                                  </div>
                                </div>))
                        }
                    </div>
                </div>
            </div>

        </main>
    );
};

export default Skills;