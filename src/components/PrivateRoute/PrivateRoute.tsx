// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';
// // import mustLogin from '../../pages/mustLogin';


// let Auth = {
//     isLoggedIn: true,
//     logIn() {
//         this.isLoggedIn = true;
//         window.location.href = 'http://localhost:3001/auth/openidconnect';
//     },
//     logOut() {
//         this.isLoggedIn = false;
//         window.location.href = '/';
//     },
// };

// interface IRest {
//     component: any;
//     exact: boolean;
//     path: string;
// };

// const PrivateRoute = ({ component: Account, ...rest }: IRest) => {
//     return (
//         <Route
//             {...rest}
//             render = { props =>
//                 Auth.isLoggedIn ? (
//                     <Account {...props} />
//                 ) : (
//                     <Redirect to = {{ pathname: '/user', component: {mustLogin}}} />
//                 )
//             }
//         />
//     );
// }

// export default PrivateRoute;