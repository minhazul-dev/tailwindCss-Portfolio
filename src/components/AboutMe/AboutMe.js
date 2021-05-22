import { BookOpenIcon, EmojiHappyIcon, SparklesIcon, StarIcon } from '@heroicons/react/outline';
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'
import Navbar from '../Shared/Navbar/Navbar';
import Fade from 'react-reveal/Fade';

const features = [
  {
    name: 'Programming',
    description:
      "If you're having doubts about JavaScript, it's important to know that, since its creation in 1995, JavaScript is pretty much everywhere on the web—and that's not likely to change any time soon. According to the 2019 StackOverflow developer survey, JavaScript is the most commonly used programming language for the seventh year in a row. It is currently used by 94.5% of all websites and, despite originally being designed as a client-side language, JavaScript has now made its way to the server-side of websites, mobile devices and desktop.",
    icon: BookOpenIcon,
  },
  {
    name: 'Playing',
    description:
      "I have a big interest on basketball. Yet not a professional, still learning. Basketball helps me to build confidence and to improve my overall self-esteem. Basketball helps to improve my sleeping habits and reduce stress. Playing basketball, the brain releases 'feel good' hormones such as dopamine and endorphins.",
    icon: EmojiHappyIcon,
  },
  {
    name: 'Travelling',
    description:
      "Travelling is one of the best ways to learn more about yourself. Traveling brings a new set of issues and opportunities. The way you handle those also gives you insight into who you are. You'll come home knowing yourself better, and with a fresh perspective",
    icon: GlobeAltIcon,
  },
  {
    name: 'Learning New Things',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: SparklesIcon,
  },
]

const AboutMe = () => {
    return (
<section>
    <Navbar/>
    <Fade left>
    <div className="py-12 bg-gray-100 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-2xl text-indigo-900 font-semibold tracking-wide uppercase">WEB DEVELOPER</h2>
          <p className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Curious Learner, Athlete, Traveller
          </p>
          <p className="mt-4 max-w-2xl text-xl text-black-500 lg:mx-auto font-bold">
          I am a passionate Web Developer looking forward to bringing that passion to a full-time role. Always interested in learning and doing new things.
          </p>
          <p className="mt-4 max-w-2xl text-xl text-black-500 lg:mx-auto font-bold">
          Currently studying at the department of Computer Science And Engineering at Daffodil International University. I am also an athlete who loves to play football & currently learning basketball. Beside that I love to travel which helps me to know myself better with a fresh & broader perspective. With positive and critical thinking attitude I am an amiable person who likes to meet people, take initiative, overcome challenges and organize programs.

          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900 leading-normal font-bold">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-black-500 leading-normal font-bold ">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    </Fade>

        <div className="container bg-blue-100">
            <p class="text-center font-serif  antialiased sm:subpixel-antialiased md:antialiased ... pt-5 text-5xl">
  EDUCATION
</p>
            <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2019 - 2023(Expected)"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<StarIcon />}
  >
    <p className="vertical-timeline-element-title">Daffodil International University</p>
    <h4 className="vertical-timeline-element-subtitle">Dhaka, Bangladesh</h4>
    <p>
      Department of Computer Science and Engineering.
    </p>
    <p>
      7th Semester SGPA: 3.56(Out of 4.00)
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2017"
    iconStyle={{ background: 'green', color: '#fff' }}
    icon={<StarIcon />}
  >
    <h3 className="vertical-timeline-element-title">The Millennium Starts School and College</h3>
    <h4 className="vertical-timeline-element-subtitle">Rangpur, Bangladesh</h4>
    <p>
      Higher Secondary Certificate(HSC)
    </p>
    <p>
      GPA: 5.00(Out of 5.00)
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2015"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<StarIcon />}
  >
    <h3 className="vertical-timeline-element-title">The Millennium Starts School and College</h3>
    <h4 className="vertical-timeline-element-subtitle">Rangpur, Bangladesh</h4>
    <p>
      Secondary School Certificate(SSC)
    </p>
    <p>
    GPA: 5.00(Out of 5.00)
    </p>
  </VerticalTimelineElement>
  {/* <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2006 - 2008"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<StarIcon />}
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="April 2013"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<StarIcon />}
  >
    <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
    <p>
      Strategy, Social Media
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="November 2012"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<StarIcon />}
  >
    <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
    <p>
      Creative Direction, User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2002 - 2006"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<StarIcon />}
  >
    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
    <p>
      Creative Direction, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<StarIcon />}
  /> */}
</VerticalTimeline>
        </div>
        </section>
    );
};

export default AboutMe;