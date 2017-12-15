import { Headers } from '../Adapters/Headers';

export function fetchUser(code,history) {
  return (dispatch) => {
    return fetch('http://localhost:3000/api/v1/home', {
      method: 'POST',
      headers: Headers(),
      body: JSON.stringify({ code })
    })
    .then(res => res.json())
    .then(user =>{
      localStorage.setItem("jwt",user.code)
       dispatch({ type: 'FETCH_USER', payload: user.currentUser })
       history.push("/base")
    })

  };
}
