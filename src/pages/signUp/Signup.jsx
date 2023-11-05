import { Stack, Input, Button, Typography } from "@mui/material";
export default function Signup() {
  return (
    <form className="p-3 md:p-10 bg-white w-1/2 m-auto mt-24 ">
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="start"
        spacing={2}
      >
        <h1 className="text-xs sm:text-sm md:text-lg text-neutral-700 font-bold">
          NEW CUSTOMERS
        </h1>
        <p className="text-xs md:text-base text-neutral-400">
          If you have an account with us, Please login!
        </p>
        <input
          className="w-full p-3 pl-3 outline-none text-neutral-400 text-xs md:text-base"
          placeholder="Enter Your Name"
          required
          style={{ background: "#efefef" }}
        />
        <input
          className="w-full p-3 pl-3 outline-none text-neutral-400 text-xs md:text-base"
          placeholder="Enter Your Email"
          required
          style={{ background: "#efefef" }}
        />
        <input
          className="w-full p-3 pl-3 outline-none text-neutral-400 text-xs md:text-base"
          type="password"
          placeholder="Enter Your Password"
          required
          style={{ background: "#efefef" }}
        />
        <p>(OPTIONAL)</p>
        <div className="flex flex-col lg:flex-row gap-3">
          <input
            className="w-full p-3 pl-3 outline-none text-neutral-400 text-xs md:text-base"
            placeholder="Your Photo Link"
            style={{ background: "#efefef" }}
            type="text"
          />
          <input
            className="w-full p-3 pl-3 outline-none text-neutral-400 text-xs md:text-base"
            placeholder="Your Phone"
            style={{ background: "#efefef" }}
          />
          <input
            className="w-full p-3 pl-3 outline-none text-neutral-400 text-xs md:text-base"
            placeholder="Your Adress"
            style={{ background: "#efefef" }}
          />
        </div>
        <button
          type="submit"
          style={{ background: "#C87065", marginTop: "40px" }}
          className="text-white px-7 py-2 text-xs sm:text-sm md:text-base"
        >
          SIGNUP
        </button>
      </Stack>
    </form>
  );
}
