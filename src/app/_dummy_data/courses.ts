export interface NewsItem {
  title: string;
  description: string;
  image: string;
  id: number;
  instructor: string;
  instructorImage?: string;
  imageUrl: string;
}

export const newsData: NewsItem[] = [
  {
    id: 1,
    title: "Software Engineering",
    description: "Dive into the principles of software development.",
    image: "https://via.placeholder.com/150",
    instructor: "John Doe",
    imageUrl: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    title: "AI & ML",
    description: "Uncover the secrets of AI and ML. Learn from the best.",
    image: "https://via.placeholder.com/150",
    instructor: "Jane Love",
    imageUrl: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    title: "Big Data & Analytics",
    description: "Learn to analyze and interpret complex data.",
    image: "https://via.placeholder.com/150",
    instructor: "Linda Smith",
    imageUrl: "https://via.placeholder.com/100",
  },
];
