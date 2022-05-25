import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export const FilterCard: React.FC<any> = (props) => {
  return (
    <Card sx={{ minWidth: 275 }} raised>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Filter content
        </Typography>
      </CardContent>
    </Card>
  )
}