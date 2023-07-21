export interface Book {
  id: string;
  title: string;
  authors: Author[];
  translators: any[];
  subjects: string[];
  bookshelves: string[];
  languages: string[];
  media_type: string;
  formats: Formats;
  download_count: number;
}

export interface Author {
  name: string;
  birth_year: number;
  death_year: number;
}

export interface Formats {
  "application/x-mobipocket-ebook": string;
  "application/epub+zip": string;
  "text/html": string;
  "application/octet-stream": string;
  "image/jpeg": string;
  "text/plain": string;
  "text/plain; charset=us-ascii": string;
  "application/rdf+xml": string;
}
