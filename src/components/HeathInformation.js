import React, { useState, useEffect } from "react";
import "../styles/tablets/healthinfo.scss";
import PropTypes from "prop-types";
const HealthInformation = ({ updateInformation, information }) => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [personal, setPersonal] = useState("");
  const [family, setFamily] = useState("");
  const setNewAge = (value) => {
    setAge(value)
  };

  useEffect(() => {
    if (information) {
      setAge(information.age);
      setGender(information.gender);
      setWeight(information.weight);
      setHeight(information.height);
      setPersonal(information.personal);
      setFamily(information.family);
    }
  });
  return (
    <div className="container">
      <h2 style={{ textAlign: "center" }}>Health information</h2>
      <form>
        <div>
          <label>Age</label>
          <input
            type="number"
            value={age}
            placeholder="eg. 33"
            onChange={(e) => setNewAge(e.target.value)}
          />
        </div>
        <div>
          <label>Gender</label>
          <select onChange={(e) => setGender(e.target.value)}>
            <option>Select gender</option>
            <option
              defaultValue={gender === "male" ? true : false}
              value="male"
            >
              Male
            </option>
            <option
              defaultValue={gender === "female" ? true : false}
              value="female"
            >
              Female
            </option>
            <option
              defaultValue={gender === "trans" ? true : false}
              value="female"
            >
              Transgender
            </option>
          </select>
        </div>
        <div>
          <label>Weight</label>
          <input
            type="text"
            placeholder="eg. 54"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div>
          <label>Height(ft)</label>
          <input
            type="text"
            placeholder="eg. 5.6"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div>
          <label>Personal Information</label>
          <textarea
            value={personal}
            onChange={(e) => setPersonal(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label>Family Information</label>
          <textarea
            value={family}
            onChange={(e) => setFamily(e.target.value)}
          ></textarea>
        </div>

        <div>
          <div></div>
          <button>Update Information</button>
        </div>
      </form>
    </div>
  );
};

HealthInformation.propTypes = {
  updateInformation: PropTypes.func,
  information: PropTypes.oneOfType({
    age: PropTypes.string,
    gender: PropTypes.string,
  }),
};

HealthInformation.defaultProps = {
  updateInformation: () => undefined,
};
export default HealthInformation;
