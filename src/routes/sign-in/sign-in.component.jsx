import { createUserDocumentFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase.utils"


const SignIn = () =>{
    const LogGoogleUser = async () =>{
        const {user} = await signInWithGooglePopup()
        createUserDocumentFromAuth(user)
    }

    return(
        <div>
            <h1>Sign in Page</h1>
            <button onClick={LogGoogleUser}>Login with Google</button>
        </div>
    )
}
export default SignIn