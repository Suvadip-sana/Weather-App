import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function Error() {
    return (
        <>
            <div className='InfoBox'>
                <Card sx={{ minWidth: 400, minHeight: 390 }}>
                    <CardContent>
                        <div>
                            <SentimentVeryDissatisfiedIcon style={{ marginTop: '5rem', fontSize: '3rem'}}/>
                            <Typography component="p" style={{marginTop:'1rem'}}>
                                No Such Place/City Exist!
                            </Typography>
                        </div>                
                    </CardContent>
                </Card>
            </div>
        </>
    )
}