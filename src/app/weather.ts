export interface Weather {
    id: number;
    date: string;
    status: string;
    statusimg: string;
    temphigh: number;
    templow: number;
    tempapparent: number;
    windspeed: number;
    humidity: number;
    visibility: number;
    cloudcover: number;
    sunrise: string;
    sunset: string;
}