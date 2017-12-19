export function Headers() {
  return {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': localStorage.getItem('jwt')
  };
};

export function WatsonHeaders() {
  return {
    'Content-Type': 'text/plain',
    'Accept': 'application/json',
    'Authorization': localStorage.getItem('jwt')
  };
}
