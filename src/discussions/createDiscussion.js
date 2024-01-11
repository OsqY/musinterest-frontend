
const createDiscussion = async (queryKey) => {
  try {
    const res = await fetch("http://localhost:8000/discussions/create", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('token')}`,

      },
      body: JSON.stringify(queryKey)
    })
    console.log(JSON.stringify(queryKey))
    return res.json
  } catch (error) {
    console.error(error)
  }
}

export default createDiscussion
