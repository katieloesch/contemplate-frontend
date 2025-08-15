// snake-casing + .dto.ts used to match rails API (instead of camelCasing + .ts)
export interface Document {
  title: string;
  description: string;
  file_url: string;
  updated_at: string;
  image_url: string;
}
