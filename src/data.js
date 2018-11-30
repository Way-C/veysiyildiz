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
    label: 'React',
    fontSize: 6,
    opacity: 8,
    },
    {
    label: 'jQuery',
    fontSize: 9,
    opacity: 9,
    },
    {
    label: 'ES6',
    fontSize: 4,
    opacity: 7,
    },
    {
    label: 'webpack',
    fontSize: 4,
    opacity: 4,
    },
    {
    label: 'Redux',
    fontSize: 4,
    opacity: 7,
    },
    {
    label: 'HTML5',
    fontSize: 9,
    opacity: 9,
    },
    {
    label: 'JSON APIs',
    fontSize: 9,
    opacity: 6,
    },
    {
    label: 'JavaScript',
    fontSize: 9,
    opacity: 8,
    },
    {
    label: 'CSS3',
    fontSize: 9,
    opacity: 9,
    },
    {
    label: 'PHP',
    fontSize: 8,
    opacity: 3,
    },
    {
    label: 'MySQL',
    fontSize: 8,
    opacity: 4,
    },
    {
    label: 'WordPress',
    fontSize: 9,
    opacity: 8,
    },
    {
    label: 'Git',
    fontSize: 8,
    opacity: 8,
    },
    {
    label: 'GitHub',
    fontSize: 8,
    opacity: 8,
    },
    {
    label: 'HTML DOM',
    fontSize: 8,
    opacity: 8,
    },
    {
    label: 'SASS',
    fontSize: 6,
    opacity: 6,
    },
    {
    label: 'Node.js',
    fontSize: 4,
    opacity: 4,
    },
    {
    label: 'JSX',
    fontSize: 4,
    opacity: 5,
    },
    {
    label: 'Redux Saga',
    fontSize: 4,
    opacity: 6,
    },
    {
    label: 'Immutable',
    fontSize: 4,
    opacity: 5,
    },
    {
    label: 'CSS JavaScript',
    fontSize: 4,
    opacity: 6,
    },
    {
    label: 'Bootstrap',
    fontSize: 6,
    opacity: 8,
    },
    {
    label: 'Material.UI',
    fontSize: 6,
    opacity: 8,
    },
    {
    label: 'GraphQL',
    fontSize: 1,
    opacity: 4,
    },
    {
    label: 'Babel',
    fontSize: 4,
    opacity: 6,
    },
    {
    label: 'Jest',
    fontSize: 4,
    opacity: 6,
    },
    {
    label: 'Enzyme',
    fontSize: 4,
    opacity: 6,
    },
    {
    label: 'Chai',
    fontSize: 4,
    opacity: 6,
    },
  ],
}

export default data;

export function getRandomColor() {
  return data.colors[Math.floor((Math.random()*data.colors.length))];
} 