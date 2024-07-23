import { useState,useContext } from "react"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"
import FormInput from "../../components/form-input/form-input.component"
import "./sign-up-form.styles.scss"
import Button from "../../components/button/button.component"
const defaultFormFields = {
    displayName: '',
    email: '',
    password:'',
    confirmPassword:'',

}


const SignUpForm = () =>{

    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields
const resetFormFields = () =>{
    setFormFields(defaultFormFields)
}    
const handleChange = (event) =>{
    const { name, value } = event.target
    setFormFields({...formFields, [name]:value})
    
}
const handleSubmit = async (event) =>{
    event.preventDefault()
    
    if(password !== confirmPassword){
        alert("passwords are different")
        return
    }
    try{
        const { user } = await createAuthUserWithEmailAndPassword(email, password)
        await createUserDocumentFromAuth(user, { displayName })
        resetFormFields()
    }catch(error){
        if(error.code === "auth/email-already-in-use") alert("email already in use")
        console.log(error.message)
    }
        
    
    
    
}

return(
    <div className="sign-up-container">
        <h2>Don't have an account</h2>
        <span>
            Sign up with your email and password
        </span>
        <form onSubmit={handleSubmit}>
            
            <FormInput label="Display Name" type="text" required onChange={handleChange} name="displayName" value={displayName}/>

            <FormInput label="Email"  type="email" required onChange={handleChange} name="email" value={email}/>

            <FormInput label="Passworde" type="password" required onChange={handleChange} name="password" value={password}/>

            <FormInput label="Confirm Password" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>

            <Button buttonType='google' type="submit">Sign Up</Button>
        </form>
    </div>
)
}
export default SignUpForm