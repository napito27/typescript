import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface UserProfileProps {
  name: string;
  age: number;
  hobbies: string[];
}

function UserProfile({name, age, hobbies}: UserProfileProps) {

  return (
    <Card sx={{paddingLeft:'1rem', width: '200px', height: '250px'}}>
      <CardHeader
        title={name}
        subheader={age}
      />
      <CardContent>
        <Typography paragraph>
          Hobbies
        </Typography>
        {
            hobbies.map((item, index) => (
              <Typography key={index} variant="body2" color="text.secondary">
                {item}
              </Typography>
            ))
          }
      </CardContent>
    </Card>
  );
}

export default UserProfile;