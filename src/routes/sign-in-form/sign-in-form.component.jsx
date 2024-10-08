import { useState, useContext } from "react"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInWithGooglePopup,signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils"
import FormInput from "../../components/form-input/form-input.component"
import "./sign-in-form.styles.scss"
import Button, { BUTTON_TYPE_CLASSES } from "../../components/button/button.component";
const defaultFormFields = {
    email: '',
    password:'',

}


const SignInForm = () =>{

    const [formFields, setFormFields] = useState(defaultFormFields)
    const {  email, password } = formFields


const resetFormFields = () =>{
    setFormFields(defaultFormFields)
}    

const SignInWithGoogle = async () =>{
    const {user} = await signInWithGooglePopup()
    createUserDocumentFromAuth(user)
}



const handleChange = (event) =>{
    const { name, value } = event.target
    setFormFields({...formFields, [name]:value})
    
}
const handleSubmit = async (event) =>{
    event.preventDefault()
    
   
    try{
        const { user } = await signInAuthUserWithEmailAndPassword(email,password)
        
        resetFormFields()
    }catch(error){
        switch(error.code){
            case "auth/wrong-password":
                alert("Incorrect password for email")
                break;
            case "auth/user-not-found":
                alert("No user found with these credentials")
                break;
            default:
                console.log(error)
        }
        
    }
        
}
return(
    <div className="sign-up-container">
        <h2>Already a user?</h2>
        <span>
            Sign in with your email and password
        </span>
        <form onSubmit={handleSubmit}>
            

            <FormInput label="Email"  type="email" required onChange={handleChange} name="email" value={email}/>

            <FormInput label="Passworde" type="password" required onChange={handleChange} name="password" value={password}/>

        <div className="buttons-container">
            <Button type="submit">Sign In</Button>
            <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={SignInWithGoogle}>Google Sign In</Button>
        </div>
            
        </form>
    </div>
)
}
export default SignInForm