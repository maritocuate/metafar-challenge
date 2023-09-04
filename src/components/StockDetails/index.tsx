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

import { Apiresults } from "../../types"

import './index.css'
import { HighchartsReact } from "highcharts-react-official"
import Highcharts from "highcharts"

interface StockDetailsProps {
    symbol: string
    data: Apiresults | undefined
}

const StockDetails = ({ symbol, data }: StockDetailsProps) => {
    const details = data?.data || []
    const options = ['1min', '5min', '15min']
    const chartsOptions = {
        title: {
            text: symbol,
        },
        series: [
            {
                name: 'profit',
                data: [100, 200, 30, 40, 50, 60, 70, 80, 90, 100]
            }
        ]
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
                        options={options}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Intervalo" />}
                    />
                </div>

                <div className="controls">
                    <Button variant="contained" onClick={() => console.log('ok')}>
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