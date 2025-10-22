// src/app/meus-locais/page.tsx
'use client';

import React from 'react';
import Topbar from '../component/topbar';
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  Chip,
  IconButton,
  Divider
} from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhoneIcon from '@mui/icons-material/Phone';
import DirectionsIcon from '@mui/icons-material/Directions';
import DeleteIcon from '@mui/icons-material/Delete';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import StarIcon from '@mui/icons-material/Star';

const locaisFavoritos = [
  {
    id: 1,
    nome: 'UBS Centro',
    endereco: 'Rua das Flores, 123 - Centro',
    horario: 'Segunda a Sexta: 8h às 17h',
    telefone: '(11) 3333-4444',
    distancia: '1.2 km',
    favorito: true,
    ultimaVisita: '15/11/2024'
  },
  {
    id: 2,
    nome: 'Posto de Saúde Jardim América',
    endereco: 'Av. América, 456 - Jardim América',
    horario: 'Segunda a Sexta: 7h às 19h | Sábado: 8h às 12h',
    telefone: '(11) 3333-5555',
    distancia: '2.5 km',
    favorito: true,
    ultimaVisita: '10/10/2024'
  },
  {
    id: 3,
    nome: 'Centro de Saúde Vila Nova',
    endereco: 'Rua Nova, 789 - Vila Nova',
    horario: 'Segunda a Sexta: 8h às 16h',
    telefone: '(11) 3333-6666',
    distancia: '3.8 km',
    favorito: false,
    ultimaVisita: '05/09/2024'
  }
];

export default function MeusLocaisPage() {
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
                mb: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2
              }}
            >
              <BookmarkIcon sx={{ fontSize: 48 }} />
              Meus Locais de Vacina
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Gerencie seus locais favoritos e histórico de visitas
            </Typography>
          </Box>

          {/* Add New Location Button */}
          <Box sx={{ mb: 4, textAlign: 'center' }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<AddLocationIcon />}
              sx={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                px: 4,
                py: 1.5,
                borderRadius: 2,
                fontWeight: 600,
                fontSize: '1rem'
              }}
            >
              Adicionar Novo Local
            </Button>
          </Box>

          {/* Stats Cards */}
          <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid item xs={12} sm={4}>
              <Card sx={{ 
                borderRadius: 3,
                background: 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)',
                color: 'white'
              }}>
                <CardContent sx={{ textAlign: 'center', py: 3 }}>
                  <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
                    3
                  </Typography>
                  <Typography variant="h6">
                    Locais Salvos
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card sx={{ 
                borderRadius: 3,
                background: 'linear-gradient(135deg, #2196F3 0%, #1976D2 100%)',
                color: 'white'
              }}>
                <CardContent sx={{ textAlign: 'center', py: 3 }}>
                  <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
                    12
                  </Typography>
                  <Typography variant="h6">
                    Visitas Realizadas
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card sx={{ 
                borderRadius: 3,
                background: 'linear-gradient(135deg, #FF9800 0%, #F57C00 100%)',
                color: 'white'
              }}>
                <CardContent sx={{ textAlign: 'center', py: 3 }}>
                  <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
                    1.8
                  </Typography>
                  <Typography variant="h6">
                    km (Média)
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Locais List */}
          <Grid container spacing={3}>
            {locaisFavoritos.map((local) => (
              <Grid item xs={12} key={local.id}>
                <Card sx={{
                  borderRadius: 3,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(102, 126, 234, 0.15)',
                  }
                }}>
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 2 }}>
                      <Box sx={{ display: 'flex', gap: 2, alignItems: 'start', flex: 1 }}>
                        {local.favorito && (
                          <StarIcon sx={{ color: '#FFD700', fontSize: 28 }} />
                        )}
                        <Box sx={{ flex: 1 }}>
                          <Typography variant="h6" sx={{ fontWeight: 600, color: '#2d3748', mb: 1 }}>
                            {local.nome}
                          </Typography>
                          <Chip 
                            label={`Última visita: ${local.ultimaVisita}`}
                            size="small"
                            sx={{ mb: 2 }}
                          />
                        </Box>
                      </Box>

                      <IconButton 
                        sx={{ 
                          color: '#f44336',
                          '&:hover': { backgroundColor: 'rgba(244, 67, 54, 0.1)' }
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>

                    <Divider sx={{ my: 2 }} />

                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
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
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, height: '100%', justifyContent: 'center' }}>
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
                            Ver Campanhas
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
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