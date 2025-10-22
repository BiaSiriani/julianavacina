// src/app/carteirinha/page.tsx
'use client';

import React from 'react';
import Topbar from '../component/topbar';
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Button,
  Avatar
} from '@mui/material';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import DownloadIcon from '@mui/icons-material/Download';
import PrintIcon from '@mui/icons-material/Print';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ScheduleIcon from '@mui/icons-material/Schedule';
import QrCode2Icon from '@mui/icons-material/QrCode2';

const vacinasData = [
  {
    id: 1,
    nome: 'COVID-19 (Pfizer)',
    dose: '3ª Dose',
    data: '15/11/2024',
    local: 'UBS Centro',
    lote: 'ABC123',
    status: 'Completo',
    cor: '#4CAF50'
  },
  {
    id: 2,
    nome: 'Gripe (Influenza)',
    dose: 'Dose Anual',
    data: '10/10/2024',
    local: 'Posto Jardim América',
    lote: 'FLU456',
    status: 'Completo',
    cor: '#4CAF50'
  },
  {
    id: 3,
    nome: 'Hepatite B',
    dose: '2ª Dose',
    data: '05/09/2024',
    local: 'Centro de Saúde Vila Nova',
    lote: 'HEP789',
    status: 'Completo',
    cor: '#4CAF50'
  },
  {
    id: 4,
    nome: 'Tétano',
    dose: 'Reforço',
    data: 'Previsto: 20/01/2025',
    local: 'A definir',
    lote: '-',
    status: 'Agendado',
    cor: '#FF9800'
  }
];

export default function CarteirinhaPage() {
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
              <VaccinesIcon sx={{ fontSize: 48 }} />
              Minha Carteirinha de Vacinação
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Histórico completo de vacinas e próximas doses
            </Typography>
          </Box>

          {/* Carteirinha Card */}
          <Card sx={{
            mb: 4,
            borderRadius: 3,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            boxShadow: '0 8px 32px rgba(102, 126, 234, 0.3)'
          }}>
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap', gap: 3 }}>
                <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                  <Avatar
                    sx={{
                      width: 80,
                      height: 80,
                      border: '3px solid white',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                    }}
                    alt="Juliana Silva"
                    src="/static/images/avatar/2.jpg"
                  />
                  <Box>
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                      Juliana Silva
                    </Typography>
                    <Typography variant="body1" sx={{ opacity: 0.9, mb: 0.5 }}>
                      CPF: 123.456.789-00
                    </Typography>
                    <Typography variant="body1" sx={{ opacity: 0.9 }}>
                      Data de Nascimento: 15/05/1990
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ textAlign: 'center', bgcolor: 'white', p: 2, borderRadius: 2 }}>
                  <QrCode2Icon sx={{ fontSize: 80, color: '#667eea' }} />
                  <Typography variant="caption" sx={{ color: '#667eea', fontWeight: 600 }}>
                    QR Code Digital
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ mt: 3, pt: 3, borderTop: '1px solid rgba(255,255,255,0.2)' }}>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  Carteirinha Digital - Juliana Vacina
                </Typography>
                <Typography variant="caption" sx={{ opacity: 0.7 }}>
                  Documento válido em todo território nacional
                </Typography>
              </Box>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <Box sx={{ mb: 4, display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              startIcon={<DownloadIcon />}
              sx={{
                background: 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)',
                px: 4,
                py: 1.5,
                borderRadius: 2,
                fontWeight: 600
              }}
            >
              Baixar PDF
            </Button>
            <Button
              variant="outlined"
              startIcon={<PrintIcon />}
              sx={{
                borderColor: '#667eea',
                color: '#667eea',
                px: 4,
                py: 1.5,
                borderRadius: 2,
                fontWeight: 600,
                '&:hover': {
                  borderColor: '#667eea',
                  backgroundColor: 'rgba(102, 126, 234, 0.05)'
                }
              }}
            >
              Imprimir
            </Button>
          </Box>

          {/* Tabela de Vacinas */}
          <Card sx={{ borderRadius: 3 }}>
            <CardContent sx={{ p: 0 }}>
              <Box sx={{ p: 3, borderBottom: '1px solid #e0e0e0' }}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Histórico de Vacinação
                </Typography>
              </Box>
              
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow sx={{ bgcolor: '#f8f9fa' }}>
                      <TableCell sx={{ fontWeight: 600 }}>Vacina</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Dose</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Data</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Local</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Lote</TableCell>
                      <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {vacinasData.map((vacina) => (
                      <TableRow 
                        key={vacina.id}
                        sx={{
                          '&:hover': {
                            backgroundColor: '#f8f9fa'
                          }
                        }}
                      >
                        <TableCell>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <VaccinesIcon sx={{ color: vacina.cor, fontSize: 20 }} />
                            <Typography variant="body2" sx={{ fontWeight: 600 }}>
                              {vacina.nome}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>{vacina.dose}</TableCell>
                        <TableCell>{vacina.data}</TableCell>
                        <TableCell>{vacina.local}</TableCell>
                        <TableCell>{vacina.lote}</TableCell>
                        <TableCell>
                          <Chip
                            icon={vacina.status === 'Completo' ? <CheckCircleIcon /> : <ScheduleIcon />}
                            label={vacina.status}
                            size="small"
                            sx={{
                              backgroundColor: vacina.cor,
                              color: 'white',
                              fontWeight: 600
                            }}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>

          {/* Alert Box */}
          <Box sx={{
            mt: 4,
            p: 3,
            borderRadius: 3,
            border: '2px solid #FF9800',
            backgroundColor: '#FFF3E0',
            display: 'flex',
            alignItems: 'center',
            gap: 2
          }}>
            <ScheduleIcon sx={{ fontSize: 40, color: '#FF9800' }} />
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600, color: '#F57C00', mb: 0.5 }}>
                Próxima Vacina Agendada
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Tétano (Reforço) - 20/01/2025
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}