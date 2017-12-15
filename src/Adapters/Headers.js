export function Headers() {
  return {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': localStorage.getItem('token')
  }
};
