import { useContext, useState, useRef } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { ShoppinCartContext } from '../../Context'
import { Layout } from '../../Components/Layout'
import Logo from '../../assets/logos/logo_yard_sale.svg'

function SignIn() {
  const contex = useContext(ShoppinCartContext)
  const [view, setView] = useState('user-info')
  const form = useRef(null)

  // Account
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)
  // Has an account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = contex.account ? Object.keys(contex.account).length === 0 : true
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState

  const handleSignIn = () => {
    const stringifiedSignOut = JSON.stringify(false)
    localStorage.setItem('sign-out', stringifiedSignOut)
    contex.setSignOut(false)
    // Redirect
    return <Navigate replace to='/' />
  }

  const createAnAccount = () => {
    const formData = new FormData(form.current)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password')
    }
    // Create account
    const stringifiedAccount = JSON.stringify(data)
    localStorage.setItem('account', stringifiedAccount)
    contex.setAccount(data)
    // Sign in
    handleSignIn()
  }

  const renderLogin = () => {
    return (
      <div className='flex flex-col w-80'>
        <p className='bg-slate-200 rounded-lg mb-6 p-3 shadow-lg'>
          <label className='font-semibold text-sm'>Email address : </label>
          <span>{parsedAccount?.email}</span>
        </p>
        <p className='bg-slate-200 rounded-lg mb-2 p-3 shadow-lg'>
          <label className='font-semibold text-sm'>Password : </label>
          <span>{parsedAccount?.password}</span>
        </p>
        <Link to='/'>
          <button className='bg-teal-600 disabled:bg-teal-500/40 disabled:opacity-50 text-white w-full rounded-lg py-3 mt-4 mb-2 shadow-md'
            disabled={!hasUserAnAccount} onClick={() => handleSignIn()}>
            Log in
          </button>
        </Link>
        <div className='text-center'>
          <a className="font-simibold text-xs underline underline-offset-4" href='/'>Forgot my password</a>
        </div>
        <button
          className='border border-teal-600 disabled:text-black/40 disabled:border-black/40 rounded-lg mt-6 py-3 shadow-lg hover:shadow-xl'
          disabled={hasUserAnAccount} onClick={() => setView('create-user-info')}>
          Sign up
        </button>
      </div>
    )
  }

  const renderCreateUserInfo = () => {
    return (
      <form ref={form} className='flex flex-col gap-4 w-80'>
        <div className='flex flex-col gap-1'>
          <label htmlFor="name" className='font-semibold text-sm'>Your name </label>
          <input type='text'
            id='name'
            name='name'
            defaultValue={parsedAccount?.name}
            placeholder='Enter your name'
            className='rounded-lg border border-black placeholder:font-light placeholeder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4' />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='email' className='font-semibold text-sm'>Email address </label>
          <input type='text'
            id='email'
            name='email'
            defaultValue={parsedAccount?.email}
            placeholder='Enter your email team@shoppi.com'
            className='rounded-lg border border-black placeholder:font-light focus:outline-none py-2 px-4' />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='password' className='font-semibold text-sm'>Password </label>
          <input type='text'
            id='password'
            name='password'
            defaultValue={parsedAccount?.password}
            placeholder='********'
            className='rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4'
          />
        </div>
        <Link to='/'>
          <button className='bg-teal-500 hover:bg-teal-600 text-white w-full rounded-lg py-3' onClick={() => createAnAccount()}>
            Create
          </button>
        </Link>
      </form>
    )
  }

  const renderView = () => view === 'create-user-info' ? renderCreateUserInfo() : renderLogin()

  return (
    <Layout>
      <h1 className='font-medium text-xl text-center mb-6 w-80'>Welcome To</h1>
      <img src={Logo} alt='Logo Yard Sale' className='mb-6'/>
      {renderView()}
    </Layout>
  )
}

export default SignIn
