export interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: string;
  imageUrls?: string[];
}
