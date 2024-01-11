async function postLogin(queryKey) {
  const res = await fetch("http://localhost:8000/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(queryKey),
  })
  if (!res.ok) {
    throw new Error('Authentication failed');
  }

  const data = await res.json();
  localStorage.setItem('token', data.jwt);

  return data;
}

export default postLogin
