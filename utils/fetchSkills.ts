import { Skill } from "../typings";

export const fetchSkills = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getmySkills`
  );
  const data = await res.json();
  // console.log(data);

  const skills: Skill[] = data.skills;
  return skills;
};
