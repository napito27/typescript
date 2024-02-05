import {Box, Chip, IconButton, Typography, Tooltip} from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

function Spacer({width = 10}) {
  return <div style={{display: 'inline-block', width: width}}></div>
}

interface RuleProps {
  rule: string;
  contains: string;
  values: string[];
  infoText?: string;
  showInfoicon?: boolean;
}

function Rules({rule, contains, values = [], infoText, showInfoicon = false}: RuleProps) {
  return ( 
    <Box display='flex' alignItems='center' style={{margin: 10}}>
      <Typography fontWeight='bold' variant='body1'>
        IF
      </Typography>
      <Spacer width={10}/>
      <Chip label={rule}/>
      <Spacer width={10}/>
      <Chip label={contains}/>
      <Spacer width={10}/>
      {values.map((item, index) => (
        <>
          <Chip label={item}/>
          <Spacer width={10}/>
        </>
      ))}
      {showInfoicon && (
          <Tooltip title={infoText}>
            <IconButton>
              <InfoOutlinedIcon />
            </IconButton>
          </Tooltip>
      )}
    </Box>
  );
};

export default Rules;