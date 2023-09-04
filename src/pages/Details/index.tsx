import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { IntervalsValues, SeriesResults } from "../../types.d"
import { getStockSeries } from "../../api/fetch"
import StockDetails from "../../components/StockDetails"
import { Button } from "@mui/material"
import { Home } from "@mui/icons-material"

import "./index.css"

const Details = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [data, setData] = useState<SeriesResults | []>([])

  const { id } = useParams()
  const navigate = useNavigate()
  
  useEffect(() => {
    fetchData()
  }, [id])

  const fetchData = async () => {
    setLoading(true)
    handleGetStockDetails((id as string), IntervalsValues.ONE)
  }

  const handleGetStockDetails = async (symbol: string, interval: IntervalsValues) => {
    try {
      if(id) {
        const data = await getStockSeries(symbol, interval)
        setData(data)
        setLoading(false)
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
      {
        loading
        ? <h2>Loading...</h2> 
        : id ? (
          <>
            <Button
              className="back-button"
              onClick={ () => navigate('/') }
              variant="contained"
              size="small"
              startIcon={<Home />}
              color="secondary"
            >
              Volver
            </Button>
            <StockDetails
              symbol={id}
              data={data as SeriesResults}
              handleGetStockDetails={handleGetStockDetails}
            />
          </>
        ) : (
          <p>No se ha especificado un símbolo.</p>
        )
      }
    </>
  )
}
  
export default Details