export interface AboutHighlight {
  id: string;
  title: string;
  description: string;
}

export interface AboutContent {
  paragraphs: string[];
  highlights: AboutHighlight[];
}
