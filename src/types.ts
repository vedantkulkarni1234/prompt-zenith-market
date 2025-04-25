
export interface PromptSuite {
  id: string;
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  originalPrice?: number;
  image: string;
  features: string[];
  samplePrompts: string[];
  useCase: string;
}
