import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { Apiresults } from "../../types"
import { getStockDetails } from "../../api/fetch"
import StockDetails from "../../components/StockDetails"

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
          <StockDetails symbol={id} data={data} />
        )
      }
    </>
  )
}
  
export default Details