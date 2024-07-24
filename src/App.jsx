import React, { useState } from 'react';
import { supabase } from './client';

const App = () => {


  const [formData, setFormData] = useState({
    fullname: '', email: '', password: ''
  })

  console.log(formData)

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })

  }

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const { data, error } = await supabase.auth.signUp(
        {
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              full_name: formData.fullname,
            }
          }
        }
      )
      console.log(data.user)
      console.error(error)
      alert('Check your email for verification link')

    } catch (error) {
      alert(error)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='Fullname'
          name='fullname'
          onChange={handleChange}
        />

        <input
          placeholder='Email'
          name='email'
          onChange={handleChange}
        />

        <input
          placeholder='Password'
          name='password'
          type="password"
          onChange={handleChange}
        />

        <button type='submit'>
          Submit
        </button>

      </form>
    </div>
  )
}

export default App