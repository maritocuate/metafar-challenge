import { useState } from 'react'
import ReactPaginate from 'react-paginate'
import { css } from '@emotion/css'

import { Apiresults } from "../../types"

import './index.css'

interface StocksTableProps {
    data: Apiresults | undefined,
    handleDetails: (symbol: string) => void
}

const StocksTable = ({ data, handleDetails }: StocksTableProps) => {
    const stocks = data?.data || []

    const [currentPage, setCurrentPage] = useState<number>(0)
    const itemsPerPage = 15
    const indexOfLastItem = (currentPage + 1) * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = stocks.slice(indexOfFirstItem, indexOfLastItem)

    const handlePageChange = (selectedPage: { selected: number }) => {
        setCurrentPage(selectedPage.selected)
    }
  
    return (
        <>
            <table>
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
                        currentItems.map((stock, index) => {
                            const bg = index%2===0 ? '#444' : '#222'

                            return (
                                <tr
                                    key={index}
                                    className={css`background-color: ${bg}`}
                                >
                                    <td
                                        className='linked'
                                        onClick={() => handleDetails(stock.symbol)}
                                    >{stock.symbol}</td>
                                    <td>{stock.name}</td>
                                    <td>{stock.currency}</td>
                                    <td>{stock.type}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

            <ReactPaginate
                pageCount={Math.ceil(stocks.length / itemsPerPage)}
                onPageChange={handlePageChange}
                containerClassName='pagination'
                activeClassName='active'
            />
        </>
    )
}
  
export default StocksTable