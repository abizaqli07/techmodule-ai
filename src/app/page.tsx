import Image from "next/image";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import Navbar from "./_components/navbar";
import { auth } from "~/server/auth";

const Home = async () => {
  const session = await auth();
  return (
    <div>
      {/* =========== Navbar ============ */}
      <Navbar session={session}/>

      <section className="min-h-[100vh] w-full overflow-x-hidden">
        <div className="flex min-h-[100vh] w-full flex-col md:flex-row-reverse">
          <div className="flex-1 bg-[#191D20]">
            <div className="relative bottom-0 h-[100vh]">
              <Image
                src={"/images/hero.png"}
                fill
                alt="Hero-Image"
                className="z-10 object-contain object-bottom"
              />
              <div className="absolute bottom-[350px] left-[50%] h-[100px] w-[300px] translate-x-[-100%] rounded-xl bg-gray-200"></div>
              <div className="absolute bottom-[100px] right-[50%] z-20 h-[150px] w-[350px] translate-x-[100%] rounded-xl bg-gray-200"></div>
            </div>
          </div>
          <div className="flex flex-1 justify-center p-4 md:justify-end xl:items-center">
            <div className="flex max-w-[650px] flex-col gap-6 py-8 text-center md:pt-24 md:text-left">
              <div className="text-4xl font-bold lg:text-6xl xl:text-7xl">
                Buat Modul Ajar <br />
                Professional <br /> Dengan 1 Klik
              </div>
              <div className="text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctusLorem ipsum dolor sit amet,
                consectetur adipiscing elit ut aliquam
              </div>
              <div className="flex items-center justify-center gap-6 md:justify-start">
                <div className="w-fit rounded-md bg-primary px-8 py-4 font-semibold text-white">
                  Hubungi Kami!
                </div>
                <div className="flex items-center gap-2">
                  <IoMdArrowDroprightCircle className="text-4xl text-primary" />
                  <div className="font-semibold underline underline-offset-2">
                    Tutorial
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
