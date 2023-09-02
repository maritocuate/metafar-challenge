import { css } from '@emotion/css'

import { Apiresults } from "../../types"

import './index.css'

interface StocksTableProps {
    data: Apiresults | undefined
}

const StocksTable = ({ data }: StocksTableProps) => {
    const stocks = data?.data || []
  
    return (
        <table width='100%'>
            <thead>
                <tr>
                    <th>Simbolo</th>
                    <th>Nombre</th>
                    <th>Moneda</th>
                    <th>Tipo</th>
                </tr>
            </thead>
            <tbody>
                {
                    stocks.map((stock, index) => {
                        const bg = index%2===0 ? '#444' : '#222'

                        return (
                            <tr
                                key={index}
                                className={css`background-color: ${bg}`}
                            >
                                <td>{stock.symbol}</td>
                                <td>{stock.name}</td>
                                <td>{stock.currency}</td>
                                <td>{stock.type}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}
  
export default StocksTable