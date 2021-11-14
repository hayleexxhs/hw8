export interface Weather {
    date?: string;
    datetime?: string;
    status?: string;
    statusimg?: string;
    temphigh?: number;
    templow?: number;
    windspeed?: number;
    sunrise?: string;
    sunset?: string;
}

export interface CurrentWeather {
    location?: string;
    lat?: string;
    lng?: string;
    status?: string;
    temp?: number;
    humidity?: number;
    windspeed?: number;
    visibility?: number;
    cloudcover?: number;
}