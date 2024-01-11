
const fetchDiscussions = async () => {
  const res = await fetch("http://localhost:8000/discussions/")

  if (!res.ok) {
    console.error("Error at fetching discussions")
  }

  return res.json()
}

export default fetchDiscussions
