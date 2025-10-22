'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Box, Container, Typography, Card, CardMedia, CardContent, CardActions, Button, Chip } from '@mui/material';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const campanhasData = [
  {
    id: 1,
    titulo: 'Campanha de Vacinação contra a Gripe',
    descricao: 'Proteja-se contra a gripe sazonal. Vacina disponível para todos os grupos prioritários.',
    imagem: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=500&q=80',
    data: '15 Dez - 30 Jan',
    locais: '25 Postos',
    status: 'Ativa',
    cor: '#4CAF50'
  },
  {
    id: 2,
    titulo: 'Imunização COVID-19',
    descricao: 'Doses de reforço disponíveis para todas as idades. Mantenha sua proteção em dia.',
    imagem: 'https://images.unsplash.com/photo-1632053002970-2d96954d9dd6?w=500&q=80',
    data: 'Em Andamento',
    locais: '40 Postos',
    status: 'Ativa',
    cor: '#2196F3'
  },
  {
    id: 3,
    titulo: 'Vacinação Infantil',
    descricao: 'Campanha de atualização da caderneta de vacinação para crianças até 5 anos.',
    imagem: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=500&q=80',
    data: '01 Jan - 28 Fev',
    locais: '30 Postos',
    status: 'Programada',
    cor: '#FF9800'
  },
  {
    id: 4,
    titulo: 'Hepatite B',
    descricao: 'Doses disponíveis para adolescentes e adultos não vacinados.',
    imagem: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=500&q=80',
    data: 'Todo o Ano',
    locais: '20 Postos',
    status: 'Ativa',
    cor: '#9C27B0'
  },
  {
    id: 5,
    titulo: 'HPV',
    descricao: 'Vacinação contra HPV para meninas e meninos de 9 a 14 anos.',
    imagem: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=500&q=80',
    data: 'Permanente',
    locais: '35 Postos',
    status: 'Ativa',
    cor: '#E91E63'
  },
  {
    id: 6,
    titulo: 'Febre Amarela',
    descricao: 'Dose única para residentes e viajantes de áreas de risco.',
    imagem: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&q=80',
    data: 'Sob Demanda',
    locais: '15 Postos',
    status: 'Ativa',
    cor: '#FFC107'
  }
];

export default function CampanhasCarousel() {
  const router = useRouter();

  return (
    <Box sx={{ 
      py: 8, 
      background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)',
      minHeight: '100vh'
    }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 6, textAlign: 'center' }}>
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
            <VaccinesIcon sx={{ fontSize: 48 }} />
            Campanhas 
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
            Confira as campanhas ativas e programe-se para manter sua imunização em dia
          </Typography>
        </Box>

        <Box sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)'
          },
          gap: 3,
          mb: 4
        }}>
          {campanhasData.map((campanha) => (
            <Card 
              key={campanha.id}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 24px rgba(102, 126, 234, 0.15)',
                },
                borderRadius: 3,
                overflow: 'hidden'
              }}
            >
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={campanha.imagem}
                  alt={campanha.titulo}
                  sx={{ objectFit: 'cover' }}
                />
                <Chip
                  label={campanha.status}
                  size="small"
                  sx={{
                    position: 'absolute',
                    top: 12,
                    right: 12,
                    backgroundColor: campanha.cor,
                    color: 'white',
                    fontWeight: 600,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                  }}
                />
              </Box>
              
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Typography 
                  gutterBottom 
                  variant="h6" 
                  component="h2"
                  sx={{
                    fontWeight: 600,
                    color: '#2d3748',
                    mb: 1.5
                  }}
                >
                  {campanha.titulo}
                </Typography>
                
                <Typography 
                  variant="body2" 
                  color="text.secondary"
                  sx={{ mb: 2, lineHeight: 1.6 }}
                >
                  {campanha.descricao}
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CalendarMonthIcon sx={{ fontSize: 18, color: campanha.cor }} />
                    <Typography variant="body2" color="text.secondary">
                      {campanha.data}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <LocationOnIcon sx={{ fontSize: 18, color: campanha.cor }} />
                    <Typography variant="body2" color="text.secondary">
                      {campanha.locais}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>

              <CardActions sx={{ p: 2, pt: 0 }}>
                <Button 
                  fullWidth
                  variant="contained"
                  onClick={() => router.push('/locais')}
                  sx={{
                    background: `linear-gradient(135deg, ${campanha.cor} 0%, ${campanha.cor}dd 100%)`,
                    color: 'white',
                    fontWeight: 600,
                    py: 1.5,
                    borderRadius: 2,
                    textTransform: 'none',
                    fontSize: '1rem',
                    '&:hover': {
                      background: campanha.cor,
                      transform: 'scale(1.02)',
                    },
                    transition: 'all 0.2s'
                  }}
                >
                  Ver Locais
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>

        <Box sx={{
          mt: 6,
          p: 4,
          borderRadius: 3,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          textAlign: 'center'
        }}>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
            Não encontrou a vacina que procura?
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
            Entre em contato conosco ou visite o posto de saúde mais próximo
          </Typography>
          <Button 
            variant="contained"
            size="large"
            onClick={() => router.push('/blog')}
            sx={{
              backgroundColor: 'white',
              color: '#667eea',
              fontWeight: 600,
              px: 4,
              py: 1.5,
              borderRadius: 2,
              '&:hover': {
                backgroundColor: '#f8f9fa',
                transform: 'scale(1.05)',
              }
            }}
          >
            Saiba Mais
          </Button>
        </Box>
      </Container>
    </Box>
  );
}