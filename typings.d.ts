interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

export interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface PageInfo extends SanityBody {
  address: string;
  backgroundInformation: string;
  email: string;
  heroImage: Image;
  name: string;
  phoneNumber: string;
  profilePic:Image;
  role:string,
}

export interface Technology extends SanityBody{
    _type:"social",
    title:string,
    url:string
}
export interface Skill extends SanityBody{
    _type:"skill",
    image:Image,
    progress:number,
    title:string
}

export interface Project extends SanityBody{
    title:string,
    _type:"project",
    image:Image,
    linktoBuild:string,
    summary:string,
    technologies:Technology[],
    
}
export interface Experience extends SanityBody{
  _type:"experience",
  company:string,
  companyImage:Image,
  dateEnded:string,
  dateStarted:string,
  isCurrentlyWorkinghere:boolean,
  jobTitle:string,
  points:string[],
  profilePic:Image,
  technologies:Technology[]

}
export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}
