// src/app/blog/page.tsx
'use client';

import React from 'react';
import Topbar from '../component/topbar';
import { 
  Container, 
  Typography, 
  Box, 
  Card, 
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Chip,
  Grid
} from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const blogPosts = [
  {
    id: 1,
    titulo: 'A Importância da Vacinação Infantil',
    resumo: 'Entenda por que manter o calendário de vacinação em dia é fundamental para a saúde das crianças e para a imunidade coletiva.',
    imagem: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=800&q=80',
    categoria: 'Saúde Infantil',
    autor: 'Dra. Maria Silva',
    data: '15 Dez 2024',
    tempo: '5 min',
    cor: '#4CAF50'
  },
  {
    id: 2,
    titulo: 'COVID-19: Tudo sobre as Doses de Reforço',
    resumo: 'Saiba quando tomar a dose de reforço, quem deve receber e quais são os benefícios da imunização continuada.',
    imagem: 'https://images.unsplash.com/photo-1632053002970-2d96954d9dd6?w=800&q=80',
    categoria: 'COVID-19',
    autor: 'Dr. João Santos',
    data: '10 Dez 2024',
    tempo: '7 min',
    cor: '#2196F3'
  },
  {
    id: 3,
    titulo: 'Mitos e Verdades sobre Vacinas',
    resumo: 'Desmistificamos as principais dúvidas e fake news sobre vacinação com base em evidências científicas.',
    imagem: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80',
    categoria: 'Educação',
    autor: 'Dra. Ana Paula',
    data: '05 Dez 2024',
    tempo: '6 min',
    cor: '#FF9800'
  },
  {
    id: 4,
    titulo: 'Vacina da Gripe: Quando e Por Que Tomar',
    resumo: 'A vacina contra a gripe é anual e essencial para grupos de risco. Entenda mais sobre sua importância.',
    imagem: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&q=80',
    categoria: 'Prevenção',
    autor: 'Dr. Carlos Mendes',
    data: '01 Dez 2024',
    tempo: '4 min',
    cor: '#9C27B0'
  },
  {
    id: 5,
    titulo: 'HPV: Prevenção do Câncer em Jovens',
    resumo: 'A vacina contra HPV é crucial na prevenção de diversos tipos de câncer. Saiba mais sobre indicações e benefícios.',
    imagem: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&q=80',
    categoria: 'Prevenção',
    autor: 'Dra. Beatriz Lima',
    data: '28 Nov 2024',
    tempo: '6 min',
    cor: '#E91E63'
  },
  {
    id: 6,
    titulo: 'Viajando? Conheça as Vacinas Necessárias',
    resumo: 'Antes de viajar, é importante verificar quais vacinas são obrigatórias ou recomendadas para seu destino.',
    imagem: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80',
    categoria: 'Viagens',
    autor: 'Dr. Rafael Costa',
    data: '25 Nov 2024',
    tempo: '8 min',
    cor: '#FFC107'
  }
];

export default function BlogPage() {
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
              <ArticleIcon sx={{ fontSize: 48 }} />
              Blog da Saúde
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto' }}>
              Informações confiáveis e atualizadas sobre vacinação, prevenção e saúde
            </Typography>
          </Box>

          {/* Posts Grid */}
          <Grid container spacing={4}>
            {blogPosts.map((post) => (
              <Grid >
                <Card sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 3,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 32px rgba(102, 126, 234, 0.2)',
                  }
                }}>
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia
                      component="img"
                      height="240"
                      image={post.imagem}
                      alt={post.titulo}
                      sx={{ objectFit: 'cover' }}
                    />
                    <Chip
                      label={post.categoria}
                      size="small"
                      sx={{
                        position: 'absolute',
                        top: 16,
                        left: 16,
                        backgroundColor: post.cor,
                        color: 'white',
                        fontWeight: 600,
                        boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                      }}
                    />
                  </Box>

                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography 
                      variant="h5" 
                      component="h2"
                      sx={{
                        fontWeight: 600,
                        color: '#2d3748',
                        mb: 2,
                        lineHeight: 1.3
                      }}
                    >
                      {post.titulo}
                    </Typography>

                    <Typography 
                      variant="body1" 
                      color="text.secondary"
                      sx={{ mb: 3, lineHeight: 1.7 }}
                    >
                      {post.resumo}
                    </Typography>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <PersonIcon sx={{ fontSize: 18, color: post.cor }} />
                        <Typography variant="body2" color="text.secondary">
                          {post.autor}
                        </Typography>
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <AccessTimeIcon sx={{ fontSize: 18, color: post.cor }} />
                        <Typography variant="body2" color="text.secondary">
                          {post.tempo} de leitura
                        </Typography>
                      </Box>
                    </Box>

                    <Typography variant="caption" color="text.secondary">
                      Publicado em {post.data}
                    </Typography>
                  </CardContent>

                  <CardActions sx={{ p: 3, pt: 0 }}>
                    <Button 
                      fullWidth
                      variant="contained"
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        background: `linear-gradient(135deg, ${post.cor} 0%, ${post.cor}dd 100%)`,
                        color: 'white',
                        fontWeight: 600,
                        py: 1.5,
                        borderRadius: 2,
                        textTransform: 'none',
                        fontSize: '1rem',
                        '&:hover': {
                          background: post.cor,
                          transform: 'scale(1.02)',
                        },
                        transition: 'all 0.2s'
                      }}
                    >
                      Ler Artigo Completo
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Newsletter Section */}
          <Box sx={{
            mt: 8,
            p: 5,
            borderRadius: 3,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            textAlign: 'center'
          }}>
            <ArticleIcon sx={{ fontSize: 56, mb: 2, opacity: 0.9 }} />
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
              Fique por Dentro
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9, maxWidth: 600, mx: 'auto' }}>
              Receba conteúdos exclusivos sobre saúde e vacinação diretamente no seu e-mail
            </Typography>
            <Button 
              variant="contained"
              size="large"
              sx={{
                backgroundColor: 'white',
                color: '#667eea',
                fontWeight: 700,
                px: 5,
                py: 2,
                borderRadius: 3,
                fontSize: '1.1rem',
                '&:hover': {
                  backgroundColor: '#f8f9fa',
                  transform: 'scale(1.05)',
                }
              }}
            >
              Assinar Newsletter
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}