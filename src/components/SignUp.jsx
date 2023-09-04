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
  const [passErrorMessage, setPassErrorMessage] = useState("")

  const [emailError, setEmailError] = useState(null);
  const [isEmailValid, setIsEmailValid] = useState(false);

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

      setFormData((prevFormData) => ({
        ...prevFormData,
        digit: hasDigit,
        length: isLengthValid,
        upper: hasUpperCase,
        lower: hasLowerCase,
      }));
    } if (name === "email") {
      const inputValue = event.target.value
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      setIsEmailValid(emailRegex.test(inputValue))
      // setEmailError(inputValue)
    }
  };
  // console.log(emailError);

  const handleSubmit = (e) => {
    e.preventDefault();
    const hasEmailError = !isEmailValid
    const hasPasswordError =
      passwordError.length ||
      passwordError.upper ||
      passwordError.lower ||
      passwordError.digit;
    if (hasPasswordError) {
      setPassErrorMessage("Invalid Email")
    } else {
      setPassErrorMessage(!passErrorMessage)
    };

    if (formData.terms === false) {
      alert("You must agree to terms to use our website");
    }
    
    if (hasEmailError) {
      setEmailError("Invalid Email format")
    } else {
      setEmailError(!isEmailValid)
    }

    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.gender === "" ||
      hasPasswordError ||
      hasEmailError
    ) {
      null
    }
    else {
      window.location.reload();
    }
  };
  // console.log(formData);

  return (
    <div className="shadow-2xl h-full shadow-green-900/60 md:h-5/6 lg:w-6/12 md:w-7/12 w-9/12 flex flex-row items-center justify-center rounded-3xl overflow-y-auto fixed ">
      <div className=" w-8/12 h-full item-center justify-center flex-col flex bg-[#ebe9e9]">
        <form onSubmit={handleSubmit} className="md:space-y-6 space-y-3 ms-10">
          <h3 className="md:text-2xl text-center text-md font-bold text-gray-700">
            Hello, Friend!
          </h3>
          <div className="space-y-1">
            <input
              type="text"
              id="name"
              onChange={handleForm}
              name="name"
              value={formData.name}
              placeholder="Enter your name"
              className="w-5/6 block shadow-lg  placeholder-gray-500 px-3 py-1 text-sm md:text-md lg:text-lg leading-6 rounded-3xl border-gray-200 focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50 focus:outline-none dark:border-gray-600 dark:focus:border-green-500 dark:placeholder-gray-400"
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
              className={`w-5/6 block shadow-lg placeholder-gray-500 px-3 py-1 text-sm md:text-md lg:text-lg leading-6 rounded-3xl dark:border-gray-600 border-gray-200  dark:placeholder-gray-400 ${!isEmailValid ? "focus:border-red-500 focus:ring focus:ring-red-500 focus:ring-opacity-50 focus:outline-none  dark:focus:border-red-500" : "focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50 focus:outline-none  dark:focus:border-green-500"}
              `}
            />
            <p className="text-xs text-red-900"> {emailError} </p>
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
                className={`w-5/6 block shadow-lg placeholder-gray-500 text-sm md:text-md lg:text-lg px-3 py-1 text-sm md:text-md lg:text-lg leading-6 rounded-3xl  border-gray-200 focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50 focus:outline-none  dark:border-gray-600 dark:focus:border-green-500 dark:placeholder-gray-400  ${
                  !passwordError.digit &&
                  !passwordError.length &&
                  !passwordError.upper &&
                  !passwordError.lower
                    ? " border-green-500 focus:ring-green-500"
                    : "border-red-500 focus:ring-red-500"
                } `}
              />
            </label>
            <p className="text-red-900 text-xs ">
              {passErrorMessage}
            </p>

            {/* <label className="flex items-center">
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
                } md:text-xs text-[10px]  ms-1`}
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
                } md:text-xs text-[10px] ms-1`}
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
                } md:text-xs text-[10px] ms-1`}
              >
                UpperCase{" "}
              </span>
              <span
                className={`${
                  !passwordError.lower ? "text-green-500" : "text-red-500"
                } md:text-xs text-[10px] ms-1`}
              >
                and LowerCase{" "}
              </span>
            </label> */}
          </div>

          <div className="space-y-1 ">
            <legend className="font-semibold text-start text-sm md:text-md text-gray-700">
              Gender
            </legend>
            <div className="flex gap-5 items-center justify-start">
              <label htmlFor="male">
                <input
                  type="radio"
                  id="male"
                  onChange={handleForm}
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  className="block space placeholder-gray-500 px-3 py-1 text-sm md:text-md lg:text-lg leading-6 rounded-lg  focus:outline-none "
                />
                <span className="md:text-sm text-xs">Male</span>
              </label>
              <label htmlFor="female">
                <input
                  type="radio"
                  id="female"
                  onChange={handleForm}
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  className="block border placeholder-gray-500 px-3 py-1 text-sm md:text-md lg:text-lg leading-6 rounded-lg border-gray-200 focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50 focus:outline-none dark:border-gray-600 dark:focus:border-green-500 dark:placeholder-gray-400"
                />
                <span className="md:text-sm text-xs">Female</span>
              </label>
              <label htmlFor="female">
                <input
                  type="radio"
                  id="robot"
                  onChange={handleForm}
                  name="gender"
                  value="robot"
                  checked={formData.gender === "robot"}
                  className="block border placeholder-gray-500 px-3 py-1 text-sm md:text-md lg:text-lg leading-6 rounded-lg border-gray-200 focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50 focus:outline-none dark:border-gray-600 dark:focus:border-green-500 dark:placeholder-gray-400"
                />
                <span className="md:text-sm text-xs">Robot</span>
              </label>
            </div>
          </div>
          <div className="w-full flex flex-col">
            <div className="flex items-center justify-between space-x-2 mb-5">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  onChange={handleForm}
                  name="terms"
                  value="terms"
                  checked={formData.terms}
                  className="border border-gray-200  rounded h-4 w-4 text-green-500 focus:border-green-500 focus:ring focus:ring-green-500 focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-600 dark:ring-offset-gray-900 dark:focus:border-green-500 dark:checked:bg-green-500 dark:checked:border-transparent"
                />
                <span className="md:text-sm text-xs ml-2">
                  I've read and agree to{" "}
                  <span className="text-green-900">Terms and Conditions</span>
                </span>
              </label>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              onSubmit={handleSubmit}
              className="md:w-3/6 w-4/6 inline-flex justify-center items-center space-x-2 border font-semibold rounded-full px-4 py-1 text-xs md:text-md lg:text-lg leading-6 border-slate-700 bg-slate-700 text-white hover:text-white hover:bg-slate-600 hover:border-slate-600 focus:ring focus:ring-slate-400 focus:ring-opacity-50 active:bg-slate-700 active:border-slate-700 dark:focus:ring-slate-400 dark:focus:ring-opacity-90 shadow-lg mb-2"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>

      <div className=" w-4/12 h-full flex-grow  bg-gradient-to-t from-slate-800 to-slate-400 text-center flex flex-col items-center justify-center text-white">
        <div className="w-9/12 gap-5 flex flex-col ">
          <h1 className="font-bold md:text-2xl text-xl ">Good to see You!</h1>
          <p className="md:text-sm text-[11px] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            modi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
