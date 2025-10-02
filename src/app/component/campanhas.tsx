import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import { Box, Typography, Container, Chip } from '@mui/material';

export default function Campanhas() {
  const [hoveredItem, setHoveredItem] = React.useState<string | null>(null);

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Header da Seção */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
          <VaccinesIcon sx={{ fontSize: 40, color: '#667eea', mr: 1 }} />
          <Typography 
            variant="h3" 
            component="h1" 
            sx={{ 
              fontWeight: 700,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Campanhas de Vacinação
          </Typography>
        </Box>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
          Confira as principais campanhas e mantenha sua carteira de vacinação em dia
        </Typography>
        <Chip 
          label="Dezembro 2024" 
          sx={{ 
            mt: 2,
            backgroundColor: '#667eea',
            color: 'white',
            fontWeight: 600,
            fontSize: '1rem',
            px: 2,
            py: 3,
          }} 
        />
      </Box>

      {/* Grid de Imagens */}
      <ImageList 
        sx={{ 
          width: '100%',
          borderRadius: 2,
          overflow: 'hidden',
        }} 
        cols={3}
        gap={16}
        variant="quilted"
      >
        {itemData.map((item) => (
          <ImageListItem 
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
            sx={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: 2,
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 8px 24px rgba(102, 126, 234, 0.3)',
                zIndex: 1,
              }
            }}
            onMouseEnter={() => setHoveredItem(item.img)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.3s ease',
                transform: hoveredItem === item.img ? 'scale(1.1)' : 'scale(1)',
              }}
            />
            <ImageListItemBar
              title={
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {item.title}
                </Typography>
              }
              subtitle={
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  {item.author}
                </Typography>
              }
              actionIcon={
                <IconButton
                  sx={{ 
                    color: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    mr: 1,
                    transition: 'all 0.3s',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.3)',
                      transform: 'rotate(180deg)',
                    }
                  }}
                  aria-label={`informações sobre ${item.title}`}
                >
                  <InfoIcon />
                </IconButton>
              }
              sx={{
                background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                borderRadius: '0 0 8px 8px',
              }}
            />
            {item.featured && (
              <Chip
                label="Destaque"
                size="small"
                sx={{
                  position: 'absolute',
                  top: 12,
                  right: 12,
                  backgroundColor: '#667eea',
                  color: 'white',
                  fontWeight: 600,
                  zIndex: 2,
                }}
              />
            )}
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Café da Manhã Saudável',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Alimentação Balanceada',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Tecnologia em Saúde',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Pausa para o Café',
    author: '@nolanissac',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Proteção Solar',
    author: '@hjrc33',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Nutrição Natural',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Esporte e Saúde',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Natureza e Bem-estar',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Alimentação Orgânica',
    author: '@silverdalex',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Culinária Saudável',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Vitamina D',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Mobilidade Ativa',
    author: '@southside_customs',
    cols: 2,
  },
];