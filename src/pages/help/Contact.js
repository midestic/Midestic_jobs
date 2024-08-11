import { Form, redirect, useActionData } from 'react-router-dom'
import { useState } from 'react'



export default function Contact() {

  const data = useActionData();

const [ email, setEmail ] = useState('')
const [ valid, setValid ] = useState(true)


function handleChange(e) {
const value = e.target.value;
setEmail(value)

const validRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
setValid(validRegex.test(value))


}

return(

<div className="contact">
      <h3>Contact Us</h3>
      < Form method="post"  action= '/help/contact'>
        <label>
          <span>Your email:</span>
          <input type="email" name="email" value={ email } onChange={ handleChange } required />
        </label>
        <label>
          <span>Your message:</span>
          <textarea name="message" required></textarea>
        </label>
        <button>Submit</button>

        
       { !valid && <p>email is incorrect</p> }
       { data && data.error && <p>{ data.error }</p> }
      </Form>
     
    </div>

)

}

export const contactAction = async({ request })=> {

    
const data = await request.formData()

const submission = {

    email: data.get('email'),
    message: data.get('message')

}

if(submission.message.length < 10 ) {

  return { error : 'Message must be longer than 10 char' }
}

 return redirect('/')




}

