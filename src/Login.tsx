import { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  IconButton,
  Fab,
  Avatar,
  Box,
  Tooltip,
  Zoom,
  Fade,
  Stack,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";

import {
  LinkedIn,
  Email,
  Phone,
  LocationOn,
  CloudUpload,
  ArrowUpward,
  Work,
  Menu as MenuIcon,
} from '@mui/icons-material';

const useTypingEffect = (text, speed = 100) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.substring(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return displayText;
};

const Portfolio = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [projectFilter, setProjectFilter] = useState('All');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const typedText = useTypingEffect('Full Stack Developer & AI Enthusiast', 100);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const skills = {
    frontend: [
      { name: 'React.js', color: '#61DAFB' },
      { name: 'TypeScript', color: '#3178C6' },
      { name: 'Tailwind CSS', color: '#06B6D4' },
      { name: 'Redux', color: '#764ABC' },
    ],
    backend: [
      { name: 'Python', color: '#3776AB' },
      { name: 'FastAPI', color: '#009688' },
      { name: 'MongoDB', color: '#47A248' },
      { name: 'RESTful APIs', color: '#563D7C' },
    ],
    tools: [
      { name: 'Git', color: '#F05032' },
      { name: 'AWS S3', color: '#FF9900' },
      { name: 'QdrantDB', color: '#4ECDC4' },
      { name: 'Tableau', color: '#E97658' },
    ],
    ai: [
      { name: 'OpenAI GPT-3', color: '#74AA9C' },
      { name: 'RAG Pipelines', color: '#8FBCBB' },
      { name: 'Vector Embeddings', color: '#88C0D0' },
      { name: 'Google Vision API', color: '#5E81AC' },
    ]
  };

  const projects = [
    {
      name: 'AI-Powered Learning Management System (LMS)',
      description:
        'Built a full-featured AI-powered LMS serving 400+ active users with multi-level role-based access (Admin, Trainer, Learner) for employee training and client onboarding. The platform includes AI-driven knowledge retrieval using RAG pipelines, a contextual chatbot powered by GPT embeddings, smart analytics dashboards, and a centralized content repository.',
      technologies: [
        'React.js',
        'TypeScript',
        'Redux',
        'Tailwind CSS',
        'Python',
        'FastAPI',
        'MongoDB',
        'QdrantDB',
        'JWT',
        'AWS S3',
        'OpenAI GPT-3'
      ],
      category: 'AI/ML'
    },
    {
      name: 'Resume Intelligence System (RAG)',
      description: 'Built a Retrieval-Augmented Generation (RAG) system that ingests PDF resumes, performs semantic chunking and embedding, and enables natural-language querying via FastAPI and vector search.',
      technologies: [
        'Python',
        'FastAPI',
        'Sentence Transformers',
        'FAISS',
        'PyPDF2',
        'LLMs (RAG)'
      ],
      category: 'AI/ML'
    },
    {
      name: 'E-Commerce Platform',
      description: 'Built a full-stack e-commerce application with product management, authentication, and order processing. Implemented image-based product recommendations using Google Vision API and cosine similarity.',
      technologies: ['Flask', 'React.js', 'Google Vision API'],
      category: 'Web'
    },
    {
      name: 'Sales Analytics Dashboard',
      description: 'Conducted advanced data analysis on sales datasets and created interactive visualizations using Tableau, providing actionable business insights.',
      technologies: ['Tableau', 'Python'],
      category: 'Data'
    },
  ];

  const experiences = [
    {
      title: 'Software Specialist',
      company: 'Delaplex Ltd.',
      period: 'May 2024 - Dec 2025',
      description: [
        'Developed and deployed an AI-powered LMS for 400+ users with role-based access control (Admin/Trainer/Learner), supporting employee training, onboarding, and analytics dashboards.',
        'Built scalable backend services using Python with REST APIs, JWT authentication, and AWS S3 integration; improved performance by reducing API calls by 60% using caching and debouncing techniques.',
        'Created reusable frontend components using React, TypeScript, and Redux, reducing code duplication by 40%, and implemented an AI chatbot using RAG and GPT embeddings to enhance information retrieval accuracy.'
      ],
      icon: <Work />
    },
    {
      title: 'Software Specialist Trainee',
      company: 'Delaplex Ltd.',
      period: 'May 2024 - Oct 2024',
      description: [
        'Built a full-stack e-commerce application using Flask, React.js, and MongoDB, including RESTful APIs for product management, authentication, and order processing with proper validation.',
        'Implemented image-based product recommendations using Google Vision API and cosine similarity, and designed a warehouse management POC supporting CSV/text/image uploads, improving inventory operations by 50%.'
      ],
      icon: <Work />
    },
  ];

  const categories = ['All', 'Web', 'AI/ML', 'Data'];
  const filteredProjects = projectFilter === 'All'
    ? projects
    : projects.filter(p => p.category === projectFilter);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <AppBar position="fixed" sx={{ backgroundColor: 'rgba(15, 23, 42, 0.95)', backdropFilter: 'blur(10px)' }}>
        <Toolbar>
          <Typography variant="h6" className="flex-grow font-bold" sx={{
            background: 'linear-gradient(135deg, #00b4d8 0%, #90e0ef 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Vedant Mundel
          </Typography>
          
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {navItems.map((item) => (
              <Button key={item.label} sx={{ color: 'white' }} href={item.href}>
                {item.label}
              </Button>
            ))}
          </Box>

          <IconButton
            sx={{ display: { xs: 'flex', md: 'none' }, color: 'white' }}
            onClick={toggleMobileMenu}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={toggleMobileMenu}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            backgroundColor: '#1e293b',
            width: 250,
          }
        }}
      >
        <List sx={{ pt: 8 }}>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton onClick={() => handleNavClick(item.href)}>
                <ListItemText 
                  primary={item.label} 
                  sx={{ 
                    color: 'white',
                    '& .MuiTypography-root': {
                      fontWeight: 500,
                      fontSize: '1.1rem'
                    }
                  }} 
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}>
        <Container className="z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Fade in timeout={1000}>
                <Typography variant="h2" className="font-bold mb-4" sx={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
                  Hi, I'm <span style={{
                    background: 'linear-gradient(135deg, #00b4d8 0%, #90e0ef 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>Vedant Mundel</span>
                </Typography>
              </Fade>

              <Fade in timeout={1500}>
                <Typography variant="h4" className="mb-6" sx={{ color: '#90e0ef', minHeight: '40px', fontFamily: "'Fira Code', monospace" }}>
                  {typedText}<span className="animate-pulse" style={{ color: '#00b4d8', fontSize: '1.5rem' }}>|</span>
                </Typography>
              </Fade>

              <Fade in timeout={2000}>
                <Typography variant="body1" sx={{ color: '#e0f2fe', fontSize: '1.1rem', lineHeight: 1.6 }}>
                  Full Stack Developer with 1.5+ years of experience building scalable web applications and AI-powered solutions. Expertise in React.js, Python (FastAPI), MongoDB, and RESTful APIs. Proven track record delivering production applications serving 400+ users.
                </Typography>
              </Fade>

              <div className="flex gap-4 justify-center lg:justify-start mb-8 mt-8">
                <Zoom in timeout={2400}>
                  <Tooltip title="LinkedIn">
                    <a href="https://www.linkedin.com/in/vedant-mundel" target="_blank" rel="noopener noreferrer">
                      <IconButton sx={{
                        bgcolor: 'rgba(0, 180, 216, 0.2)',
                        color: '#00b4d8',
                        border: '1px solid rgba(0, 180, 216, 0.3)',
                        '&:hover': { bgcolor: 'rgba(0, 180, 216, 0.3)', borderColor: '#00b4d8' },
                        width: 50,
                        height: 50,
                      }}>
                        <LinkedIn />
                      </IconButton>
                    </a>
                  </Tooltip>
                </Zoom>
              </div>

              <Fade in timeout={2800}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    background: 'linear-gradient(135deg, #0077b6 0%, #00b4d8 100%)',
                    color: 'white',
                    fontWeight: 600,
                    padding: '12px 32px',
                    borderRadius: '50px',
                    boxShadow: '0 4px 15px rgba(0, 180, 216, 0.3)',
                    '&:hover': { background: 'linear-gradient(135deg, #005f9e 0%, #0096c7 100%)', boxShadow: '0 6px 20px rgba(0, 180, 216, 0.4)' },
                    transition: 'all 0.3s ease',
                  }}
                  href="#contact"
                >
                  Get In Touch
                </Button>
              </Fade>
            </div>

            <Fade in timeout={2200}>
              <div className="hidden lg:flex justify-center items-center">
                <img
                  src="https://image.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg"
                  alt="coding illustration"
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    filter: 'drop-shadow(0 20px 40px rgba(0, 180, 216, 0.3))',
                    borderRadius: '20px'
                  }}
                />
              </div>
            </Fade>
          </div>
        </Container>
      </section>

      <section id="about" className="py-20 px-4" style={{ backgroundColor: '#0f172a' }}>
        <div className="w-full">
          <Typography variant="h3" className="text-center mb-12 font-bold">
            About <span style={{
              background: 'linear-gradient(135deg, #00b4d8 0%, #90e0ef 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Me</span>
          </Typography>

          <div className="w-full" style={{
            background: 'rgba(30, 41, 59, 0.5)',
            borderTop: '1px solid rgba(0, 180, 216, 0.2)',
            borderBottom: '1px solid rgba(0, 180, 216, 0.2)',
            padding: '60px 0'
          }}>
            <Container>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                <div className="flex justify-center lg:justify-start">
                  <Avatar sx={{
                    width: 200,
                    height: 200,
                    fontSize: '4rem',
                    background: 'linear-gradient(135deg, #0077b6, #00b4d8)',
                    border: '4px solid rgba(0, 180, 216, 0.5)',
                    boxShadow: '0 10px 30px rgba(0, 180, 216, 0.3)'
                  }}>
                    VM
                  </Avatar>
                </div>

                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <Typography variant="h4" className="font-bold mb-2" sx={{ color: 'white' }}>
                      Vedant Mundel
                    </Typography>
                    <Typography variant="h6" className="mb-4" sx={{ color: '#90e0ef' }}>
                      Full Stack Developer & AI Engineer
                    </Typography>
                    <Chip label="Available for Hire" sx={{
                      bgcolor: 'rgba(34, 197, 94, 0.2)',
                      color: '#4ade80',
                      border: '1px solid rgba(34, 197, 94, 0.3)',
                      mb: 3
                    }} />
                  </div>

                  <Typography variant="body1" sx={{ color: '#e0f2fe', lineHeight: 1.8 }}>
                    I'm a passionate Full Stack Developer and AI Engineer with 1.5+ years of experience building scalable web applications and AI-powered solutions. I specialize in React.js, FastAPI, and MongoDB, and I love creating intuitive user experiences and optimizing application performance.
                  </Typography>

                  <Typography variant="body1" sx={{ color: '#e0f2fe', lineHeight: 1.8 }}>
                    When I'm not coding, you'll find me solving problems on LeetCode, or exploring the latest advancements in AI and web technologies.
                  </Typography>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {['React.js', 'Python', 'FastAPI', 'MongoDB', 'TypeScript', 'Tailwind CSS', 'AWS S3', 'RAG Pipelines', 'Redux', 'RESTful APIs'].map(skill => (
                      <Chip key={skill} label={skill} sx={{
                        bgcolor: 'rgba(0, 180, 216, 0.2)',
                        color: '#90e0ef',
                        border: '1px solid rgba(0, 180, 216, 0.3)',
                        '&:hover': { bgcolor: 'rgba(0, 180, 216, 0.3)' }
                      }} />
                    ))}
                  </div>

                  <Button
                    component="a"
                    href="/VEDANT_RESUME.pdf"
                    download
                    variant="outlined"
                    sx={{
                      borderColor: 'rgba(0, 180, 216, 0.5)',
                      color: '#00b4d8',
                      mt: 3,
                      '&:hover': {
                        borderColor: '#00b4d8',
                        bgcolor: 'rgba(0, 180, 216, 0.1)',
                      },
                    }}
                    startIcon={<CloudUpload />}
                  >
                    Download Resume
                  </Button>

                </div>
              </div>
            </Container>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-4" style={{ backgroundColor: '#1e293b' }}>
        <Container>
          <Typography variant="h3" className="text-center mb-12 font-bold">
            My <span style={{
              background: 'linear-gradient(135deg, #00b4d8 0%, #90e0ef 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Skills</span>
          </Typography>

          <Box className="max-w-5xl mx-auto space-y-12">
            <div>
              <Typography variant="h5" className="mb-6 font-bold flex items-center" sx={{ color: '#90e0ef' }}>
                <span style={{ width: '50px', height: '3px', background: 'linear-gradient(to right, #00b4d8, transparent)', marginRight: '16px' }}></span>
                Frontend Development
              </Typography>
              <div className="flex flex-wrap gap-3">
                {skills.frontend.map((skill, idx) => (
                  <Fade in key={idx} timeout={(idx + 1) * 100}>
                    <Chip
                      label={skill.name}
                      sx={{
                        bgcolor: 'rgba(30, 41, 59, 0.6)',
                        color: skill.color,
                        border: `2px solid ${skill.color}40`,
                        fontSize: '1rem',
                        padding: '24px 16px',
                        fontWeight: 600,
                        '&:hover': {
                          bgcolor: `${skill.color}20`,
                          borderColor: skill.color,
                          transform: 'translateY(-4px)',
                          boxShadow: `0 8px 16px ${skill.color}30`
                        },
                        transition: 'all 0.3s ease'
                      }}
                    />
                  </Fade>
                ))}
              </div>
            </div>

            <div>
              <Typography variant="h5" className="mb-6 font-bold flex items-center" sx={{ color: '#90e0ef' }}>
                <span style={{ width: '50px', height: '3px', background: 'linear-gradient(to right, #00b4d8, transparent)', marginRight: '16px' }}></span>
                Backend Development
              </Typography>
              <div className="flex flex-wrap gap-3">
                {skills.backend.map((skill, idx) => (
                  <Fade in key={idx} timeout={(idx + 1) * 100}>
                    <Chip label={skill.name} sx={{
                      bgcolor: 'rgba(30, 41, 59, 0.6)',
                      color: skill.color,
                      border: `2px solid ${skill.color}40`,
                      fontSize: '1rem',
                      padding: '24px 16px',
                      fontWeight: 600,
                      '&:hover': {
                        bgcolor: `${skill.color}20`,
                        borderColor: skill.color,
                        transform: 'translateY(-4px)',
                        boxShadow: `0 8px 16px ${skill.color}30`
                      },
                      transition: 'all 0.3s ease'
                    }} />
                  </Fade>
                ))}
              </div>
            </div>

            <div>
              <Typography variant="h5" className="mb-6 font-bold flex items-center" sx={{ color: '#90e0ef' }}>
                <span style={{ width: '50px', height: '3px', background: 'linear-gradient(to right, #00b4d8, transparent)', marginRight: '16px' }}></span>
                AI/ML
              </Typography>
              <div className="flex flex-wrap gap-3">
                {skills.ai.map((skill, idx) => (
                  <Fade in key={idx} timeout={(idx + 1) * 100}>
                    <Chip label={skill.name} sx={{
                      bgcolor: 'rgba(30, 41, 59, 0.6)',
                      color: skill.color,
                      border: `2px solid ${skill.color}40`,
                      fontSize: '1rem',
                      padding: '24px 16px',
                      fontWeight: 600,
                      '&:hover': {
                        bgcolor: `${skill.color}20`,
                        borderColor: skill.color,
                        transform: 'translateY(-4px)',
                        boxShadow: `0 8px 16px ${skill.color}30`
                      },
                      transition: 'all 0.3s ease'
                    }} />
                  </Fade>
                ))}
              </div>
            </div>

            <div>
              <Typography variant="h5" className="mb-6 font-bold flex items-center" sx={{ color: '#90e0ef' }}>
                <span style={{ width: '50px', height: '3px', background: 'linear-gradient(to right, #00b4d8, transparent)', marginRight: '16px' }}></span>
                Tools & Technologies
              </Typography>
              <div className="flex flex-wrap gap-3">
                {skills.tools.map((skill, idx) => (
                  <Fade in key={idx} timeout={(idx + 1) * 100}>
                    <Chip label={skill.name} sx={{
                      bgcolor: 'rgba(30, 41, 59, 0.6)',
                      color: skill.color,
                      border: `2px solid ${skill.color}40`,
                      fontSize: '1rem',
                      padding: '24px 16px',
                      fontWeight: 600,
                      '&:hover': {
                        bgcolor: `${skill.color}20`,
                        borderColor: skill.color,
                        transform: 'translateY(-4px)',
                        boxShadow: `0 8px 16px ${skill.color}30`
                      },
                      transition: 'all 0.3s ease'
                    }} />
                  </Fade>
                ))}
              </div>
            </div>
          </Box>
        </Container>
      </section>

      <section id="projects" className="py-10 px-2" style={{ backgroundColor: '#0f172a' }}>
        <Container>
          <Typography variant="h3" className="text-center mb-8 font-bold">
            <span style={{
              background: 'linear-gradient(135deg, #00b4d8 0%, #90e0ef 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Projects</span>
          </Typography>

          <div className="flex justify-center gap-2 mb-6 flex-wrap">
            {categories.map((cat) => (
              <Chip
                key={cat}
                label={cat}
                onClick={() => setProjectFilter(cat)}
                sx={{
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  bgcolor: projectFilter === cat ? '#0077b6' : 'rgba(0, 180, 216, 0.2)',
                  color: 'white',
                  border: '1px solid',
                  borderColor: projectFilter === cat ? '#0077b6' : 'rgba(0, 180, 216, 0.3)',
                  transform: projectFilter === cat ? 'scale(1.1)' : 'scale(1)',
                  '&:hover': { bgcolor: 'rgba(0, 180, 216, 0.4)' }
                }}
              />
            ))}
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {filteredProjects.map((project, idx) => (
              <Fade in key={idx} timeout={(idx + 1) * 200}>
                <div style={{
                  padding: '32px',
                  borderLeft: '4px solid #0077b6',
                  background: 'rgba(30, 41, 59, 0.3)',
                  transition: 'all 0.3s',
                }}>
                  <div className="flex items-center gap-3 mb-3">
                    <Typography variant="h5" className="font-bold" sx={{ color: 'white' }}>
                      {project.name}
                    </Typography>
                    <Chip
                      label={project.category}
                      size="small"
                      sx={{
                        bgcolor: '#0077b6',
                        color: 'white',
                        fontWeight: 600
                      }}
                    />
                  </div>

                  <Typography variant="body1" sx={{ color: '#e0f2fe', lineHeight: 1.8, mb: 3 }}>
                    {project.description}
                  </Typography>

                  <div>
                    <Typography variant="subtitle2" sx={{ color: '#90e0ef', mb: 2, fontWeight: 600 }}>
                      Technologies:
                    </Typography>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Chip
                          key={i}
                          label={tech}
                          size="small"
                          sx={{
                            bgcolor: 'rgba(0, 180, 216, 0.2)',
                            color: '#90e0ef',
                            border: '1px solid rgba(0, 180, 216, 0.4)',
                            fontWeight: 500,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </Container>
      </section>

      <section id="experience" className="py-20 px-4" style={{ backgroundColor: '#1e293b' }}>
        <Container>
          <Typography variant="h3" className="text-center mb-12 font-bold">
            Work <span style={{
              background: 'linear-gradient(135deg, #00b4d8 0%, #90e0ef 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Experience</span>
          </Typography>

          <Timeline position="alternate" sx={{ p: 0 }}>
            {experiences.map((exp, idx) => (
              <TimelineItem key={idx}>
                <TimelineSeparator>
                  <TimelineDot sx={{ bgcolor: '#0077b6' }}>
                    {exp.icon}
                  </TimelineDot>
                  <TimelineConnector sx={{ bgcolor: 'rgba(0, 180, 216, 0.3)' }} />
                </TimelineSeparator>
                <TimelineContent>
                  <Fade in timeout={(idx + 1) * 300}>
                    <Card sx={{
                      bgcolor: 'rgba(30, 41, 59, 0.6)',
                      border: '1px solid rgba(0, 180, 216, 0.2)',
                      p: 3,
                      mb: 3
                    }}>
                      <CardContent>
                        <Typography variant="h6" className="font-bold" sx={{ color: 'white' }}>
                          {exp.title}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: '#90e0ef', mb: 1 }}>
                          {exp.company} | {exp.period}
                        </Typography>
                        <Stack spacing={1}>
                          {exp.description.map((point, i) => (
                            <Typography key={i} variant="body2" sx={{ color: '#e0f2fe' }}>
                              • {point}
                            </Typography>
                          ))}
                        </Stack>
                      </CardContent>
                    </Card>
                  </Fade>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Container>
      </section>

      <section id="contact" className="py-20 px-4" style={{ backgroundColor: '#0f172a' }}>
        <Container>
          <Typography variant="h3" align="center" fontWeight={700} mb={6}>
            Get In{' '}
            <span style={{
              background: 'linear-gradient(135deg, #00b4d8, #90e0ef)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Touch
            </span>
          </Typography>

          <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} justifyContent="center" mt={6}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Email sx={{ color: '#90e0ef' }} />
              <Typography color="#e0f2fe">mundelvedant152@gmail.com</Typography>
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center">
              <Phone sx={{ color: '#90e0ef' }} />
              <Typography color="#e0f2fe">+91-8379962123</Typography>
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center">
              <LocationOn sx={{ color: '#90e0ef' }} />
              <Typography color="#e0f2fe">Pune, India</Typography>
            </Stack>
          </Stack>
        </Container>
      </section>

      <Fab
        aria-label="scroll to top"
        sx={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          bgcolor: '#0077b6',
          color: 'white',
          '&:hover': { bgcolor: '#005f9e' },
          display: showScrollTop ? 'flex' : 'none',
          zIndex: 1000
        }}
        onClick={scrollToTop}
      >
        <ArrowUpward />
      </Fab>
    </div>
  );
};

export default Portfolio;