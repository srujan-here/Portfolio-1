import { Experience, PageInfo } from "../typings";

export const fetchExperience = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getmyExperience`
  );
  const data = await res.json();
  // console.log(data);

  const experience: Experience[] = data.experience;
  return experience;
};
