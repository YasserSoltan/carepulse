import { Button } from "@/components/ui/button";
import { Doctors } from "@/constants";
import { getAppointment } from "@/lib/actions/appointment.actions";
import { formatDateTime } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Success = async ({
  params,
  searchParams,
}: {
  params?: Promise<{ userId?: string }>;
  searchParams: Promise<{ appointmentId: string }>;
}) => {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  const appointment = await getAppointment(resolvedSearchParams?.appointmentId);

  const doctor = Doctors.find(
    (doc) => doc.name === appointment.primaryPhysician
  );
  return (
    <div className="flex h-screen max-h-screen px-[5%]">
      <div className="success-img">
        <Link href="/">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="logo"
            className="h-10 w-fit"
          />
        </Link>
        <section className="flex flex-col items-center">
          <Image
            src="/assets/gifs/success.gif"
            height={300}
            width={280}
            alt="success"
            unoptimized
          />
          <h2 className="text-32-bold md:text-36-bold mb-6 max-w-[600px] text-center">
            Your <span className="text-green-500">appointment request</span> has
            been successfully submitted!
          </h2>
          <p>We&apos;ll be in touch shortly to confirm.</p>
        </section>
        <section className="request-details">
          <p>Requested appointment details:</p>
          <div className="flex items-center gap-3">
            {doctor && (
              <Image
                src={doctor.image!}
                alt="doctor"
                width={100}
                height={100}
                className="size-6"
              />
            )}
            <p className="whitespace-nowrap">{doctor?.name}</p>
          </div>
          <div className="flex gap-2">
            <Image
              src="/assets/icons/calendar.svg"
              width={24}
              height={24}
              alt="calendar"
            />
            <p>{formatDateTime(appointment.schedule).dateTime}</p>
          </div>
        </section>
        <Button className="shad-primary-btn" asChild>
          <Link href={`/patients/${resolvedParams?.userId}/new-appointment`}>
            New Appointment
          </Link>
        </Button>
        <p className="text-14-regular justify-items-end text-center text-dark-600 xl:text-left">
          © 2024 CarePulse
        </p>
      </div>
    </div>
  );
};

export default Success;
