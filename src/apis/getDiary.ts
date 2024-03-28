import { instance } from "@apis/instance";

const getDiary = async (filterIndex: number) => {
  const getDiaryURL = `/user/diaries/${filterIndex}`;

  const accessToken =
    "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJybGRuZDEyMzQ1NUBuYXZlci5jb20iLCJpYXQiOjE3MTEyMDUwMzIsImV4cCI6MTcxMTQ2NDIzMn0.vt0daDkKbASW3xjownyrWT2RBQ7Byo7WWKS1-G8Qdm9hdva9l2zaC8WpTOu2TeTBCQ9qvrWI2b_bFdExA5l_1Q";

  const response = await instance.get(getDiaryURL, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });

  console.log(response.data.data);

  return response.data.data;
};

export default getDiary;
