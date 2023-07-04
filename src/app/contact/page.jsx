const page = () => {
  return (
    <div>
      <div>
        <div>
          <div className="">
            <section className="background-radial-gradient mb-12 text-center lg:text-left">
              <div className="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] bg-[url('https://images.pexels.com/photos/33153/raisting-sattelit-reception-signal.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] h-[500px]">
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
                  <div className="flex h-full items-center justify-center">
                    <div className="max-w-[800px] px-6 py-6 text-center text-white md:py-0 md:px-12">
                      <h2 className="mb-12 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                        Contact Us
                        <br />
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="max-w-5xl mx-auto mb-20">
          <div className="flex justify-center">
            <button className="text-center py-3  px-6 rounded-lg mb-4 text-white bg-green-500">
              Contact Us
            </button>
          </div>
          <h2 className="text-center text-3xl font-bold">
            Ready to Get our best Services! <br />
            Feel free to contact with us
          </h2>
          <div className="grid gap-2 md:grid-cols-3 mt-8">
            <div className="bg-gray-200 h-[19rem] rounded-xl  mx-auto w-80 text-center">
              <img
                className="h-[8rem] my-5 mx-auto"
                src=" https://i.ibb.co/mFcXgHr/lcoation.png"
                alt=""
              />
              <h3 className="my-3 font-bold text-2xl">Office Location</h3>
              <p className="mb-2">Awal Tower, Banani</p>
              <p>Bangladesh</p>
            </div>
            <div className="bg-gray-200 h-[19rem] rounded-xl  mx-auto w-80 text-center">
              <img
                className="h-[8rem] my-5 mx-auto"
                src=" https://i.ibb.co/D9C0S9j/email.png"
                alt=""
              />
              <h3 className="my-3 font-bold text-2xl">Email Address</h3>
              <p className="mb-2">phero@gmail.com</p>
              <p>phero2@gmail.com</p>
            </div>
            <div className="bg-gray-200 h-[19rem] rounded-xl  mx-auto w-80 text-center">
              <img
                className="h-[8rem] my-5 mx-auto"
                src="https://i.ibb.co/xXK69PT/contact.png"
                alt=""
              />
              <h3 className="my-3 font-bold text-2xl">HotLine</h3>
              <p className="mb-2">+8801xxxxxx</p>
              <p>+8801xxxxxx</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
