/** @format */

import {
  Button,
  Group,
  Loader,
  Paper,
  Text,
  useMantineColorScheme,
} from "@mantine/core";

function App() {
  const { setColorScheme, clearColorScheme } = useMantineColorScheme({
    keepTransitions: true,
  });

  return (
    <>
      <Paper>
        <Text>Whereas recognition of the inherent dignity</Text>
        <Button>Lorem, ipsum dolor.</Button>
        <Loader />
      </Paper>

      <Group>
        <Button onClick={() => setColorScheme("light")}>Light</Button>
        <Button onClick={() => setColorScheme("dark")}>Dark</Button>
        <Button onClick={() => setColorScheme("auto")}>Auto</Button>
        <Button onClick={clearColorScheme}>Clear</Button>
      </Group>
    </>
  );
}

export default App;
