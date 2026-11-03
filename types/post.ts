export interface PostProp {
  id: number;
  title: string;
  content: string;
  description: string;
  category: string;
  imageUrl: string;
  imagePublicId: string;
  publish: boolean;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
}
