import RegisterForm from "@/components/forms/RegisterForm";
import { getUser } from "@/lib/actions/patient.actions";
import Image from "next/image";

const Register = async ({
  params,
}: {
  params?: Promise<{ userId?: string }>;
}) => {
  const resolvedParams = await params;
  if (!resolvedParams?.userId) {
    return;
  }
  const user = await getUser(resolvedParams?.userId);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <Image
            src="/assets/icons/logo-full.svg"
            width={1000}
            height={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />
          <RegisterForm user={user} />
          <p className="text-14-regular justify-items-end text-center text-dark-600 xl:text-left py-12">
            © 2024 CarePulse
          </p>
        </div>
      </section>
      <Image
        src="/assets/images/register-img.png"
        alt="patient"
        height={1000}
        width={1000}
        className="side-img max-w-[390px]"
        // className="side-img max-w-[50%]"
      />
    </div>
  );
};

export default Register;
