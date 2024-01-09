
async function postLogin(queryKey) {
  const res = await fetch("http://localhost:8000/auth/login", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(queryKey)
  })
  return res
}

export default postLogin
