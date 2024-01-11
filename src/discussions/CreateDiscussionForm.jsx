import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import createDiscussion from "./createDiscussion"

const CreateDisussionForm = () => {
  const [requestParams, setRequestParams] = useState({
    title: "",
    description: "",
  })

  const handleRequest = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const obj = {
      title: formData.get("title"),
      description: formData.get("description"),

    }
    setRequestParams(obj)
    createDiscussion(requestParams)
    console.log(obj)
  }

  return (
    <div className="my-4">
      <form className="max-w-sm mx-auto bg-gray-800 rounded-lg shadow-xl p-4" onSubmit={handleRequest}>
        <div className="mb-5">
          <label htmlFor="title" className="block mb-2 text-sm font-medium text-white ">Discussion title</label>
          <input type="text" name="title" id="ttitle" className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name your top 10 albums" required />
        </div>
        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your description</label>
        <textarea id="description" name="description" rows="4" className="block p-2.5 my-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Describe your discussion..."></textarea>
        <button type="submit" className="text-white bg-blue-700 mt-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>
    </div>
  )
}

export default CreateDisussionForm
