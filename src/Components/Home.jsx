import { Link } from 'react-router-dom';
import { Stack, Text } from '@mantine/core';

const Home = () => {
    return ( 
      <div>
        <Stack align="flex-start">
          <Link to="/">
            <Text fz="xl">Home page</Text>
          </Link>
          <Text fz="xl">Hi</Text>
        </Stack>
      </div>
    );
}

export default Home;