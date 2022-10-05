import React from 'react';
import { Button, Card, CardActions, CardContent } from '@mui/material';

type Props = {
  height: string;
};

export const DashboardContentCard: React.FC<Props> = ({ height }) => {
  return (
    <Card sx={{ borderRadius: '10px', height: height }} elevation={2}>
      <CardContent></CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default DashboardContentCard;
