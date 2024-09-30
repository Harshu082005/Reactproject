import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';



export default function InfoBox({info}){
    let imgurl="https://s7d2.scene7.com/is/image/TWCNews/051520_pix_sky_jpg"
   let cold="https://w0.peakpx.com/wallpaper/503/792/HD-wallpaper-icy-winter-sky-trees-sky-weather-winter-cold-frosty-snow-awesome-day-nature-white-blue.jpg"
   let rainy="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqL_nWif8PS7-2bx3Mb-qAfJ8WVTQ4jz6kDQ&s"

    return (
<div className="InfoBox">
    {/* <h1>weatherInfo-{info.weather}</h1> */}
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80? rainy:info.temp<300?cold:imgurl}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}  component={"span"}>
       <p>Temperature={info.temp}&deg;K</p>
       <p>Humidity={info.humidity}</p>
       <p>MIn Temp={info.tempMin}</p>
       <p>Max Temp={info.tempMax}</p>
       <p>The weather described as {info.feelsLike}&deg;K</p>
        </Typography>
      </CardContent>
      
        
    </Card>
   </div>



    );

}