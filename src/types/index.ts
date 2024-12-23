// Add to existing types file
export interface EventFormData {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: string;
  imageUrl?: string;
  ticketPrice?: number;
  capacity?: number;
}