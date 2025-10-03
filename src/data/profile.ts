export const profile = {
  name: 'Масалкин Никита Сергеевич',
  title: 'Программист Java Junior',
  location: 'Воронеж, Россия',
  email: 'nmasalkin96@yandex.ru',
  phone: '+7 (900) 929-79-62',
  telegram: 'https://t.me/nmasalkin',
  github: 'https://github.com/nmasalkin',
  roles: ['Программист, разработчик'],
  modes: ['частичная занятость', 'стажировка'],
  schedules: ['полный день', 'гибкий график', 'удаленная работа'],
  education: [
    {
      institution: 'Воронежский государственный университет',
      city: 'Воронеж',
      faculty: 'Факультет компьютерных наук',
      program: 'Программная инженерия',
      gradYear: 2026,
      status: 'Неоконченное высшее',
    }
  ],
  skills: [
    'Java','Spring Framework','Spring Boot','Spring MVC','Spring Data',
    'JPA', 'Hibernate','JDBC','Java Servlets','PostgreSQL','REST','Git',
    'GitHub', 'Apache Maven','Docker','RabbitMQ','Apache Tomcat','Lombok',
    'JUnit', 'JSON','Flutter','Dart'
  ],
  languages: ['Русский — родной', 'Английский язык - технический'],
  about:
    'Java Junior разработчик, работающий со Spring, PostgreSQL, Docker и Git. Первые практические навыки получил на стажировке в Digital Spirit, где занимался учебными задачами по серверной разработке. Опыт командной работы приобрёл в университете при создании проекта PocketHealth: принимал участие в разработке архитектуры и реализации серверной части. Нацелен на профессиональный рост и дальнейшее профессиональное развитие в сфере IT.',
  experience: [
    {
      company: 'Digital Spirit',
      role: 'Стажировка',
      period: 'Весна 2024',
      description: 'Изучение Java/Backend‑стека, выполнение учебных задач.'
    }
  ]
} as const