import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const HealthInformation = ({
  updateInformation, information, flash, isLoading,
}) => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [personal, setPersonal] = useState('');
  const [family, setFamily] = useState('');

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
      <h2 style={{ textAlign: 'center' }}>Health information</h2>
      <form
        onSubmit={e => {
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
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="text"
            value={age}
            placeholder="eg. 33"
            onChange={e => setAge(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            value={gender}
            defaultValue={information && information.gender}
            onChange={e => setGender(e.target.value)}
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="trans">Transgender</option>
          </select>
        </div>
        <div>
          <label htmlFor="weight">Weight</label>
          <input
            id="weight"
            type="text"
            placeholder="eg. 54"
            value={weight}
            onChange={e => setWeight(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="height">Height(ft)</label>
          <input
            id="height"
            type="text"
            placeholder="eg. 5.6"
            value={height}
            onChange={e => setHeight(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="personal">Personal Information</label>
          <textarea
            id="personal"
            value={personal}
            onChange={e => setPersonal(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="family">Family Information</label>
          <textarea
            id="family"
            value={family}
            onChange={e => setFamily(e.target.value)}
          />
        </div>

        <div>
          <div />
          <button style={{ width: '100%', padding: '10px' }} type="submit">{isLoading ? 'Loading...' : 'Update Information'}</button>
        </div>
      </form>
    </div>
  );
};

HealthInformation.propTypes = {
  updateInformation: PropTypes.func,
  information: PropTypes.shape({
    id: PropTypes.number,
    age: PropTypes.string,
    gender: PropTypes.string,
    height: PropTypes.string,
    weight: PropTypes.string,
    family: PropTypes.string,
    personal: PropTypes.string,
  }),
  flash: PropTypes.string,
  isLoading: PropTypes.bool,
};

HealthInformation.defaultProps = {
  updateInformation: () => undefined,
  information: {},
  flash: '',
  isLoading: false,
};
export default HealthInformation;
