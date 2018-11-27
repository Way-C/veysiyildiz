const data = { 
  colors: [
    '#8c5fc4',
    '#61b8ff',
    '#f7d286',
    '#e86971',
    '#76bb7f',
    '#5bbeca',
  ],
  skills: [
    {
    name: 'React',
    experience: 4,
    knowledge: 8,
    },
    {
    name: 'jQuery',
    experience: 9,
    knowledge: 9,
    },
    {
    name: 'ECMAScript 6',
    experience: 4,
    knowledge: 7,
    },
    {
    name: 'webpack',
    experience: 4,
    knowledge: 4,
    },
    {
    name: 'Redux',
    experience: 4,
    knowledge: 7,
    },
    {
    name: 'HTML5',
    experience: 9,
    knowledge: 9,
    },
    {
    name: 'JSON APIs',
    experience: 9,
    knowledge: 6,
    },
    {
    name: 'JavaScript',
    experience: 9,
    knowledge: 8,
    },
    {
    name: 'CSS3',
    experience: 9,
    knowledge: 9,
    },
    {
    name: 'PHP',
    experience: 8,
    knowledge: 3,
    },
    {
    name: 'MySQL',
    experience: 8,
    knowledge: 4,
    },
    {
    name: 'WordPress',
    experience: 9,
    knowledge: 8,
    },
    {
    name: 'Github',
    experience: 6,
    knowledge: 5,
    },
    {
    name: 'SASS',
    experience: 6,
    knowledge: 6,
    },
    {
    name: 'Node.js',
    experience: 4,
    knowledge: 4,
    },
    {
    name: 'JSX',
    experience: 4,
    knowledge: 5,
    },
    {
    name: 'Redux Saga',
    experience: 4,
    knowledge: 6,
    },
    {
    name: 'Immutable',
    experience: 4,
    knowledge: 5,
    },
    {
    name: 'CSS Javascript',
    experience: 4,
    knowledge: 6,
    },
    {
    name: 'GraphQL',
    experience: 1,
    knowledge: 4,
    },
  ],
}

export default data;

export function getRandomColor() {
  return data.colors[Math.floor((Math.random()*data.colors.length))];
} 