import React from 'react';
import TaskList from './taskList';
import { Container, Box } from "@mui/material";

function App() {
  return (
    <Container maxWidth="xl">
      <Box p={4}>
        <TaskList />
      </Box>
    </Container>
  );
}

export default App;