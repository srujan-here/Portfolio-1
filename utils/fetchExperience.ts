import { PageInfo } from "../typings";

export const fetchSkills = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_Base_URL}/api/getmyPageInfo`
  );
  const data = await res.json();
  console.log(data);

  const pageinfo: PageInfo[] = data.pageinfo;
  return pageinfo;
};
