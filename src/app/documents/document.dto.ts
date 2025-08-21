// snake-casing + .dto.ts used to match rails API (instead of camelCasing + .ts)
export interface Document {
  id: number;
  title: string;
  description: string;
  image_url: string;
  file_url: string;
  updated_at: string;
}
