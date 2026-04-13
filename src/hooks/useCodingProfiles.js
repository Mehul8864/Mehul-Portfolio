// src/hooks/useCodingProfiles.js
import { useState, useEffect } from 'react';

const useCodingProfiles = () => {
  const [leetcodeData, setLeetcodeData] = useState(null);
  const [codeforcesData, setCodeforcesData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const cachedData = localStorage.getItem('codingProfilesData');
        const cachedTimestamp = localStorage.getItem('codingProfilesTimestamp');
        
        if (cachedData && cachedTimestamp && Date.now() - parseInt(cachedTimestamp) < 3600000) {
          const data = JSON.parse(cachedData);
          setLeetcodeData(data.leetcode);
          setCodeforcesData(data.codeforces);
          setIsLoading(false);
          return;
        }

        const [leetcodeResponse, codeforcesResponse] = await Promise.all([
          fetch('https://leetcode-stats-api.herokuapp.com/Mehul_Gupta_019'),
          fetch('https://codeforces.com/api/user.rating?handle=MehulGupta19')
        ]);

        const leetcodeData = await leetcodeResponse.json();
        const codeforcesData = await codeforcesResponse.json();

        localStorage.setItem('codingProfilesData', JSON.stringify({
          leetcode: leetcodeData,
          codeforces: codeforcesData
        }));
        localStorage.setItem('codingProfilesTimestamp', Date.now().toString());

        setLeetcodeData(leetcodeData);
        setCodeforcesData(codeforcesData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { leetcodeData, codeforcesData, isLoading, error };
};

export default useCodingProfiles;