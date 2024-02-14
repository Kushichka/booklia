import googleButton from '../../../assets/googleButton.svg';
import useGoogleSignIn from "../../../hooks/useGoogleSignIn";

const resetStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer'
}

export const SignInWithGoogleButton = () => {
    const {signInHandler} = useGoogleSignIn();

    return (
        <button 
            onClick={signInHandler}
            style={resetStyle}
        >
            <img src={googleButton} alt="Sign in With Google" />
        </button>
    )
}
