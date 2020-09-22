import React, { useState, useEffect } from "react";

const Modal3 = (props) => {
  const { urls } = props;
  useEffect(() => {
    setForm({
      fullName: "",
      email: "",
      phone: "",
      problem: "",
      company: "",
      client: "",
      paid: "",
      url: urls,
    });
  }, [urls]);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    problem: "",
    company: "",
    client: "",
    paid: "",
    url: urls,
    mailers: [],
  });
  const [letters, setLetters] = useState([]);

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setLetters([...letters, e.target.value]);
  };

  useEffect(() => {
    if (letters.length > 0 && new Set(letters).size !== letters.length) {
      function filterByCount(array, count) {
        return array.filter(function (value) {
          return (
            array.filter(function (v) {
              return v === value;
            }).length === count
          );
        });
      }

      setLetters(filterByCount(letters, 1));
    }
  }, [letters]);

  const { fullName, email, phone, problem, company, url, client, paid } = form;
  useEffect(() => {
    if (letters.length > 0)
      setForm({
        fullName,
        email,
        phone,
        problem,
        client,
        company,
        paid,
        url,
        mailers: [],
      });
  }, [
    letters.length,
    fullName,
    email,
    phone,
    problem,
    client,
    company,
    paid,
    url,
    urls,
  ]);

  return (
    <div
      className='card bg-light container all-center'
      style={{ margin: "auto" }}>
      <form
        className='form-text'
        name='form'
        method='post'
        action='/thanks/'
        data-netlify='true'
        data-netlify-honeypot='bot-field'>
        <span style={{ float: "right" }}>
          <button onClick={props.toggleModal}> X</button>
        </span>
        <input type='hidden' name='form-name' value='form' />

        <input
          type='text'
          name='url'
          style={{ display: "none" }}
          value={urls}
        />
        <input
          type='text'
          name='fullName'
          placeholder='Full Name'
          onChange={onChange}
          value={fullName}
        />
        <input
          type='text'
          name='email'
          placeholder='e-mail'
          onChange={onChange}
          value={email}
        />
        <input
          type='text'
          name='phone'
          placeholder='Phone Number'
          onChange={onChange}
          value={phone}
        />

        <div>
          <h3>Which Letters Did you Receive</h3>

          <label htmlFor='years'>Notice of Criminal Investigation</label>
          <input
            type='checkbox'
            name='letters'
            value='criminal'
            onChange={onChange}
          />
          <br />
          <label htmlFor='years'>Notice of Distraint Warrant</label>
          <input
            type='checkbox'
            name='letters'
            value='distraint'
            onChange={onChange}
          />
          <br />
          <label htmlFor='years'>Social Security Seizure</label>
          <input
            type='checkbox'
            name='letters'
            value='ssi'
            onChange={onChange}
          />
        </div>
        <br />
        <label htmlFor='company'>
          Were you an American Tax Solutions or Tax Debt Group Client?
        </label>
        <select name='client' id='client' onChange={onChange}>
          <option value=''></option>
          <option value='true'>Yes</option>
          <option value='false'>No</option>
        </select>
        <br />
        <label htmlFor='paid'>If So How Much Money Did You Pay Them?</label>
        <input
          type='text'
          placeholder='Amount Paid'
          name='paid'
          onChange={onChange}
          value={paid}
        />
        <label htmlFor='years'>What information do you have?</label>
        <textarea
          type='text'
          name='problem'
          onChange={onChange}
          value={problem}
        />
        <button className='btn btn-block btn-dark' type='submit'>
          Leave Us A Message
        </button>
      </form>
    </div>
  );
};

export default Modal3;
