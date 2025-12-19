import React, { useState, useEffect } from 'react';
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
  GitHub,
  LinkedIn,
  Twitter,
  Email,
  Phone,
  LocationOn,
  Code,
  Palette,
  Speed,
  Security,
  CloudUpload,
  ArrowUpward,
  Work,
} from '@mui/icons-material';

// Typing animation hook
const useTypingEffect = (text: string, speed: number = 100) => {
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

// Flip card component
const FlipCard = ({ front, back }: { front: React.ReactNode; back: React.ReactNode }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative w-full h-96 cursor-pointer"
      style={{ perspective: '1000px' }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className="relative w-full h-full transition-transform duration-700"
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        <div
          className="absolute w-full h-full"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {front}
        </div>
        <div
          className="absolute w-full h-full"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          {back}
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [projectFilter, setProjectFilter] = useState('All');

  const typedText = useTypingEffect('Full Stack Developer & AI Enthusiast', 100);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const skills = {
    frontend: [
      { name: 'React.js', level: 90, color: '#61DAFB' },
      { name: 'TypeScript', level: 85, color: '#3178C6' },
      { name: 'Tailwind CSS', level: 90, color: '#06B6D4' },
      { name: 'Redux', level: 80, color: '#764ABC' },
    ],
    backend: [
      { name: 'Python', level: 90, color: '#3776AB' },
      { name: 'FastAPI', level: 85, color: '#009688' },
      { name: 'MongoDB', level: 80, color: '#47A248' },
      { name: 'RESTful APIs', level: 85, color: '#563D7C' },
    ],
    tools: [
      { name: 'Git', level: 90, color: '#F05032' },
      { name: 'AWS S3', level: 75, color: '#FF9900' },
      { name: 'QdrantDB', level: 70, color: '#4ECDC4' },
      { name: 'Tableau', level: 75, color: '#E97658' },
    ],
    ai: [
      { name: 'OpenAI GPT-3', level: 80, color: '#74AA9C' },
      { name: 'RAG Pipelines', level: 85, color: '#8FBCBB' },
      { name: 'Vector Embeddings', level: 80, color: '#88C0D0' },
      { name: 'Google Vision API', level: 75, color: '#5E81AC' },
    ]
  };

  const projects = [
    {
      name: 'AI-Powered LMS',
      description: 'Developed an AI-powered Learning Management System for 400+ users with role-based access control (Admin/Trainer/Learner), supporting employee training, onboarding, and analytics dashboards.',
      technologies: ['React.js', 'Python', 'FastAPI', 'MongoDB', 'JWT', 'AWS S3'],
      category: 'AI/ML'
    },
    {
      name: 'E-Commerce Platform',
      description: 'Built a full-stack e-commerce application with product management, authentication, and order processing. Implemented image-based product recommendations using Google Vision API and cosine similarity.',
      technologies: ['Flask', 'React.js','Google Vision API'],
      category: 'Web'
    },
    {
      name: 'Warehouse Management POC',
      description: 'Designed a warehouse management proof-of-concept supporting CSV/text/image uploads, improving inventory operations by 50%.',
      technologies: ['Python', 'FastAPI', 'Google Vision API'],
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

  const services = [
    {
      icon: <Code className="text-5xl" />,
      title: 'Full Stack Development',
      description: 'Building scalable web applications with React.js, FastAPI, and MongoDB, focusing on performance optimization and clean code architecture.'
    },
    {
      icon: <Palette className="text-5xl" />,
      title: 'AI/ML Solutions',
      description: 'Developing AI-powered solutions using OpenAI GPT-3, RAG pipelines, and vector embeddings to enhance information retrieval and automation.'
    },
    {
      icon: <Speed className="text-5xl" />,
      title: 'Performance Optimization',
      description: 'Optimizing application performance by reducing API calls, implementing caching, and improving load times.'
    },
    {
      icon: <Security className="text-5xl" />,
      title: 'Security Implementation',
      description: 'Implementing robust security measures like JWT authentication and role-based access control to protect applications and user data.'
    }
  ];

  const categories = ['All', 'Web', 'AI/ML', 'Data'];
  const filteredProjects = projectFilter === 'All'
    ? projects
    : projects.filter(p => p.category === projectFilter);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navigation */}
      <AppBar position="fixed" sx={{ backgroundColor: 'rgba(15, 23, 42, 0.95)', backdropFilter: 'blur(10px)' }}>
        <Toolbar>
          <Typography variant="h6" className="flex-grow font-bold" sx={{
            background: 'linear-gradient(135deg, #00b4d8 0%, #90e0ef 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Vedant Mundel
          </Typography>
          <Button sx={{ color: 'white' }} href="#about">About</Button>
          <Button sx={{ color: 'white' }} href="#skills">Skills</Button>
          <Button sx={{ color: 'white' }} href="#projects">Projects</Button>
          <Button sx={{ color: 'white' }} href="#experience">Experience</Button>
          <Button sx={{ color: 'white' }} href="#contact">Contact</Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}>
        <Container className="text-center z-10">
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
            <Typography
              variant="body1"
              align="center"
              sx={{
                color: '#e0f2fe',
                fontSize: '1.1rem',
                lineHeight: 1.6,
                maxWidth: '640px',
                mx: 'auto',
              }}
            >
              Full Stack Developer with 1.5+ years of experience building scalable web applications and AI-powered solutions. Expertise in React.js, Python (FastAPI), MongoDB, and RESTful APIs. Proven track record delivering production applications serving 400+ users.
            </Typography>
          </Fade>

          <div className="flex gap-4 justify-center mb-8">
            {[
              { icon: <GitHub />, tooltip: "GitHub", delay: 2200, link: "https://github.com/yourgithub" },
              { icon: <LinkedIn />, tooltip: "LinkedIn", delay: 2400, link: "https://www.linkedin.com/in/vedant-mundel" },
              { icon: <Twitter />, tooltip: "Twitter", delay: 2600, link: "https://twitter.com/yourhandle" },
            ].map((item, index) => (
              <Zoom in key={index} timeout={item.delay}>
                <Tooltip title={item.tooltip}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <IconButton sx={{
                      bgcolor: 'rgba(0, 180, 216, 0.2)',
                      color: '#00b4d8',
                      border: '1px solid rgba(0, 180, 216, 0.3)',
                      '&:hover': { bgcolor: 'rgba(0, 180, 216, 0.3)', borderColor: '#00b4d8' },
                      width: 50,
                      height: 50,
                    }}>
                      {item.icon}
                    </IconButton>
                  </a>
                </Tooltip>
              </Zoom>
            ))}
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
        </Container>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4" style={{ backgroundColor: '#0f172a' }}>
        <Container>
          <Typography variant="h3" className="text-center mb-12 font-bold">
            About <span style={{
              background: 'linear-gradient(135deg, #00b4d8 0%, #90e0ef 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Me</span>
          </Typography>
          <div className="max-w-4xl mx-auto">
            <FlipCard
              front={
                <Card sx={{
                  height: '100%',
                  background: 'rgba(30, 41, 59, 0.8)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(0, 180, 216, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s',
                  '&:hover': { borderColor: 'rgba(0, 180, 216, 0.5)' }
                }}>
                  <CardContent className="text-center">
                    <Avatar className="mx-auto mb-6" sx={{
                      width: 160,
                      height: 160,
                      fontSize: '3rem',
                      background: 'linear-gradient(135deg, #0077b6, #00b4d8)',
                      border: '3px solid rgba(0, 180, 216, 0.5)'
                    }}>
                      VM
                    </Avatar>
                    <Typography variant="h4" className="font-bold mb-2" sx={{ color: 'white' }}>
                      Vedant Mundel
                    </Typography>
                    <Typography variant="h6" className="mb-4" sx={{ color: '#90e0ef' }}>
                      Full Stack Developer & AI Engineer
                    </Typography>
                    <Chip label="Available for Hire" sx={{
                      bgcolor: 'rgba(34, 197, 94, 0.2)',
                      color: '#4ade80',
                      border: '1px solid rgba(34, 197, 94, 0.3)'
                    }} />
                  </CardContent>
                </Card>
              }
              back={
                <Card sx={{
                  height: '100%',
                  background: 'rgba(30, 41, 59, 0.8)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(0, 180, 216, 0.2)',
                  overflow: 'auto'
                }}>
                  <CardContent>
                    <Typography variant="h5" className="font-bold mb-4 text-center" sx={{ color: 'white' }}>
                      My Story
                    </Typography>
                    <Typography variant="body1" className="mb-4" sx={{ color: '#e0f2fe' }}>
                      I'm a passionate Full Stack Developer and AI Engineer with 1.5+ years of experience building scalable web applications and AI-powered solutions. I specialize in React.js, FastAPI, and MongoDB, and I love creating intuitive user experiences and optimizing application performance.
                    </Typography>
                    <Typography variant="body1" className="mb-4" sx={{ color: '#e0f2fe' }}>
                      When I'm not coding, you'll find me solving problems on LeetCode, or exploring the latest advancements in AI and web technologies.
                    </Typography>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {['React.js', 'Python', 'Tailwind CSS', 'MongoDB', 'AWS S3', 'RAG Pipelines'].map(skill => (
                        <Chip key={skill} label={skill} sx={{
                          bgcolor: 'rgba(0, 180, 216, 0.2)',
                          color: '#90e0ef',
                          border: '1px solid rgba(0, 180, 216, 0.3)'
                        }} />
                      ))}
                    </div>
                    <Button
                      variant="outlined"
                      fullWidth
                      className="mt-6"
                      sx={{
                        borderColor: 'rgba(0, 180, 216, 0.5)',
                        color: '#00b4d8',
                        '&:hover': {
                          borderColor: '#00b4d8',
                          bgcolor: 'rgba(0, 180, 216, 0.1)'
                        }
                      }}
                      startIcon={<CloudUpload />}
                    >
                      <a href="/VEDANT_RESUME.pdf" download style={{ textDecoration: 'none', color: 'inherit' }}>
                        Download Resume
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              }
            />
          </div>
        </Container>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4" style={{ backgroundColor: '#1e293b' }}>
        <Container>
          <Typography variant="h3" className="text-center mb-12 font-bold">
            My <span style={{
              background: 'linear-gradient(135deg, #00b4d8 0%, #90e0ef 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Skills</span>
          </Typography>

          <Box className="max-w-6xl mx-auto">
            {/* Frontend Skills */}
            <Box className="mb-12">
              <Typography variant="h5" className="mb-6 font-bold" sx={{ color: '#90e0ef' }}>
                Frontend Development
              </Typography>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skills.frontend.map((skill, idx) => (
                  <Fade in key={idx} timeout={(idx + 1) * 200}>
                    <Card sx={{
                      bgcolor: 'rgba(30, 41, 59, 0.6)',
                      border: '1px solid rgba(0, 180, 216, 0.2)',
                      transition: 'all 0.3s',
                      '&:hover': {
                        borderColor: skill.color,
                        transform: 'translateY(-8px)',
                        boxShadow: `0 10px 30px ${skill.color}40`
                      }
                    }}>
                      <CardContent className="text-center">
                        <Box sx={{
                          width: 60,
                          height: 60,
                          borderRadius: '12px',
                          bgcolor: `${skill.color}20`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: '0 auto 16px',
                          fontSize: '2rem',
                          fontWeight: 'bold',
                          color: skill.color
                        }}>
                          {skill.name.charAt(0)}
                        </Box>
                        <Typography variant="h6" sx={{ color: 'white', mb: 1 }}>
                          {skill.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: skill.color, fontWeight: 'bold' }}>
                          {skill.level}% Proficiency
                        </Typography>
                      </CardContent>
                    </Card>
                  </Fade>
                ))}
              </div>
            </Box>

            {/* Backend Skills */}
            <Box className="mb-12">
              <Typography variant="h5" className="mb-6 font-bold" sx={{ color: '#90e0ef' }}>
                Backend Development
              </Typography>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skills.backend.map((skill, idx) => (
                  <Fade in key={idx} timeout={(idx + 1) * 200}>
                    <Card sx={{
                      bgcolor: 'rgba(30, 41, 59, 0.6)',
                      border: '1px solid rgba(0, 180, 216, 0.2)',
                      transition: 'all 0.3s',
                      '&:hover': {
                        borderColor: skill.color,
                        transform: 'translateY(-8px)',
                        boxShadow: `0 10px 30px ${skill.color}40`
                      }
                    }}>
                      <CardContent className="text-center">
                        <Box sx={{
                          width: 60,
                          height: 60,
                          borderRadius: '12px',
                          bgcolor: `${skill.color}20`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: '0 auto 16px',
                          fontSize: '2rem',
                          fontWeight: 'bold',
                          color: skill.color
                        }}>
                          {skill.name.charAt(0)}
                        </Box>
                        <Typography variant="h6" sx={{ color: 'white', mb: 1 }}>
                          {skill.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: skill.color, fontWeight: 'bold' }}>
                          {skill.level}% Proficiency
                        </Typography>
                      </CardContent>
                    </Card>
                  </Fade>
                ))}
              </div>
            </Box>

            {/* AI/ML Skills */}
            <Box className="mb-12">
              <Typography variant="h5" className="mb-6 font-bold" sx={{ color: '#90e0ef' }}>
                AI/ML
              </Typography>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skills.ai.map((skill, idx) => (
                  <Fade in key={idx} timeout={(idx + 1) * 200}>
                    <Card sx={{
                      bgcolor: 'rgba(30, 41, 59, 0.6)',
                      border: '1px solid rgba(0, 180, 216, 0.2)',
                      transition: 'all 0.3s',
                      '&:hover': {
                        borderColor: skill.color,
                        transform: 'translateY(-8px)',
                        boxShadow: `0 10px 30px ${skill.color}40`
                      }
                    }}>
                      <CardContent className="text-center">
                        <Box sx={{
                          width: 60,
                          height: 60,
                          borderRadius: '12px',
                          bgcolor: `${skill.color}20`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: '0 auto 16px',
                          fontSize: '2rem',
                          fontWeight: 'bold',
                          color: skill.color
                        }}>
                          {skill.name.charAt(0)}
                        </Box>
                        <Typography variant="h6" sx={{ color: 'white', mb: 1 }}>
                          {skill.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: skill.color, fontWeight: 'bold' }}>
                          {skill.level}% Proficiency
                        </Typography>
                      </CardContent>
                    </Card>
                  </Fade>
                ))}
              </div>
            </Box>

            {/* Tools & Technologies */}
            <Box>
              <Typography variant="h5" className="mb-6 font-bold" sx={{ color: '#90e0ef' }}>
                Tools & Technologies
              </Typography>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skills.tools.map((skill, idx) => (
                  <Fade in key={idx} timeout={(idx + 1) * 200}>
                    <Card sx={{
                      bgcolor: 'rgba(30, 41, 59, 0.6)',
                      border: '1px solid rgba(0, 180, 216, 0.2)',
                      transition: 'all 0.3s',
                      '&:hover': {
                        borderColor: skill.color,
                        transform: 'translateY(-8px)',
                        boxShadow: `0 10px 30px ${skill.color}40`
                      }
                    }}>
                      <CardContent className="text-center">
                        <Box sx={{
                          width: 60,
                          height: 60,
                          borderRadius: '12px',
                          bgcolor: `${skill.color}20`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: '0 auto 16px',
                          fontSize: '2rem',
                          fontWeight: 'bold',
                          color: skill.color
                        }}>
                          {skill.name.charAt(0)}
                        </Box>
                        <Typography variant="h6" sx={{ color: 'white', mb: 1 }}>
                          {skill.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: skill.color, fontWeight: 'bold' }}>
                          {skill.level}% Proficiency
                        </Typography>
                      </CardContent>
                    </Card>
                  </Fade>
                ))}
              </div>
            </Box>
          </Box>
        </Container>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4" style={{ backgroundColor: '#0f172a' }}>
        <Container>
          <Typography variant="h3" className="text-center mb-8 font-bold">
            Featured <span style={{
              background: 'linear-gradient(135deg, #00b4d8 0%, #90e0ef 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Projects</span>
          </Typography>
          <div className="flex justify-center gap-2 mb-12 flex-wrap">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <Fade in key={idx} timeout={(idx + 1) * 200}>
                <div>
                  <FlipCard
                    front={
                      <Card sx={{
                        height: '100%',
                        background: 'rgba(30, 41, 59, 0.6)',
                        border: '1px solid rgba(0, 180, 216, 0.2)',
                        transition: 'all 0.3s',
                        '&:hover': { borderColor: 'rgba(0, 180, 216, 0.6)' }
                      }}>
                        <CardContent className="h-full flex flex-col justify-between">
                          <div>
                            <Typography variant="h5" className="font-bold mb-3" sx={{ color: 'white' }}>
                              {project.name}
                            </Typography>
                            <Chip label={project.category} size="small" sx={{ bgcolor: '#0077b6', color: 'white', mb: 2 }} />
                            <Typography variant="body2" className="mb-4" sx={{ color: '#e0f2fe' }}>
                              {project.description.substring(0, 100)}...
                            </Typography>
                          </div>
                          <Typography variant="caption" className="text-center" sx={{ color: '#90e0ef' }}>
                            Hover to see technologies
                          </Typography>
                        </CardContent>
                      </Card>
                    }
                    back={
                      <Card sx={{
                        height: '100%',
                        background: 'rgba(30, 41, 59, 0.6)',
                        border: '1px solid rgba(0, 180, 216, 0.2)'
                      }}>
                        <CardContent className="h-full flex flex-col">
                          <Typography variant="h6" className="font-bold mb-3" sx={{ color: 'white' }}>
                            {project.name}
                          </Typography>
                          <Typography variant="body2" className="mb-4 flex-grow" sx={{ color: '#e0f2fe' }}>
                            {project.description}
                          </Typography>
                          <div>
                            <Typography variant="caption" className="mb-2 block" sx={{ color: '#90e0ef' }}>
                              Technologies:
                            </Typography>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, i) => (
                                <Chip
                                  key={i}
                                  label={tech}
                                  size="small"
                                  sx={{
                                    bgcolor: 'rgba(0, 180, 216, 0.3)',
                                    color: '#90e0ef',
                                    border: '1px solid rgba(0, 180, 216, 0.5)'
                                  }}
                                />
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    }
                  />
                </div>
              </Fade>
            ))}
          </div>
        </Container>
      </section>

      {/* Experience Timeline */}
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

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4" style={{ backgroundColor: '#0f172a' }}>
        <Container>
          <Typography
            variant="h3"
            align="center"
            fontWeight={700}
            mb={6}
          >
            Get In{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #00b4d8, #90e0ef)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Touch
            </span>
          </Typography>

     
          {/* Contact Info */}
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={4}
            justifyContent="center"
            mt={6}
          >
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

      {/* Scroll to Top Button */}
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
