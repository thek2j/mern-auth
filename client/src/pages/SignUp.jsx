import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>

      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="bg-slate-100 rounded-lg p-3"
        ></input>
        <input
          type="email"
          placeholder="Email"
          id="username"
          className="bg-slate-100 rounded-lg p-3"
        ></input>
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-slate-100 rounded-lg p-3"
        ></input>
        <button className="bg-slate-600 uppercase p-3 rounded-lg text-white hover:opacity-95 disabled:opacity-80">
          Sign Up
        </button>
      </form>
      <div className="flex gap-2 mt-3">
        <p>Have an account?</p>
        <Link to="/sign-in">
          <span className="text-blue-700">Sign in</span>
        </Link>
      </div>
    </div>
  );
}
