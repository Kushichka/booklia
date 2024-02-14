import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import googleButton from '../../../assets/googleButton.svg';

const resetStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer'
}

export const SignInWithGoogleButton = () => {

    const signInHandler = () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({ prompt: 'select_account' });

        signInWithPopup(auth, provider)
            .then(result => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;

                console.log('token: ', token);
                console.log('user: ', user);
            })
            .catch((error) => {
                const errorCode = error.code;
                console.log('errorCode: ', errorCode);

                const errorMessage = error.message;
                console.log('errorMessage: ', errorMessage);

                const email = error.customData.email;
                console.log('email: ', email);

                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log('credential: ', credential);
            });
    }

    return (
        <button 
            onClick={signInHandler}
            style={resetStyle}
        >
            <img src={googleButton} alt="Sign in With Google" />
        </button>
    )
}
