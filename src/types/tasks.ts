export type Task = {
  id: string;
  title: string;
  description: string;
  done: boolean;
  image: {
    src: string;
    alt: string;
  };
};
