
"use client"

import { useRouter } from 'next/navigation'

import RecipeList from "../components/RecipeList"

const RecipeListContainer = ({}) => {
  const router = useRouter()

  const handleOnDetails = (id) => {
    router.push(`recipe/${id}`)
  }

  return <RecipeList onDetails={handleOnDetails} />
}

export default RecipeListContainer