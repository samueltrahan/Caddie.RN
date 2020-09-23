
export function getCity(term) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(term)
  }, {mode: 'cors'})
  .then(res => res.json())
  .catch(err => err.json())
}