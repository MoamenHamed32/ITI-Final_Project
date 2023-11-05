import { Stack } from "@mui/material";

export default function Login() {
  return (
    <form className="p-3 md:p-10 bg-white w-1/2 m-auto mt-24 ">
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="start"
        spacing={2}
      >
        <h1 className="text-xs sm:text-sm md:text-lg text-neutral-700 font-bold">
          REGISTERED CUSTOMERS
        </h1>
        <p className="text-xs md:text-base text-neutral-400">
          If you have an account with us, Please login!
        </p>
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
        <button
          type="submit"
          style={{ background: "#C87065", marginTop: "40px" }}
          className="text-white px-7 py-2 text-xs sm:text-sm md:text-base"
        >
          LOGIN
        </button>
      </Stack>
    </form>
  );
}
