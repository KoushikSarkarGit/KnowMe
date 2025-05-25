export default interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  fullDescription: string;
  isLive: boolean;
  owner: string;
  isFeatured: boolean;
  livelink?: string;
  image?: string;
  githubrepo: string;
  skillsUsed: string[];
}