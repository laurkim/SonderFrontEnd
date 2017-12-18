// import { Headers } from '../Adapters/Headers';
//
// export function fetchTracks(code) {
//   return (dispatch) => {
//     return fetch('http://localhost:3000/api/v1/home', {
//       method: 'POST',
//       headers: Headers(),
//       body: JSON.stringify({ code })
//     })
//     .then(res => res.json())
//     .then(user =>{
//       localStorage.setItem("jwt", user.code)
//        dispatch({ type: 'FETCH_USER', payload: user.currentUser })
//     });
//   };
// };
