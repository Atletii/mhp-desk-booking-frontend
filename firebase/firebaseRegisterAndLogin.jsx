// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// import { database } from '../Firebase/FirebaseConfig';

// export const FirebaseRegisterAndLogin = () => {
//     // for SignIn and SignUp, login true for SignIn
//     const [login, setLogin] = useState(false);

//     // function handleSignUp(e) {
//     //     e.preventDefault();
//     //     const email = e.target.email.value;
//     //     const password = e.target.password.value;

//     //     createUserWithEmailAndPassword(database, email, password)
//     //         .then(data => {
//     //             console.log(data, "authData");
//     //         })
//     //         .catch(error => {
//     //             alert(error.code);
//     //             setLogin(true);
//     //         });
//     // };

//     // function handleSignIn(e) {
//     //     e.preventDefault();
//     //     const email = e.target.email.value;
//     //     const password = e.target.password.value;

//     //     signInWithEmailAndPassword(database, email, password)
//     //         .then(data => {
//     //             console.log(data, "authData");
//     //             // Navigate and set logged in state if needed
//     //         })
//     //         .catch(error => {
//     //             alert(error.code);
//     //             setLogin(true);
//     //         });
//     // };
// }