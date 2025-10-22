'use client';

import React from 'react';
import Topbar from '../component/topbar';
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  TextField,
  Button,
  Grid,
  Divider,
  Paper
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import CakeIcon from '@mui/icons-material/Cake';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

export default function UsuarioPage() {
  const [editMode, setEditMode] = React.useState(false);

  return (
    <>
      <Topbar />
      <Box
        sx={{
          py: 6,
          background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)',
          minHeight: '100vh'
        }}
      >
        <Container maxWidth="md">
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
              Meu Perfil
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Gerencie suas informações pessoais
            </Typography>
          </Box>

          {/* Profile Card */}
          <Card sx={{ mb: 4, borderRadius: 3, overflow: 'visible' }}>
            <Box
              sx={{
                height: 120,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                position: 'relative'
              }}
            >
              <Avatar
                sx={{
                  width: 120,
                  height: 120,
                  position: 'absolute',
                  bottom: -60,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  border: '5px solid white',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                }}
                alt="Usuário"
                src="/static/images/avatar/2.jpg"
              />
            </Box>

            <CardContent sx={{ pt: 10, pb: 4 }}>
              <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
                  Juliana Silva
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  juliana.silva@email.com
                </Typography>
              </Box>

              <Divider sx={{ my: 3 }} />

              {/* Form Fields */}
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Nome Completo"
                    defaultValue="Juliana Silva"
                    disabled={!editMode}
                    InputProps={{
                      startAdornment: <PersonIcon sx={{ mr: 1, color: '#667eea' }} />
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Data de Nascimento"
                    type="date"
                    defaultValue="1990-05-15"
                    disabled={!editMode}
                    InputLabelProps={{ shrink: true }}
                    InputProps={{
                      startAdornment: <CakeIcon sx={{ mr: 1, color: '#667eea' }} />
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    defaultValue="juliana.silva@email.com"
                    disabled={!editMode}
                    InputProps={{
                      startAdornment: <EmailIcon sx={{ mr: 1, color: '#667eea' }} />
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Telefone"
                    defaultValue="(11) 98765-4321"
                    disabled={!editMode}
                    InputProps={{
                      startAdornment: <PhoneIcon sx={{ mr: 1, color: '#667eea' }} />
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Endereço"
                    defaultValue="Rua das Flores, 123 - Centro"
                    disabled={!editMode}
                    InputProps={{
                      startAdornment: <LocationOnIcon sx={{ mr: 1, color: '#667eea' }} />
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Cidade" defaultValue="São Paulo" disabled={!editMode} />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="CEP" defaultValue="01234-567" disabled={!editMode} />
                </Grid>
              </Grid>

              {/* Action Buttons */}
              <Box sx={{ mt: 4, display: 'flex', gap: 2, justifyContent: 'center' }}>
                {!editMode ? (
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<EditIcon />}
                    onClick={() => setEditMode(true)}
                    sx={{
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      px: 4,
                      py: 1.5,
                      borderRadius: 2,
                      fontWeight: 600
                    }}
                  >
                    Editar Perfil
                  </Button>
                ) : (
                  <>
                    <Button
                      variant="contained"
                      size="large"
                      startIcon={<SaveIcon />}
                      onClick={() => setEditMode(false)}
                      sx={{
                        background: 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)',
                        px: 4,
                        py: 1.5,
                        borderRadius: 2,
                        fontWeight: 600
                      }}
                    >
                      Salvar Alterações
                    </Button>
                    <Button
                      variant="outlined"
                      size="large"
                      onClick={() => setEditMode(false)}
                      sx={{
                        borderColor: '#667eea',
                        color: '#667eea',
                        px: 4,
                        py: 1.5,
                        borderRadius: 2,
                        fontWeight: 600
                      }}
                    >
                      Cancelar
                    </Button>
                  </>
                )}
              </Box>
            </CardContent>
          </Card>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <Paper sx={{ p: 3, textAlign: 'center', borderRadius: 3 }}>
                <Typography variant="h3" sx={{ fontWeight: 700, color: '#4CAF50', mb: 1 }}>
                  12
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Vacinas Tomadas
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper sx={{ p: 3, textAlign: 'center', borderRadius: 3 }}>
                <Typography variant="h3" sx={{ fontWeight: 700, color: '#2196F3', mb: 1 }}>
                  3
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Campanhas Ativas
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper sx={{ p: 3, textAlign: 'center', borderRadius: 3 }}>
                <Typography variant="h3" sx={{ fontWeight: 700, color: '#FF9800', mb: 1 }}>
                  5
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Lembretes Ativos
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
