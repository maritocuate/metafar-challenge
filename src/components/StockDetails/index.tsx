import { useState } from "react"
import {
    Autocomplete,
    Button, 
    FormControl, 
    FormControlLabel, 
    Radio, 
    RadioGroup, 
    TextField, 
    Typography 
} from "@mui/material"
import { HighchartsReact } from "highcharts-react-official"
import Highcharts from "highcharts"

import { IntervalsValues, SeriesResults } from "../../types.d"

import './index.css'

interface StockDetailsProps {
    symbol: string
    data: SeriesResults | undefined
    handleGetStockDetails: (symbol: string, interval: IntervalsValues) => void
}

const StockDetails = ({ symbol, data, handleGetStockDetails }: StockDetailsProps) => {
    const [currentInterval, setCurrentInterval] = useState<IntervalsValues>(IntervalsValues.ONE)

    const { ONE, FIVE, FIFTEEN } = IntervalsValues
    const options = [ONE, FIVE, FIFTEEN]

    const chartsOptions = {
        title: {
            text: symbol,
        },
        xAxis: {
            type: 'datetime',
            title: {
              text: 'Intervalo de Tiempo',
            },
        },
        yAxis: {
            title: {
              text: 'Cotización',
            },
        },
        series: [
            {
                name: 'Intervalo',
                data: data?.values.map((item) => [
                    new Date(item.datetime).getTime(),
                    parseFloat(item.close),
                ]),
            }
        ]
    }

    const handleSubmit = () => {
        handleGetStockDetails(symbol, currentInterval)
    }
  
    return (
        <div className="details-container">
            <div className="form">
                <Typography variant="h4">{symbol}</Typography>
                
                <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="realtime"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="realtime" control={<Radio />} label="Tiempo Real" />

                        <div className="historical-field">
                            <FormControlLabel value="historical" control={<Radio />} label="Historico" />

                            <Autocomplete
                                disablePortal
                                id="combo-from"
                                options={options}
                                sx={{ width: 150 }}
                                renderInput={(params) => <TextField {...params} label="Fecha desde" />}
                            />
                            <Autocomplete
                                disablePortal
                                id="combo-until"
                                options={options}
                                sx={{ width: 150 }}
                                renderInput={(params) => <TextField {...params} label="Fecha hasta" />}
                            />
                        </div>
                    </RadioGroup>
                </FormControl>

                <div>
                    <Autocomplete
                        disablePortal
                        id="combo-interval"
                        value={currentInterval}
                        options={options}
                        sx={{ width: 150 }}
                        onChange={(_event: unknown, newValue: string | null) => {
                            setCurrentInterval(newValue as IntervalsValues)
                        }}
                        renderInput={(params) => <TextField {...params} label="Intervalo" />}
                    />
                </div>

                <div className="controls">
                    <Button variant="contained" onClick={() => handleSubmit()}>
                        Graficar
                    </Button>
                </div>


                <div className="charts-container">
                    <HighchartsReact highcharts={Highcharts} options={chartsOptions} />
                </div>
            </div>
        </div>
    )
}
  
export default StockDetails