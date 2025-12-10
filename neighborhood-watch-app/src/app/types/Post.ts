export type Post = {
  id: string;
  text: string;
  timestamp: any;
  author: {
    name: string;
    image: string;
  }
};