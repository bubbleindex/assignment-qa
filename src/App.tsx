/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './App.css';

function App() {
  const accounts = [
    {
      email: 'test1@gmail.com',
      password: 'test1'
    },
    {
      email: 'test2@gmail.com',
      password: 'test2'
    }
  ]

  const login = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formElements = form.elements as typeof form.elements & {
      email: {value: string}
      password: {value: string}
    }
    const account = accounts.find(account => account.email === formElements.email.value && account.password === formElements.password.value)
    if (account) {
      alert('Login success')
    } else {
      alert('Login failed')
    }
  }

  return (
    <div className="App">
      <div className="App-container">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto w-full lg:py-0">
            <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
              <img className="w-52 h-20 mr-2" src="https://www.rocket.in.th/wp-content/uploads/2024/01/Rocket-Logo_White-Text.svg" alt="logo" />
            </a>
            <div id="card-login" className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
                </h1>
                <form id="login-form" className="space-y-4 md:space-y-6" action='#' onSubmit={(e) =>login(e)}>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Your email</label>
                    <input type="email" name="email" id="email" className="bg-gray-50 border text-sm border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Enter your email" />
                  </div>
                  <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left">Password</label>
                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border text-sm border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" />
                  </div>
                  <button type="submit" id="btn-sign-in" className="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Sign in</button>
                </form>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;