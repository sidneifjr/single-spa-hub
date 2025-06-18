import { Box, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import visaoGeral from '../../assets/visao-geral.svg'

export function HeroCard() {
  return (
    <Card sx={{ background: '#FFF3E0' }}>
      <CardContent>
        <Box display='flex' justifyContent='center' alignItems='center'>
          <Box>
            <Typography>Olá, usuário!</Typography>
            <Typography>Confira as informações da sua casa inteligente!</Typography>
          </Box>

          <img src={visaoGeral} alt="Visão Geral" height={180} />
        </Box>
      </CardContent>
    </Card>
  )
}