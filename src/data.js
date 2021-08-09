import photo from './assets/photo.jpg'

const profile = {
  photo,
  email: 'renjithrajeevvk@gmail.com',
  phone: '+91 9895141512',
  address: {
    city: 'Kunnamangalam',
    district: 'Calicut',
    state: 'Kerala',
    country: 'India',
    zip: 673571
  },
  links: [
    {
      name: 'LinkedIn',
      text: 'renjithspace',
      url: 'https://www.linkedin.com/in/renjithspace'
    },
    {
      name: 'GitHub',
      text: 'renjithspace',
      url: 'https://github.com/renjithspace'
    },
    {
      name: 'Codewars',
      text: 'renjithspace',
      url: 'https://www.codewars.com/users/renjithspace'
    },
    {
      name: 'YouTube',
      text: 'renjithspace',
      url: 'https://www.youtube.com/channel/UC3Gi93tKlI80WYVauMatlzQ'
    },
    {
      name: 'Resume',
      text: 'resume.pdf',
      url: 'https://docs.google.com/document/d/1MlPULI8JPQ-0XXgNEkBFJn6mcHMF3AEHv3ITp32N2cg/export?format=pdf'
    }
  ]
}

const greeting = {
  greet: 'Hello!',
  introduction: 'I\'m Renjith',
  about: 'I\'m a ***Software Developer*** from ***Calicut, India***',
  profession: 'I\'ve been working in ***Web technologies*** since ***August 2014***'
}

const languages = [
  'C++',
  'Java',
  'Python',
  'PHP',
  'JavaScript', 'TypeScript',
  'SQL',
  'Bash',
  'HTML',
  'CSS'
]

const projects = [
  {
    name: 'Khles',
    brief: 'Freelance marketplace web app for students to get help from teachers to prepare assignments and thesis',
    tools: [
      'PHP',
      'MySQL',
      'Crone',
      'Laravel',
      'Bootstrap',
      'jQuery',
      'Blade',
      'PayPal',
      'Mailgun',
      'Apache',
      'VPS'
    ]
  },
  {
    name: 'BuzzE',
    brief: 'IPTV and video-on-demand platform',
    tools: [
      'PHP',
      'MySQL',
      'Laravel',
      'Vue',
      'Bootstrap',
      'WebSocket',
      'Apache',
      'VPS'
    ]
  },
  {
    name: 'Awani',
    brief: 'Online food delivery app for mobile and web platforms with a web administration panel',
    tools: [
      'Firebase',
      'Nginx',
      'WebSocket',
      'Vue',
      'Ionic',
      'Bootstrap',
      'Webpack',
      'Sass',
      'Google map',
      'VPS'
    ]
  },
  {
    name: 'ChatDaddy',
    brief: 'WhatsApp based sales-oriented chat automation',
    tools: [
      'JavaScript',
      'TypeScript',
      'Node.js',
      'Express',
      'WebSocket',
      'MongoDB',
      'Redis',
      'Docker',
      'Nginx',
      'Supervisor',
      'Selenium',
      'Vue',
      'Bootstrap',
      'Sass',
      'Pug',
      'Sketch',
      'GCP'
    ]
  },
  {
    name: 'Winoutt',
    brief: 'Business networking platform with desktop administration panel',
    tools: [
      'PHP',
      'MySQL',
      'Laravel',
      'Docker',
      'Nginx',
      'WebSocket',
      'React',
      'Bootstrap',
      'Electron',
      'Figma',
      'AWS'
    ]
  },
  {
    name: 'Teammeet',
    brief: 'Cross-platform video conferencing app for web, mobile and desktops',
    tools: [
      'TypeScript',
      'Node.js',
      'SQLite',
      'WebRTC',
      'WebSocket',
      'Nginx',
      'Docker',
      'Ionic',
      'Electron',
      'Figma',
      'AWS'
    ]
  },
  {
    name: 'QCIM',
    brief: 'Multi-tenant inventory management platform with administration panel',
    tools: [
      'PHP',
      'TypeScript',
      'JavaScript',
      'Node.js',
      'SQL server',
      'Nginx',
      'Laravel',
      'React',
      'Tailwind',
      'Figma',
      'AWS'
    ]
  }
]

const courses = [
  {
    name: 'Docker Course',
    instructor: 'codewithmosh.com',
    certificate: '#'
  },
  {
    name: 'Design Patterns',
    instructor: 'codewithmosh.com',
    certificate: '#'
  },
  {
    name: 'Clean Coding and Refactoring',
    instructor: 'codewithmosh.com',
    certificate: '#'
  },
  {
    name: 'Complete Node.js Course',
    instructor: 'codewithmosh.com',
    certificate: '#'
  },
  {
    name: 'Redux Course',
    instructor: 'codewithmosh.com',
    certificate: '#'
  },
  {
    name: 'Mastering React',
    instructor: 'codewithmosh.com',
    certificate: '#'
  },
  {
    name: 'JavaScript Mastery Series',
    instructor: 'codewithmosh.com',
    certificate: '#'
  },
  {
    name: 'HTML/CSS Mastery Series',
    instructor: 'codewithmosh.com',
    certificate: '#'
  },
  {
    name: 'Data Structures & Algorithms',
    instructor: 'codewithmosh.com',
    certificate: '#'
  },
  {
    name: 'SQL Mastery',
    instructor: 'codewithmosh.com',
    certificate: '#'
  },
  {
    name: 'Git Mastery Course',
    instructor: 'codewithmosh.com',
    certificate: '#'
  }
]

const books = [
  {
    title: 'The Pragmatic Programmer',
    authors: ['David Thomas', 'Andrew Hunt'],
    subtitle: 'Your journey to mastery',
    preview: 'https://www.google.co.in/books/edition/The_Pragmatic_Programmer/LhOlDwAAQBAJ'
  },
  {
    title: 'Clean Code',
    authors: ['Robert C. Martin'],
    subtitle: 'A handbook of agile software craftsmanship',
    preview: 'https://www.google.co.in/books/edition/Clean_Code/_i6bDeoCQzsC'
  },
  {
    title: 'Code Complete',
    authors: ['Steve McConnell'],
    subtitle: 'A pratical handbook of software construction',
    preview: 'https://www.google.co.in/books/edition/Code_Complete/LpVCAwAAQBAJ'
  },
  {
    title: 'Atomic Habits',
    authors: ['James Clear'],
    subtitle: 'An easy and proven way to build good habits and break bad ones',
    preview: 'https://www.google.co.in/books/edition/Atomic_Habits/fFCjDQAAQBAJ'
  }
]

const footer = {
  details: 'This portfolio is designed on ***Figma***, built on ***React*** and served on ***GitHub pages***',
  code: 'Find [source code on GitHub](https://github.com/renjithspace/renjithspace.github.io)'
}

export {
  profile,
  greeting,
  languages,
  projects,
  courses,
  books,
  footer
}
