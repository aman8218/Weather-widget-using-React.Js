import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { api_KEY } from '../config';

export default function SearchBox({updateInfo}) {
    const API_URL = "http://api.openweathermap.org//data/2.5/weather";
    const API_KEY = api_KEY;

    let[formData, SetFormData]=useState({
        city:"",
        state:"",
        country:""
    });

    let[error, setError] = useState(false);

    let handleChange = (event)=>{
        SetFormData((currData)=>{
            return {...currData, [event.target.name]:event.target.value};
        })
    }

    let getWhetherInfo=async()=>{
        try{
            let response = await fetch(`${API_URL}?q=${formData.city},${formData.state},${formData.country}&limit=${4}&appid=${API_KEY}&units=metric`);
        let jsonResponse=await response.json();
        console.log(jsonResponse);

        let result={
            city:formData.city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelslike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        }
        console.log(result);
        return result;
        }
        catch(error){
            throw error;
        }
     }

    let handleSubmit = async(event)=>{
        try{
            event.preventDefault();
        // console.log(formData);
        SetFormData({
            city:"",
            state:"",
            country:""
        });
        let newInfo = await getWhetherInfo();
       updateInfo(newInfo);
        }
        catch(error)
        {
            setError(true);
        }
        
       
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <TextField id='city' label="City Name" onChange={handleChange} value={formData.city} name='city' required />
                <br /><br />
                <TextField id='state' label="state" onChange={handleChange} value={formData.state} name='state' required  />
                <br /><br />
                <TextField id='countryCode' label="Country Code" onChange={handleChange} value={formData.country} name='country' required  />
                <br /><br />
                <Button variant="contained" type='submit'  >
                    Search
                </Button>
                {error && <p style={{color:"red"}}>No such place exists!</p>}
            </form>
        </div>
    )
}