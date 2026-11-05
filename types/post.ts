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

export interface FetchPostProp {
  pageParam?: string | null;
  limit?: number;
}

export interface FetchPostRes {
  posts: PostProp[];
  nextCursor: number;
}
