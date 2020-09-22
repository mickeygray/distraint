import React, { useState, useEffect } from "react";

const Modal3 = (props) => {
  const { urls } = props;
  useEffect(() => {
    setForm({
      fullName: "",
      email: "",
      phone: "",
      problem: "",
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
    client: "",
    paid: "",
    url: urls,
    mailers: [],
  });

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  console.log(form);
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
          onChange={onChange}
        />
        <input
          type='text'
          name='fullName'
          placeholder='Full Name'
          onChange={onChange}
        />
        <input
          type='text'
          name='email'
          placeholder='e-mail'
          onChange={onChange}
        />
        <input
          type='text'
          name='phone'
          placeholder='Phone Number'
          onChange={onChange}
        />

        <div>
          <h3>Which Letters Did you Receive?</h3>

          <label htmlFor='years'>Final Demand For Payment</label>
          <input
            type='checkbox'
            name='mailers'
            value='final'
            onChange={onChange}
          />
          <br />
          <label htmlFor='years'>Notice of Distraint Warrant</label>
          <input
            type='checkbox'
            name='mailers'
            value='distraint'
            onChange={onChange}
          />
          <br />
          <label htmlFor='years'>Social Security Seizure</label>
          <input
            type='checkbox'
            name='mailers'
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
