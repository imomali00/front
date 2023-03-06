import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/";

const SkillContext = createContext();
const initialForm = {
  name: "",
  email: "",
  phone_number: "",
};

export const SkillProvider = ({ children }) => {
  const [formValues, setFormValues] = useState(initialForm);
  const [skills, setSkills] = useState([]);
  const [skill, setSkill] = useState([]);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const onchange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const getSkills = async () => {
    const { data } = await axios.get("skills");
    setSkills(data.data);
  };

  const getSkill = async (id) => {
    const { data } = await axios.get(`skills/${id}`);
    const apiSkill = data.data;
    setSkill(apiSkill);
    setFormValues({
      name: apiSkill.name,
      email: apiSkill.email,
      phone_number: apiSkill.phone_number,
    });
  };

  const storeSkill = async (e) => {
    e.preventDefault();
    try {
      await axios.post("skills", formValues);
      setFormValues(initialForm);
      navigate("/skills");
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };

  const updateSkill = async (e) => {
    e.preventDefault();
    try {
      await axios.put("skills/" + skill.id, formValues);
      setFormValues(initialForm);
      navigate("/skills");
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };

  const deleteSkill = async (id) => {
    if (!window.confirm("Are you sure ?")) {
      return;
    }
    await axios.delete("skills/" + id);
    getSkills();
  };

  return (
    <SkillContext.Provider
      value={{
        skills,
        getSkills,
        getSkill,
        onchange,
        formValues,
        storeSkill,
        errors,
        setErrors,
        updateSkill,
        deleteSkill,
      }}
    >
      {children}
    </SkillContext.Provider>
  );
};

export default SkillContext;
