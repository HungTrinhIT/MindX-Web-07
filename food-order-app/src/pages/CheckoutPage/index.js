import React, { useState } from "react";

const CheckoutPage = () => {
  const [cusomter, setCustomer] = useState({
    fullname: {
      value: "",
      error: null,
    },
    city: {
      value: "",
      error: null,
    },
    email: {
      value: "",
      error: null,
    },
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setCustomer({
      ...cusomter,
      [name]: {
        ...cusomter[name],
        value: value,
      },
    });
  };

  const onSubmiHandler = (e) => {
    e.preventDefault();
    const validatedCustomer = { ...cusomter };

    // Validation
    for (const key in cusomter) {
      const currentField = cusomter[key];
      switch (key) {
        case "fullname":
          currentField.value === "" || currentField.value === null
            ? (validatedCustomer[key].error = "Fullname is required")
            : (validatedCustomer[key].error = null);
          break;
        case "city":
          currentField.value === ""
            ? (validatedCustomer[key].error = "City is required")
            : (validatedCustomer[key].error = null);
          break;
        case "email":
          currentField.value === ""
            ? (validatedCustomer[key].error = "Email is required")
            : (validatedCustomer[key].error = null);
          break;

        default:
          return;
      }
    }

    const hasError = hasErrorCheck(validatedCustomer);

    if (hasError) {
      setCustomer(validatedCustomer);
    } else {
      //checkout API
    }
  };

  const hasErrorCheck = (data) => {
    for (let key in data) {
      if (data[key].error === null) {
        return true;
      }
    }
    return false;
  };
  const { fullname, city, email } = cusomter;

  return (
    <div className="checkout-form">
      <form onSubmit={onSubmiHandler}>
        <div className="form-control">
          <label>Fullname</label>
          <input
            value={fullname.value}
            name="fullname"
            onChange={onChangeHandler}
          />
          {fullname.error && <span>Fullname is required</span>}
        </div>
        <div className="form-control">
          <label>City</label>
          <input value={city.value} name="city" onChange={onChangeHandler} />
          {city.error && <span>City is required</span>}
        </div>
        <div className="form-control">
          <label>Email</label>
          <input value={email.value} name="email" onChange={onChangeHandler} />
          {email.error && <span>Fullname is required</span>}
        </div>
        <button type="submit">Checkout</button>
      </form>
    </div>
  );
};

export default CheckoutPage;
