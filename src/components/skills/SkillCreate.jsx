import React, { useContext, useEffect } from "react";
import SkillContext from "../../Context/SkillContext";

export const SkillCreate = () => {
  const { formValues, onchange, storeSkill, errors, setErrors } =
    useContext(SkillContext);
  useEffect(() => {
    setErrors();
  }, []);

  return (
    <div className="mt-12">
      <form
        action=""
        onSubmit={storeSkill}
        className="max-w-md mx-auto p-4 bg-white shadow-md rounded-sm"
      >
        <div className="space-y-6">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Name
            </label>
            <input
              name="name"
              value={formValues["name"]}
              onChange={onchange}
              className="border border-gray-300 text-sm rounded-md block w-full p-2"
            />
            {errors?.name && (
              <span className="text-sm text-red-400">{errors.name[0]}</span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email
            </label>
            <input
              name="email"
              value={formValues["email"]}
              onChange={onchange}
              className="border border-gray-300 text-sm rounded-md block w-full p-2"
            />
            {errors?.email && (
              <span className="text-sm text-red-400">{errors.email[0]}</span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone_number"
              className="block mb-2 text-sm font-medium"
            >
              Phone_number
            </label>
            <input
              name="phone_number"
              value={formValues["phone_number"]}
              onChange={onchange}
              className="border border-gray-300 text-sm rounded-md block w-full p-2"
            />
            {errors?.phone_number && (
              <span className="text-sm text-red-400">
                {errors.phone_number[0]}
              </span>
            )}
          </div>
        </div>
        <div className="mb-2 mt-4">
          <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">
            Store
          </button>
        </div>
      </form>
    </div>
  );
};
