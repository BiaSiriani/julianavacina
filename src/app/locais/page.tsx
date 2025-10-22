// src/app/locais/page.tsx
'use client';

import React from 'react';
import Topbar from '../component/topbar';
import { 
  Container, 
  Typography, 
  Box, 
  Card, 
  CardContent,
  TextField,
  InputAdornment,
  Grid,
  Chip,
  Button
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhoneIcon from '@mui/icons-material/Phone';
import DirectionsIcon from '@mui/icons-material/Directions';

const locaisData = [
  {
    id: 1,
    nome: 'UBS Centro',
    endereco: 'Rua das Flores, 123 - Centro',
    horario: 'Segunda a Sexta: 8h às 17h',
    telefone: '(11) 3333-4444',
    distancia: '1.2 km',
    disponivel: true
  },
  {
    id: 2,
    nome: 'Posto de Saúde Jardim América',
    endereco: 'Av. América, 456 - Jardim América',
    horario: 'Segunda a Sexta: 7h às 19h | Sábado: 8h às 12h',
    telefone: '(11) 3333-5555',
    distancia: '2.5 km',
    disponivel: true
  },
  {
    id: 3,
    nome: 'Centro de Saúde Vila Nova',
    endereco: 'Rua Nova, 789 - Vila Nova',
    horario: 'Segunda a Sexta: 8h às 16h',
    telefone: '(11) 3333-6666',
    distancia: '3.8 km',
    disponivel: false
  },
  {
    id: 4,
    nome: 'UBS Parque das Árvores',
    endereco: 'Rua das Árvores, 321 - Parque Verde',
    horario: 'Segunda a Sexta: 7h às 18h',
    telefone: '(11) 3333-7777',
    distancia: '4.2 km',
    disponivel: true
  }
];

export default function LocaisPage() {
  return (
    <>
      <Topbar />
      <Box sx={{ 
        py: 6, 
        background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)',
        minHeight: '100vh'
      }}>
        <Container maxWidth="lg">
          {/* Header */}
          <Box sx={{ mb: 4, textAlign: 'center' }}>
            <Typography 
              variant="h3" 
              component="h1" 
              gutterBottom
              sx={{
                fontWeight: 700,
                color: '#667eea',
                mb: 2
              }}
            >
              <LocationOnIcon sx={{ fontSize: 48, mr: 1, verticalAlign: 'middle' }} />
              Locais de Vacinação
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Encontre o posto de saúde mais próximo de você
            </Typography>
          </Box>

          {/* Search Bar */}
          <Box sx={{ mb: 4 }}>
            <TextField
              fullWidth
              placeholder="Buscar por endereço, bairro ou CEP..."
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                sx: {
                  borderRadius: 3,
                  backgroundColor: 'white',
                  '& fieldset': {
                    borderColor: '#e0e0e0',
                  }
                }
              }}
            />
          </Box>

          {/* Locais Grid */}
          <Grid container spacing={3}>
            {locaisData.map((local) => (
              <Grid item xs={12} md={6} key={local.id}>
                <Card sx={{
                  height: '100%',
                  borderRadius: 3,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(102, 126, 234, 0.15)',
                  }
                }}>
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 2 }}>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: '#2d3748' }}>
                        {local.nome}
                      </Typography>
                      <Chip
                        label={local.disponivel ? 'Disponível' : 'Indisponível'}
                        size="small"
                        sx={{
                          backgroundColor: local.disponivel ? '#4CAF50' : '#f44336',
                          color: 'white',
                          fontWeight: 600
                        }}
                      />
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                      <Box sx={{ display: 'flex', alignItems: 'start', gap: 1 }}>
                        <LocationOnIcon sx={{ fontSize: 20, color: '#667eea', mt: 0.3 }} />
                        <Typography variant="body2" color="text.secondary">
                          {local.endereco}
                        </Typography>
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'start', gap: 1 }}>
                        <AccessTimeIcon sx={{ fontSize: 20, color: '#667eea', mt: 0.3 }} />
                        <Typography variant="body2" color="text.secondary">
                          {local.horario}
                        </Typography>
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <PhoneIcon sx={{ fontSize: 20, color: '#667eea' }} />
                        <Typography variant="body2" color="text.secondary">
                          {local.telefone}
                        </Typography>
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <DirectionsIcon sx={{ fontSize: 20, color: '#667eea' }} />
                        <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600 }}>
                          {local.distancia} de você
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
                      <Button
                        fullWidth
                        variant="contained"
                        startIcon={<DirectionsIcon />}
                        sx={{
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          borderRadius: 2,
                          py: 1.5,
                          fontWeight: 600,
                          textTransform: 'none'
                        }}
                      >
                        Como Chegar
                      </Button>
                      <Button
                        fullWidth
                        variant="outlined"
                        sx={{
                          borderColor: '#667eea',
                          color: '#667eea',
                          borderRadius: 2,
                          py: 1.5,
                          fontWeight: 600,
                          textTransform: 'none',
                          '&:hover': {
                            borderColor: '#667eea',
                            backgroundColor: 'rgba(102, 126, 234, 0.05)'
                          }
                        }}
                      >
                        Detalhes
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}