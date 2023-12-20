import { Button } from "antd"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

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
        <Button onClick={signInHandler}>
            SignIn with Google
        </Button>
    )
}
