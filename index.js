function submitData(userName,userEmail) {
  return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name: `${userName}`,
      email: `${userEmail}`,
    }),
  })
  .then(response => response.json())
  .then(user => {
    const identify = document.createElement('p');
    identify.textContent = user.id;
    document.body.appendChild(identify);
  })
  .catch(error => {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = error.message;
    document.body.appendChild(errorMessage);
  })
}