import React, { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    terms: false,
  });

  const [passwordError, setPasswordError] = useState({
    length: true,
    upper: true,
    lower: true,
    digit: true,
  });

  const [emailError, setEmailError] = useState(null);

  const handleForm = (event) => {
    const { name, type, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: name === "terms" ? !prevFormData.terms : value,
      };
    });
    if (name === "password") {
      const hasUpperCase = /[A-Z]/.test(value);
      const hasLowerCase = /[a-z]/.test(value);
      const hasDigit = /[0-9]/.test(value);
      const isLengthValid = value.length >= 6;
      setPasswordError({
        length: !isLengthValid,
        upper: !hasUpperCase,
        lower: !hasLowerCase,
        digit: !hasDigit,
      });
      if (name === "email") {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const isEmailValid = emailRegex.test(value);
        setEmailError(!isEmailValid ? null : "Invalid email format");
        console.log(emailRegex);
      }
      setFormData((prevFormData) => ({
        ...prevFormData,
        digit: hasDigit,
        length: isLengthValid,
        upper: hasUpperCase,
        lower: hasLowerCase,
      }));
    }
  };
  // console.log(emailError);

  const handleSubmit = (e) => {
    e.preventDefault();
    const hasEmailError = emailError !== null;
    const hasPasswordError = passwordError.length || passwordError.upper || passwordError.lower || passwordError.digit;
    ;
    if (hasPasswordError) {
      alert("Password is Invalid.");
    }
    if (hasEmailError) {
      alert("Email is invalid." + emailError);
    } if (formData.name || formData.email || formData.password || formData.gender || formData.terms === null){
      alert("Fill the required fields correctly")
    }
  };
  // console.log(formData);

  return (
    <div className="shadow-2xl shadow-red-900/60 md:w-9/12 h-5/6 w-11/12 flex flex-row rounded-3xl overflow-hidden">
      <div className=" w-8/12 md:w-7/12  h-full flex flex-col items-center justify-center bg-[#ebe9e9] space-y-4">
        <h3 className="md:text-2xl text-xl font-bold text-gray-700">
          Hello, Friend!
        </h3>
        <form onSubmit={handleSubmit} className="space-y-6 mx-2">
          <div className="space-y-1">
            <input
              type="text"
              id="name"
              onChange={handleForm}
              name="name"
              value={formData.name}
              placeholder="Enter your name"
              className="w-full block shadow-lg placeholder-gray-500 px-3 py-1 leading-6 rounded-3xl border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 focus:outline-none dark:border-gray-600 dark:focus:border-blue-500 dark:placeholder-gray-400"
            />
          </div>

          <div className="space-y-1">
            <input
              type="email"
              id="email"
              onChange={handleForm}
              name="email"
              value={formData.email}
              placeholder="Enter your email"
              className={`w-full block shadow-lg placeholder-gray-500 px-3 py-1 leading-6 rounded-3xl border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 focus:outline-none dark:border-gray-600 dark:focus:border-blue-500 dark:placeholder-gray-400
              `}
            />
            <p className="text-xs text-red-500"> {emailError} </p>
          </div>
          <div className="space-y-1">
            <label htmlFor="password" className="text-sm font-medium">
              <input
                type="password"
                id="password"
                onChange={handleForm}
                name="password"
                value={formData.password}
                placeholder="Enter your password"
                className={`w-full block shadow-lg placeholder-gray-500 px-3 py-1 leading-6 rounded-3xl  border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 focus:outline-none  dark:border-gray-600 dark:focus:border-blue-500 dark:placeholder-gray-400  ${
                  !passwordError.digit &&
                  !passwordError.length &&
                  !passwordError.upper &&
                  !passwordError.lower
                    ? " border-green-500 focus:ring-green-500"
                    : "border-red-500 focus:ring-red-500"
                } `}
              />
            </label>

            <label className="flex items-center">
              <input
                type="checkbox"
                id="length"
                // onChange={handlePassError}
                name="length"
                value="length"
                checked={formData.password.length >= 6 && !passwordError.length}
                className="border border-gray-200 bg-green-500 accent-green-500 text-white rounded h-3 w-3"
              />
              <span
                className={`${
                  formData.password.length >= 6
                    ? "text-green-500"
                    : "text-red-500"
                } text-xs ms-1`}
              >
                Password must be 6 characters long{" "}
              </span>
            </label>

            <label className="flex items-center">
              <input
                type="checkbox"
                id="digit"
                // onChange={handlePassError}
                name="digit"
                value="digit"
                checked={!passwordError.digit}
                className="border border-gray-200 bg-green-500 accent-green-500 text-white rounded h-3 w-3"
              />
              <span
                className={`${
                  !passwordError.digit ? "text-green-500" : "text-red-500"
                } text-xs ms-1`}
              >
                Must contain number{" "}
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                id="upper"
                // onChange={handlePassError}
                name="upper"
                value="upper"
                checked={!passwordError.upper && !passwordError.lower}
                className="border border-gray-200 bg-green-500 accent-green-500 text-white rounded h-3 w-3"
              />
              <span
                className={`${
                  !passwordError.upper ? "text-green-500" : "text-red-500"
                } text-xs ms-1`}
              >
                UpperCase{" "}
              </span>
              <span
                className={`${
                  !passwordError.lower ? "text-green-500" : "text-red-500"
                } text-xs ms-1`}
              >
                and LowerCase{" "}
              </span>
            </label>
          </div>

          <div className="space-y-1 ">
            <legend className="font-semibold text-gray-700">Gender</legend>
            <div className="flex gap-5 items-center justify-start">
              <label htmlFor="male">
                <input
                  type="radio"
                  id="male"
                  onChange={handleForm}
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  className="block space placeholder-gray-500 px-3 py-1 leading-6 rounded-lg  focus:outline-none "
                />
                <span className="text-sm">Male</span>
              </label>
              <label htmlFor="female">
                <input
                  type="radio"
                  id="female"
                  onChange={handleForm}
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  className="block border placeholder-gray-500 px-3 py-1 leading-6 rounded-lg border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 focus:outline-none dark:border-gray-600 dark:focus:border-blue-500 dark:placeholder-gray-400"
                />
                <span className="text-sm">Female</span>
              </label>
              <label htmlFor="female">
                <input
                  type="radio"
                  id="robot"
                  onChange={handleForm}
                  name="gender"
                  value="robot"
                  checked={formData.gender === "robot"}
                  className="block border placeholder-gray-500 px-3 py-1 leading-6 rounded-lg border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 focus:outline-none dark:border-gray-600 dark:focus:border-blue-500 dark:placeholder-gray-400"
                />
                <span className="text-sm">Robot</span>
              </label>
            </div>
          </div>
          <div className="w-full flex flex-col items-center">
            <div className="flex items-center justify-between space-x-2 mb-5">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  onChange={handleForm}
                  name="terms"
                  value="terms"
                  checked={formData.terms}
                  className="border border-gray-200 rounded h-4 w-4 text-blue-500 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-600 dark:ring-offset-gray-900 dark:focus:border-blue-500 dark:checked:bg-blue-500 dark:checked:border-transparent"
                />
                <span className="text-sm ml-2">
                  I've read and agree to{" "}
                  <span className="text-red-900">Terms and Conditions</span>
                </span>
              </label>
            </div>
            <button
              type="submit"
              onSubmit={handleSubmit}
              className="md:w-3/6 w-4/6 inline-flex justify-center items-center space-x-2 border font-semibold rounded-full px-4 py-1 leading-6 border-red-700 bg-red-700 text-white hover:text-white hover:bg-red-600 hover:border-red-600 focus:ring focus:ring-red-400 focus:ring-opacity-50 active:bg-red-700 active:border-red-700 dark:focus:ring-red-400 dark:focus:ring-opacity-90 shadow-lg"
            >
              Sign Up
            </button>
          </div>
        </form>
        {/* <form className="w-5/6 h-auto flex flex-col">
          <h3 className="text-2xl font-bold">Hello, Friend!</h3>

          <label htmlFor="">
            <input type="text" />
          </label>

          <label htmlFor="">
            <input type="email" />
          </label>

          <label htmlFor="">
            <input type="password" />
          </label>

          <div>
            <div>
              <legend>Gender</legend>
              <label htmlFor="">
                <input type="radio" />
                <span className="ms-2"> Male</span>
              </label>
              <label htmlFor="">
                <input type="radio" />
                <span className="ms-2"> Female</span>
              </label>
            </div>
            <label htmlFor="">
              <input type="checkbox" />
              <span>
                I've read and agree to{" "}
                <span className="text-red-900">Terms and Conditions</span>{" "}
              </span>
            </label>
          </div>

          <button className="border border-red-900 w-3/6">Sign Up</button>
        </form> */}
      </div>

      <div className=" md:w-6/12 w-4/12  h-full bg-gradient-to-t from-red-800 to-red-400 text-center flex flex-col items-center justify-center text-white">
        <div className="w-9/12 gap-5 flex flex-col ">
          <h1 className="font-bold md:text-3xl text-xl ">Good to see You!</h1>
          <p className="md:text-sm text-xs ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            modi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
