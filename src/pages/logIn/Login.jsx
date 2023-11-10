import { Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmitForm = (data) => {};

  return (
    <form
      className="p-3 md:p-10 bg-white w-1/2 m-auto mt-24 "
      onSubmit={handleSubmit(onSubmitForm)}
    >
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
          {...register("email", { required: true })}
        />
        <input
          className="w-full p-3 pl-3 outline-none text-neutral-400 text-xs md:text-base"
          type="password"
          placeholder="Enter Your Password"
          required
          style={{ background: "#efefef" }}
          {...register("password", { required: true })}
        />

        <button
          type="submit"
          style={{ background: "#C87065", margin: "40px auto 0" }}
          className="text-white px-7 py-2 text-xs sm:text-sm md:text-base"
        >
          LOGIN
        </button>
        <p style={{ margin: "20px auto" }}>
          Already have an account ?!
          <a
            className="text-blue-700 font-bold cursor-pointer underline"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </a>
        </p>
      </Stack>
    </form>
  );
}
