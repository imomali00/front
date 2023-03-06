import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import SkillContext from "../Context/SkillContext";

export const Home = () => {
  const { skills, getSkills, deleteSkill } = useContext(SkillContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await getSkills();
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="mt-12">
      <div className="relative overflow-x-auto">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone_number
                </th>
              </tr>
            </thead>
            <tbody>
              {skills ? (
                skills.map((skill) => {
                  return (
                    <tr
                      key={skill.id}
                      className="bg-white border-b dark:bg-gray-700 dark:border-gray-700"
                    >
                      <td className="py-4 px-6">{skill.name}</td>
                      <td className="py-4 px-6">{skill.email}</td>
                      <td className="py-4 px-6">{skill.phone_number}</td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="3" className="text-center">
                    No records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};
