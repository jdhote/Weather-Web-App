import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./InfoBox.css";
import "./CardContent.css";
export default function InfoBox({info})
{   
    const HOT_URL= "https://t3.ftcdn.net/jpg/04/43/21/80/360_F_443218001_q7Xvx6CElPri6bBbQmi4PvSeskzNpOzu.jpg";

    const COLD_URL= "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f8726194-6e27-4783-bdc4-c6009a78737e/d34wvig-7a639e5f-5810-430a-9cf3-e89e1fecec1d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y4NzI2MTk0LTZlMjctNDc4My1iZGM0LWM2MDA5YTc4NzM3ZVwvZDM0d3ZpZy03YTYzOWU1Zi01ODEwLTQzMGEtOWNmMy1lODllMWZlY2VjMWQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.nHPfeoUuJYMfnMtShgayLUmQr-cFgO_GcRwm7-CIeDU";

    const RAIN_URL ="https://st3.depositphotos.com/1400069/35282/i/450/depositphotos_352828632-stock-photo-spring-rain-forest-fresh-branches.jpg";

    
    const getWeatherIcon = () => {
      if (info.humidity > 80 && info.temp > 20) {
          return <ThunderstormIcon />;
      } else if (info.temp > 20) {
          return <WbSunnyIcon/>;
      } else {
          return <AcUnitIcon />;
      }
  };

   
    return(
      <div className="InfoBox">
        

        <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 150 }}
        image={info.humidity>80 && info.temp >20 ?RAIN_URL: info.temp>20?HOT_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <div className='CityName'>
          {info.city} &nbsp;  &nbsp; 
          {getWeatherIcon()} 
          </div>
         
  
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
         <p>Temperature={info.temp}&deg;C</p>
         <p>Humidity={info.humidity}</p>
         <p>Min Temp= {info.tempMin}</p>
         <p>Max Temp= {info.tempMax}</p>
         <p>The Weather can be described as <i>{info.weather}</i> and feels Like {info.feelsLike}&deg;C</p>

        </Typography>
      </CardContent>
     </Card>
        </div>
        </div>

    )
}