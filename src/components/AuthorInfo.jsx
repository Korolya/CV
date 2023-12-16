import React from 'react';
import ProjectItem from './ProjectItem';

function AuthorInfo() {
  return (
    <div className="bg-gray-100 p-8 flex flex-col md:flex-row">
      <div className="w-full md:w-2/3 md:mr-8">
        <h2 className="text-6xl font-bold mb-4 ml-7">KOROLIK ARTEM</h2>
        <div className="text-2xl mt-4 ml-8 mb-2">
          <p>Student of BSU, Faculty of Mechanics and Mathematics. </p>
        </div>
        <div className="bg-gray-100 p-8 rounded-lg" style={{ overflowWrap: 'break-word' }}>
          <h2 className="text-4xl font-bold mb-4">Personal projects</h2>
          <ProjectItem
            name="Filtrable TodoList"
            githubLink="https://github.com/Korolya/FiltrableTodoList"
            description="The user can add new tasks, mark their status (completed/uncompleted), see the creation date and delete tasks. There is a filter to display only uncompleted tasks and an option to sort by creation date (new first/old first) or alphabetically."
            technologies="Technology List: React, React DOM, React Scripts, Loader Utils, TypeScript, Babel Runtime."
          />
          <ProjectItem
            name="Notion Redux"
            githubLink="https://github.com/Korolya/NotionRedux"
            description="A multi-user note-taking application. Each user can create, delete and edit their notes using the Redux state manager."
            technologies="Technology List: React, Vite, TailwindCSS, JSON Srever, React DOM, Zod, Redux, Redux Persist, React Redux, React Router DOM."
          />
          <ProjectItem
            name="Lamoda"
            githubLink="https://github.com/Korolya/Lamoda"
            description="Realize an online store with the ability to filter and sort products."
            technologies="Technology List: React, React DOM, React Scripts, Loader Utils, Chance, TypeScript, Babel Runtime."
          />
        </div>
      </div>
      <div className="w-full md:w-1/3 mt-8 md:mt-0 ml-10">
        <div className="mb-10 mt-5">
          <img src="/geo.png" alt="icon" className="inline-block align-text-bottom" style={{ height: '1.5em', width: '1.5em' }} />
          <span className="font-bold text-2xl"> Minsk, Belarus </span>
        </div>
        <div className="mb-10">
          <span className="font-bold text-2xl ">Education</span> <br /> Secondary education
        </div>
        <div className="mb-10">
          <span className="font-bold text-2xl">English Language Proficiency</span> <br /> B1
        </div>
        <div className="mb-2">
          <span className="font-bold text-2xl">Skills</span>
        </div>
        <ul className=" mb-10">
          <li>
            <span>Python</span>
          </li>
          <li>
            <span>JS/React</span>
          </li>
          <li>
            <span>Photoshop</span>
          </li>
        </ul>
        <div className="mb-2">
          <span className="font-bold text-2xl">Social Links</span>
        </div>
        <ul className=" mb-20">
          <li>
            <a href="mailto:korolya23fc@gmail.com" className="text-blue-500">
              <img src="/em.png" alt="icon" className="inline-block align-text-bottom" style={{ height: '1.2em', width: '1.2em' }} />
              <span className="font-bold"> korolya23fc@gmail.com </span>
            </a>
          </li>
          <li>
            <a href="https://t.me/korolya23" className="text-blue-500">
              <img src="/tg.png" alt="icon" className="inline-block align-textbottom" style={{ height: '1.2em', width: '1.2em' }} />
              <span className="font-bold"> @korolya23 </span>
            </a>
          </li>
        </ul>
        <div className="mb-4">
          <a href="/resume.pdf" download target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
            Print PDF
          </a>
        </div>
      </div>
    </div>
  );
}

export default AuthorInfo;