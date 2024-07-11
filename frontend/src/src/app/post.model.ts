export class Post {
  id?: number;
  title: string;
  content: string;
  postedDate: string;
  category: string;
  
  constructor(title: string, content: string, postedDate: string, category: string, id?: number)   {
    this.id = id;
    this.title = title;
    this.content = content;
    this.postedDate = postedDate;
    this.category = category;

  }
}
