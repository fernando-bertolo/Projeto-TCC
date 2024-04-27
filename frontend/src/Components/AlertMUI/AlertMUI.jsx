import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

export default function AlertMUI() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert variant="filled" severity="success">
        <AlertTitle>Sucess</AlertTitle>
        This is a filled success Alert.
      </Alert>
      <Alert variant="filled" severity="info">
        This is a filled info Alert.
      </Alert>
      <Alert variant="filled" severity="warning">
        This is a filled warning Alert.
      </Alert>
      <Alert variant="filled" severity="error">
        This is a filled error Alert.
      </Alert>
    </Stack>
  );
}
