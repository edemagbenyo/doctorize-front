import React, { useState, useEffect } from "react";
import "../styles/tablets/healthinfo.scss";
import PropTypes from "prop-types";
const HealthInformation = ({ updateInformation, information, flash }) => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [personal, setPersonal] = useState("");
  const [family, setFamily] = useState("");

  useEffect(() => {
    setAge(information && information.age);
    setGender(information && information.gender);
    setHeight(information && information.height);
    setWeight(information && information.weight);
    setFamily(information && information.family);
    setPersonal(information && information.personal);
  }, [information]);

  return (
    <div className="health-container">
      <h2 style={{ textAlign: "center" }}>Health information</h2>
  {flash && (<span className="flash">{flash}</span>)}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateInformation({
            old: information,
            age,
            gender,
            weight,
            height,
            personal,
            family,
          });
        }}
      >
        <div>
          <label>Age</label>
          <input
            type="text"
            value={age}
            placeholder="eg. 33"
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div>
          <label>Gender</label>
          <select
            value={gender}
            defaultValue={information.gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value=''>Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="trans">Transgender</option>
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
          <button type="submit">Update Information</button>
        </div>
      </form>
    </div>
  );
};

HealthInformation.propTypes = {
  updateInformation: PropTypes.func,
};

HealthInformation.defaultProps = {
  updateInformation: () => undefined,
};
export default HealthInformation;
