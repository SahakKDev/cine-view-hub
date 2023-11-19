export interface VideoItem {
  Id: string;
  Title: string;
  CoverImage: string;
  TitleImage: string;
  Date: string;
  ReleaseYear: string;
  MpaRating: string;
  Category: string;
  Duration: string;
  Description: string;
  VideoUrl?: string;
}

export type VideoCatalog = {
  Featured: VideoItem;
  TendingNow: VideoItem[];
};
