export interface Apiresults {
    data: Datum[];
}

export interface Datum {
    symbol:   string;
    name:     string;
    currency: string;
    exchange: string;
    mic_code: string;
    country:  string;
    type:     string;
}

export interface SeriesResults {
    meta:   Meta;
    values: Value[];
    status: string;
}

export interface Meta {
    symbol:            string;
    interval:          string;
    currency:          string;
    exchange_timezone: string;
    exchange:          string;
    mic_code:          string;
    type:              string;
}

export interface Value {
    datetime: Date;
    open:     string;
    high:     string;
    low:      string;
    close:    string;
    volume:   string;
}

export enum IntervalsValues {
    ONE = '1min',
    FIVE = '5min',
    FIFTEEN = '15min'
}