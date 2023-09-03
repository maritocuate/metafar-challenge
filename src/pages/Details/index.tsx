import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { Apiresults } from "../../types"
import { getStockDetails } from "../../api/fetch"

const Details = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [data, setData] = useState<Apiresults>()

  const { id } = useParams()
  
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    setLoading(true)

    try {
      const data = await getStockDetails(id)
      setData(data)
      setLoading(false)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
      {
        loading
        ? <h2>Loading...</h2> 
        : (
          <h2>{id}</h2>
          
        )
      }
    </>
  )
}
  
export default Details