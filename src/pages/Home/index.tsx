import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import StocksTable from "../../components/StocksTable"
import { getStocks } from "../../api/fetch"
import { Apiresults } from "../../types"

const Home = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [data, setData] = useState<Apiresults>()
  const navigate = useNavigate()

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    setLoading(true)

    try {
      const data = await getStocks()
      setData(data)
      setLoading(false)
    } catch (err) {
      console.error(err)
    }
  }

  const handleDetails = (symbol: string) => {
    navigate(`/stock/${symbol}`)
  }

  return (
    <>
        <h1>Metafer Challenge</h1>
        
        {
          loading
          ? <h2>Loading...</h2> 
          : <StocksTable data={data} handleDetails={handleDetails} />
        }
    </>
  )
}

export default Home