'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Topbar from './component/topbar';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Avatar,
} from '@mui/material';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArticleIcon from '@mui/icons-material/Article';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SecurityIcon from '@mui/icons-material/Security';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

export default function Home() {
  const router = useRouter();

  const features = [
    {
      icon: <VaccinesIcon sx={{ fontSize: 48 }} />,
      titulo: 'Campanhas Ativas',
      descricao: 'Acompanhe todas as campanhas de vacinação disponíveis',
      cor: '#4CAF50',
      rota: '/campanhas',
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: 48 }} />,
      titulo: 'Locais Próximos',
      descricao: 'Encontre postos de vacinação perto de você',
      cor: '#2196F3',
      rota: '/locais',
    },
    {
      icon: <CalendarMonthIcon sx={{ fontSize: 48 }} />,
      titulo: 'Minha Carteirinha',
      descricao: 'Acesse seu histórico completo de vacinação',
      cor: '#FF9800',
      rota: '/carteirinha',
    },
    {
      icon: <ArticleIcon sx={{ fontSize: 48 }} />,
      titulo: 'Blog da Saúde',
      descricao: 'Informações confiáveis sobre vacinas e saúde',
      cor: '#9C27B0',
      rota: '/blog',
    },
  ];

  return (
    <>
      <Topbar />

      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                }}
              >
                Sua Saúde em Dia com a Imuniza Brasil
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  opacity: 0.95,
                  lineHeight: 1.6,
                }}
              >
                Acompanhe suas vacinas, encontre locais de vacinação e mantenha
                sua família protegida. Tudo em um só lugar!
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => router.push('/campanhas')}
                  sx={{
                    backgroundColor: 'white',
                    color: '#667eea',
                    fontWeight: 700,
                    px: 4,
                    py: 2,
                    fontSize: '1.1rem',
                    borderRadius: 3,
                    '&:hover': {
                      backgroundColor: '#f8f9fa',
                      transform: 'scale(1.05)',
                    },
                    transition: 'all 0.2s',
                  }}
                >
                  Ver Campanhas
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => router.push('/carteirinha')}
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    fontWeight: 700,
                    px: 4,
                    py: 2,
                    fontSize: '1.1rem',
                    borderRadius: 3,
                    borderWidth: 2,
                    '&:hover': {
                      borderColor: 'white',
                      borderWidth: 2,
                      backgroundColor: 'rgba(255,255,255,0.1)',
                    },
                  }}
                >
                  Minha Carteirinha
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <VaccinesIcon sx={{ fontSize: 300, opacity: 0.2 }} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 8, backgroundColor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{ fontWeight: 700, mb: 2, color: '#2d3748' }}
            >
              Tudo que Você Precisa
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Recursos completos para gerenciar sua imunização
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  onClick={() => router.push(feature.rota)}
                  sx={{
                    height: '100%',
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-12px)',
                      boxShadow: `0 12px 32px ${feature.cor}40`,
                    },
                  }}
                >
                  <CardContent sx={{ textAlign: 'center', py: 4 }}>
                    <Avatar
                      sx={{
                        bgcolor: feature.cor,
                        width: 56,
                        height: 56,
                        margin: '0 auto',
                        mb: 2,
                      }}
                    >
                      {feature.icon}
                    </Avatar>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                      {feature.titulo}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.descricao}
                    </Typography>
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
