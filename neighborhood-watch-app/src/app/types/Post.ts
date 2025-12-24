export interface Post {
  id: string;
  text: string;
  timestamp: any; // Firestore Timestamp
  author: {
    name: string;
    image: string;
  };
  image?: string;
  type?: 'notice' | 'alert' | 'general';
}