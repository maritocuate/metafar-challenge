import { Apiresults } from "../types.d"

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