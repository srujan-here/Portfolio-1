import { Project } from "../typings";

export const fetchProject = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getmyProjects`
  );
  const data = await res.json();
  // console.log(data);

  const projects: Project[] = data.projects;
  return projects;
};
