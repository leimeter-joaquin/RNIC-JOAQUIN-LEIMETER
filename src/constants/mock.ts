import {Task} from '../types/tasks';

const tasks: Task[] = [
  {
    id: '1',
    title: 'First task',
    description:
      "This is the first task Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    done: false,
    image: {
      src: 'https://picsum.photos/200',
      alt: 'something',
    },
  },
  {
    id: '2',
    title: 'Second task',
    description: 'This is the second task',
    done: true,
    image: {
      src: '',
      alt: '',
    },
  },
  {
    id: '3',
    title: 'Third task',
    description: 'This is the third task',
    done: false,
    image: {
      src: '',
      alt: '',
    },
  },
  {
    id: '4',
    title: 'fourth task',
    description: 'This is the third task',
    done: true,
    image: {
      src: '',
      alt: '',
    },
  },
  {
    id: '5',
    title: 'fifth task',
    description: 'This is the third task',
    done: true,
    image: {
      src: '',
      alt: '',
    },
  },
];

export default tasks;
