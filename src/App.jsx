import React from "react";
import "./App.css";
import Profile from './assets/profile.jpeg';
import Project1 from "./assets/project1.png";
import Project2 from "./assets/project2.png";
import Project3 from "./assets/project3.png";
import Project4 from "./assets/project4.png";
import Facebook from "./assets/facebook.svg";
import LinkedIn from "./assets/linkedin.svg";
import Instagram from "./assets/instagram.svg";
import ArrowDown from "./assets/arrow-down.svg";

function App() {
  return (
    <>
      <header>
        <div className="container px-4 py-6 m-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold">HUMURA Portfolio</h1>
            </div>
            <div>
              <ul className="flex gap-4">
                <li>
                  <a className="text-gray-400 cursor-pointer hover:text-white">
                    Projects
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 cursor-pointer hover:text-white">
                    Technologies
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 cursor-pointer hover:text-white">
                    About Me
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-20">
            <hr />
          </div>
        </div>
      </header>

      <main>
        {/* Intro section */}
        <section>
          <div className="container flex gap-40 px-4 py-10 m-auto ">
            <div>
              <h2 className="text-4xl font-bold">Hello am Humura Elvin,</h2>
              <h1 className="mt-1 text-4xl font-bold gradiant-text">
                FullStack Developer and CyberSecurity Engineer
              </h1>
              <p className="mt-4 text-gray-400">
                Former digital-marketing specialist, seeking to apply competent
                development skills with focus on collaboration, communication,
                and passion
              </p>
            </div>
            <div>
              <img
                src={Profile}
                width={220}
                className="rounded-full w-23 h-23"
                alt=""
              />
            </div>
          </div>
        </section>
        {/* projects */}
        <section>
          <div className="container px-4 mx-auto">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <div className="flex flex-wrap mb-20 gap-18 mt-11">
              <div className="w-1/2 p-5 ml-0.4 border rounded-md blorder-gray-500">
                <img src={Project1} alt="" />
                <h3 className="mt-8 text-2xl font-semibold">
                  Furniture store landing page
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  Responsive HTML/CSS layout for online furniture store. HTML5,
                  CSS3 (SCSS)
                </p>
                <div className="flex gap-4 mt-12 justify-evenly">
                  <button className="px-6 py-2 rounded-full bg-gradient-to-t from-blue-500 to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Checkout preview
                  </button>
                  <button className="px-6 py-2 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </button>
                </div>
              </div>
              <div className="w-1/2 p-5 border border-gray-500 rounded-md">
                <img src={Project2} alt="" />
                <h3 className="mt-8 text-2xl font-semibold">
                  Designer furniture store landing page
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  Responsive HTML/CSS layout for online store of designer
                  furniture. HTML5, CSS3 (SCSS)
                </p>
                <div className="flex gap-4 mt-12 justify-evenly">
                  <button className="px-6 py-2 rounded-full bg-gradient-to-t from-blue-500 to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Checkout preview
                  </button>
                  <button className="px-6 py-2 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </button>
                </div>
              </div>
              <div className="w-1/2 p-5 border border-gray-500 rounded-md">
                <img src={Project3} alt="" />
                <h3 className="mt-8 text-2xl font-semibold">
                  Landing page for front-end developer
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  Responsive HTML/CSS layout for landing page for front-end
                  developer. HTML5, CSS3 (SCSS)
                </p>
                <div className="flex gap-4 mt-12 justify-evenly">
                  <button className="px-6 py-2 rounded-full bg-gradient-to-t from-blue-500 to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Checkout preview
                  </button>
                  <button className="px-6 py-2 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </button>
                </div>
              </div>
              <div className="w-1/2 p-5 border border-gray-500 rounded-md">
                <img src={Project4} alt="" />
                <h3 className="mt-8 text-2xl font-semibold">
                  Website redesign for The Venus project
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  Responsive HTML/CSS layout for The Venus project. HTML5, CSS3
                  (SCSS)
                </p>
                <div className="flex gap-4 mt-12 justify-evenly">
                  <button className="px-6 py-2 rounded-full bg-gradient-to-t from-blue-500 to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                    Checkout preview
                  </button>
                  <button className="px-6 py-2 border rounded-full hover:border-blue-500 hover:text-blue-500">
                    Checkout github
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Techs */}

        <section>
          <div className="container px-4 mx-auto mb-10">
            <h2 className="text-2xl font-semibold">Technologies</h2>
            <div className="mt-14">
              <div className="mt-6">
                <div className="flex justify-between">
                  <h2 className="text-lg font-semibold">HTML</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="block w-full h-2 rounded-md bg-gradient-to-t from-blue-500 to-cyan-500 bg-slate-600" />
              </div>
              <div className="mt-10">
                <div className="flex justify-between">
                  <h2 className="text-lg font-semibold">
                    CSS, Sass & Bootstrap
                  </h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="block w-full h-2 rounded-md bg-gradient-to-t from-blue-500 to-cyan-500 bg-slate-600" />
              </div>
              <div className="mt-10">
                <div className="flex justify-between">
                  <h2 className="text-lg font-semibold">
                    JavaScript, TypeScript, JQuery
                  </h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="block w-full h-2 rounded-md bg-gradient-to-t from-blue-500 to-cyan-500 bg-slate-600" />
              </div>
              <div className="mt-10">
                <div className="flex justify-between">
                  <h2 className="text-lg font-semibold">UI design in Figma</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="block w-[75%] h-2 rounded-md bg-gradient-to-t from-blue-500 to-cyan-500 bg-slate-600" />
              </div>
              <div className="mt-10">
                <div className="flex justify-between">
                  <h2 className="text-lg font-semibold">Angular</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="block w-[50%] h-2 rounded-md bg-gradient-to-t from-blue-500 to-cyan-500 bg-slate-600" />
              </div>
              <div className="mt-10">
                <div className="flex justify-between">
                  <h2 className="text-lg font-semibold">React </h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="block w-[60%] h-2 rounded-md bg-gradient-to-t from-blue-500 to-cyan-500 bg-slate-600" />
              </div>
              <div className="mt-10">
                <div className="flex justify-between">
                  <h2 className="text-lg font-semibold">React Native </h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="block w-[45%] h-2 rounded-md bg-gradient-to-t from-blue-500 to-cyan-500 bg-slate-600" />
              </div>
            </div>
          </div>

          <div className="container px-4 py-8 m-auto">
            <h2 className="text-2xl font-semibold">
              Additional technologies and skills
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-28 mt-12 w-[80%]">
              <div>
                <p className="relative font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute left-5">
                  Git
                </p>
              </div>
              <div>
                <p className="relative font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute left-5">
                  Wordpress
                </p>
              </div>
              <div>
                <p className="relative font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute left-5">
                  Teamwork
                </p>
              </div>
              <div>
                <p className="relative font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute left-5">
                  Quick learning
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-36 mt-4 sm:mt-6 w-[80%]">
              <div>
                <p className="relative font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute left-5">
                  Engagement
                </p>
              </div>
              <div>
                <p className="relative font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute left-5">
                  B2 english
                </p>
              </div>
              <div>
                <p className="relative font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute left-5">
                  RWD
                </p>
              </div>
              <div>
                <p className="relative font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute left-5">
                  Linux
                </p>
              </div>
              <div>
                <p className="relative font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute left-5">
                  Adobe Illustrator + Photoshop
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* about me */}

        <section className="py-8" id="aboutme">
          <div className="container px-4 m-auto">
            <h2 className="text-2xl font-semibold">About me</h2>
            <div className="relative mt-12 before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white">
              <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2015</h3>
                <p>
                  Graduated KTC (Krasnodar Technical College) and for about two
                  years worked with high voltage (35, 110kV) substations as the
                  specialty electrician of emergency mobile crew. Later
                  qualified as a Crossfit trainer.
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2015</h3>
                <p>
                  Underwent a digital marketing course and started to work as a
                  PPC and project manager in a local web studio. After 3 months
                  started my own freelance practice.
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2015</h3>
                <p>
                  Became more interested in IT and decided to try programming.
                  Underwent Java course and made a project.
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2015</h3>
                <p>
                  Worked out in which field I want to build a developer's career
                  and started to learn Frontend Development.
                </p>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />
        <footer>
          <div className="container px-4 m-auto">
            <div className="flex mb-8 gap-7 mt-30">
              <img className="h-20 cursor-pointer" src={Facebook} alt="" />
              <img className="h-20 cursor-pointer" src={LinkedIn} alt="" />
              <img className="h-20 cursor-pointer" src={Instagram} alt="" />
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;
