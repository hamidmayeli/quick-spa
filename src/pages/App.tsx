import Logo from 'assets/logo';
import { useState } from 'react'
import { Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex justify-center'>
      <Logo className='fill-black dark:fill-white w-12 h-12' />
    </div>
      <h1 className='text-center font-bold text-5xl mb-20'>Quick SPA</h1>
      <div>
        <p>This is a complete set of tools ready for development.</p>
        <p>
          It contains the following features.
        </p>
        <ul className='list-decimal list-inside p-2'>
          <li>Vite + React</li>
          <li>Typescript</li>
          <li>Tailwind</li>
          <li>Cypress (e2e and component) + Code Coverage Report</li>
          <li>JSON Server for fake API</li>
          <li>PWA - (public/web.config is for IIS hosting, feel free to remove it.)</li>
        </ul>

        <Link to="/second" className='text-blue-500'>Visit the second page.</Link>

        <div>
          <button type='button' className='rounded-full p-4 border mt-10 mx-auto' onClick={() => setCount(count + 1)}>Counter: {count}</button>
        </div>
      </div>
    </>
  )
}

export default App
