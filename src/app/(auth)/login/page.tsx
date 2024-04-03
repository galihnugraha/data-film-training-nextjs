import IMAGES from "@assets/images";
import FormLogin from "@components/moleculs/FormLogin";
import Image from "next/image";

export const metadata = {
  title: "Login",
};

export default function Login() {
  return (
    <div>
      {/* WEB VIEW */}
      <div className="max-md:hidden flex h-screen items-center justify-center space-x-40 overflow-hidden">
        <div className="grow">
          <div className="flex w-full justify-center">
            <div className="max-mx-10 w-2/3">             
              <FormLogin/>
            </div>
          </div>
        </div>
        <div className="flex h-[800px] w-1/2 items-center justify-center rounded-l-full bg-[#789461]">
          <Image src={IMAGES.logo} alt={"Logo"} className="w-48" />
        </div>
      </div>

      {/* MOBILE VIEW */}
      <div className="lg:hidden">
        <div className="mt-[-1100px] flex min-h-screen w-screen flex-col items-center justify-center overflow-x-hidden">
          <div className="min-w-screen flex h-[1265px] w-[1265px] items-end justify-center rounded-b-full bg-[#789461] p-10">
            <Image src={IMAGES.logo} alt={"Logo"} className="w-48" />
          </div>
          <div className="mb-10 mt-14 w-full px-10">
            <FormLogin/>
          </div>
        </div>
      </div>

    </div>
  )
}
