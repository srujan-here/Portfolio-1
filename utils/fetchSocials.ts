import { Social } from "../typings";

export const fetchSkills = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getmySocials`
  );
  const data = await res.json();
  console.log(data);

  const socials: Social[] = data.socials;
  return socials;
};
