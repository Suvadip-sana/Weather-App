import "./InfoBox.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import OpacityIcon from '@mui/icons-material/Opacity';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AirIcon from '@mui/icons-material/Air';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';




const style = {
    py: 0,
    width: '100%',
    maxWidth: 400,
    color: 'text.secondary'
};

export default function InfoBox({info}) {
    return (
        <div className='InfoBox'>
            <Card sx={{ width: 400 }}>
                <CardContent>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        
                    </Typography>
                    <List sx={style}>
                            <ListItem sx={{ display: 'flex', alignItems: 'center' }}>
                                {/* Left Side: Description */}
                                <Typography variant="h4" sx={{ marginRight: -3 }}>
                                    {info.description}
                                </Typography>

                                {/* Middle: Placeholder for Weather Icon */}
                                
                                <img src={info.icon} alt="weather-icon" className="weather-icon" />

                                {/* Right Side: City Name */}
                                <Typography variant="h6" sx={{ marginLeft: 'auto' }}>
                                    {info.name}, <span>{info.countryCode}</span>
                                </Typography>
                            </ListItem>
                            <Divider component="li" />

                            {/* Temperature */}
                            <ListItem>
                                <DeviceThermostatIcon sx={{ marginRight: 1, marginLeft: -1.5 }}/>
                                <ListItemText primary="Temperature" />
                                <Typography>{info.temp}°C</Typography>
                            </ListItem>
                            <Divider component="li" />

                            {/* Feels Like */}
                            <ListItem>
                                <DeviceThermostatIcon sx={{ marginRight: 1, marginLeft: -1.5 }}/>
                                <ListItemText primary="Feels Like" />
                                <Typography>{info.feelsLike}°C</Typography>
                            </ListItem>
                            <Divider component="li" />

                            {/* Min and Max Temperature */}
                            <ListItem>
                                <CompareArrowsIcon sx={{ marginRight: 1, marginLeft: -1.5 }}/>
                                <ListItemText primary="Min/Max Temp" />
                                <Typography>{info.minTemp}°C / {info.maxTemp}°C</Typography>
                            </ListItem>
                            <Divider component="li" />

                            {/* Humidity */}
                            <ListItem>
                                <OpacityIcon sx={{ marginRight: 1, marginLeft: -1.5 }}/>
                                <ListItemText primary="Humidity" />
                                <Typography>{info.humidity}%</Typography>
                            </ListItem>
                            <Divider component="li" />

                            {/* Wind Speed */}
                            <ListItem>
                                <AirIcon sx={{ marginRight: 1, marginLeft: -1.5 }}/>
                                <ListItemText primary="Wind Speed" />
                                <Typography>{info.wind} Km/h</Typography>
                            </ListItem>
                            <Divider component="li" />

                            {/* Visibility */}
                            <ListItem>
                                <VisibilityIcon sx={{ marginRight: 1, marginLeft: -1.5 }}/>
                                <ListItemText primary="Visibility" />
                                <Typography>{info.visibility} Km</Typography>
                            </ListItem>
                        </List>
                </CardContent>
            </Card>
        </div>
    );
}
