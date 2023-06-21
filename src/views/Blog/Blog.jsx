// Dependencias
import React, {useState, useEffect} from "react";

import Loader from "../../components/Loader/Loader";


const Blog = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 400)
  }, [])

  return (
    loading ? 
    <Loader />
    :
    <div>Blog</div>
  )
}

export default Blog