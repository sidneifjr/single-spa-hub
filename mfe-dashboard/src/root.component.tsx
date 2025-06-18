import { Box, Grid } from "@mui/material";
import { HeroCard } from "./components/hero-card";
import { UserCard } from "./components/user-card";
import { WaterCard } from "./components/water-card";

export default function Root(props) {
  return (
    <Box width={2/3} my={4} display='flex' alignItems='center' gap={4} p={2} sx={{ margin: 'auto' }}>
      <Grid container spacing={2}>
        <Grid size={12}>
          <HeroCard />
        </Grid>

        <Grid size={4}>
          <UserCard />
        </Grid>

        <Grid size={4}>
          <WaterCard />
        </Grid>
      </Grid>
    </Box>
  )
}
