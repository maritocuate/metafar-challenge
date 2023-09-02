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
