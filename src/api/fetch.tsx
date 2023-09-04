import { Apiresults, IntervalsValues, SeriesResults } from "../types.d"

export const getStocks = async (): Promise<Apiresults> => {
    try {
        const url = `https://api.twelvedata.com/stocks?country=argentina`
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (err) {
        return {data: []}
    }
}

export const getStockDetails = async (symbol:string): Promise<Apiresults> => {
    try {
        const url = `https://api.twelvedata.com/stocks?symbol=${symbol}`
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (err) {
        return {data: []}
    }
}

export const getStockSeries = async (symbol:string, interval:IntervalsValues): Promise<SeriesResults | []> => {
    try {
        const url = `https://api.twelvedata.com/time_series?symbol=${symbol}&interval=${interval}&apikey=${import.meta.env.VITE_TWELVEDATA_APIKEY}`
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (err) {
        return []
    }
}