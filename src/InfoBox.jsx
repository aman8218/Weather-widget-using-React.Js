import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import  ThunderstormIcon  from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}) {

    const HOT_URL="https://images.unsplash.com/photo-1493936734716-77ba6da66365?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1616951849649-74dd2dd7e662?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const RAIN_URL="https://media.istockphoto.com/id/1476190237/photo/summer-rain-raindrops-bad-weather-depression.webp?b=1&s=170667a&w=0&k=20&c=S267VOEqTSAmd_ekDQ4OFy5IvHMNJydFvwG7FBPdxEI=";
    return (
        <div className="InfoBox">
            <br />
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity>80
          ?RAIN_URL
          : info.temp>15
          ? HOT_URL
          :COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{" "} {
          info.humidity>80
          ?<ThunderstormIcon/>
          : info.temp>15
          ? <WbSunnyIcon/>
          :<AcUnitIcon/>
        }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <div>Temperature = {info.temp}&deg;C</div>
          <div>Humidity = {info.humidity}</div>
          <div>Min Temp = {info.tempMin}</div>
          <div>Max Temp = {info.tempMax}</div>
          <div>The Weather can be described as <b>{info.weather}</b> and feels like {info.feelslike}&deg;C</div>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    )
}