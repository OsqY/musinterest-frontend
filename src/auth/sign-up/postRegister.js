async function postRegister(queryKey) {
  const res = await fetch("http://localhost:8000/auth/register", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(queryKey),
  })

  const data = await res.text();
  console.log(data)
  try {
    return JSON.parse(data);
  } catch (err) {
    return { error: 'Could not parse JSON!' };
  }
}

export default postRegister
