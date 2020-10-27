
// export const postUser = user => {
//     return dispatch => {
//         const {data} = await fetch.post('/users', user);
//         if (data.errors){
//             // error handling
//         } else {
//             localStorage.setItem("token", data.token);
//             dispatch(loginUser(data.user));
//         }
//     }
// }

// export const loginUser = user => ({
//     type: 'LOGIN_USER',
//     payload: user
// })