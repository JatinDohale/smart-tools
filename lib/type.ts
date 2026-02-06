export interface AITool {
  id:string;
  name: string;
  slug: string;
  description: string;
  category: string;
  pricing: string;
  website: string;
  logo?: string;

  pros: string[]
  cons: string[]
}
