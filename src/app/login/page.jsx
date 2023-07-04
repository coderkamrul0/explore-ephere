import Link from "next/link";

const page = () => {
  return (
    <div>
      <div className="max-w-3xl py-12 mx-auto bg-gray-100 rounded-lg my-24">
        <h3 className="text-3xl  text-center font-semibold">Login</h3>

        <div className="block rounded-lg p-6 w-10/12 mx-auto ">
          <form>
            {/* Email Input */}
            <div className="relative mb-6">
              <label className="">Email</label>
              <input
                type="email"
                className="block border   min-h-[auto] w-full rounded-md  px-3 py-[0.7rem] "
                id="email"
              />
            </div>

            {/* Password Input */}
            <div className="relative mb-6">
              <label className="">Password</label>
              <input
                type="password"
                className="block border   min-h-[auto] w-full rounded-md  px-3 py-[0.7rem] "
                id="password"
              />
            </div>
            <div className="text-center">
              <button
                className="bg-green-500 md:mb-5  hover:bg-green-700 text-white font-bold py-4 px-5 rounded"
                type="submit"
              >
                Sign in
              </button>
              <p className="md:mt-0 mt-4">
                Do not have an account
                <Link className="text-green-500" href="/registration">
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
