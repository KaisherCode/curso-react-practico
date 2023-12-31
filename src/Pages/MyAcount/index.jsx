import { useContext, useState, useRef } from 'react'
import { ShoppinCartContext } from '../../Context'
import { Layout } from '../../Components/Layout'
import { EyeSlashIcon } from '@heroicons/react/24/solid'

function MyAcount() {
  const context = useContext(ShoppinCartContext)
  const [view, setView] = useState('user-info')
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)
  const form = useRef(null)

  const editAccount = () => {
    const formData = new FormData(form.current)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password')
    }

    // Update Account
    const stringifiedAccount = JSON.stringify(data)
    localStorage.setItem('account', stringifiedAccount)
    context.setAccount(data)
  }

  const renderUserinfo = () => {
    return (
      <div className='flex flex-col w-80'>
        <p className='bg-slate-200 rounded-lg mb-6 p-3'>
          <span className='Font-light text-sm'>Name: </span>
          <span>{parsedAccount?.name}</span>
        </p>
        <p className='bg-slate-200 rounded-lg mb-6 p-3'>
          <span className='Font-light text-sm'>E-mail: </span>
          <span>{parsedAccount?.email}</span>
        </p>
        <button className='border border-teal-600 rounded-lg mb-6 p-3 shadow-md hover:bg-slate-50' onClick={() => setView('edit-user-info')}>
          Edit
        </button>
      </div>
    )
  }

  const renderEditUserInfo = () => {
    return (
      <form ref={form} className='flex flex-col gap-4 w-80'>
        <div className='flex flex-col gap-1'>
          <label htmlFor='name' className='font-light text-sm'>Your name. </label>
          <input type='text'
            id='name'
            name='name'
            defaultValue={parsedAccount?.name}
            placeholder='Admin'
            className='rounded-lg border border-slate-500 focus:border-teal-300 placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4' />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='email' className='font-light text-sm'>Your email. </label>
          <input type='text'
            id='email'
            name='email'
            defaultValue={parsedAccount?.email}
            placeholder='team@hynkor.com'
            className='rounded-lg border border-slate-500 focus:border-teal-300 placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4' />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='password' className='font-light text-sm'>Your password. </label>
          <input type='password'
            id='password'
            name='password'
            defaultValue={parsedAccount?.password}
            placeholder='********'
            className='rounded-lg border border-slate-500 focus:border-teal-300 placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4' />
          {/* <EyeSlashIcon className=' h-6 w-6'></EyeSlashIcon> */}
        </div>
        <button className='bg-teal-500 hover:bg-teal-600 text-white w-full rounded-lg py-3' onClick={() => { setView('user-info'), editAccount() }}>
          Edit
        </button>
      </form>
    )
  }

  const renderView = () => view === 'edit-user-info' ? renderEditUserInfo() : renderUserinfo()

  return (
    <Layout>
      <h1 className='font-medium text-xl text-center mb-6 w-80'>My account</h1>
      {renderView()}
    </Layout>
  )
}

export default MyAcount
