import AppointmentForm from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";
import Image from "next/image";

export default async function NewAppointment({
  params,
}: {
  params?: Promise<{ userId?: string }>;
}) {
  const resolvedParams = await params;
  if (!resolvedParams?.userId) {
    return;
  }
  const patient = await getPatient(resolvedParams.userId);
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Image
            src="/assets/icons/logo-full.svg"
            width={1000}
            height={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />
          <AppointmentForm
            userId={resolvedParams.userId}
            patientId={patient.$id}
            type="create"
          />
          <p className="justify-items-end text-dark-600 xl:text-left mt-10 py-12">
            © 2024 CarePulse
          </p>
        </div>
      </section>
      <Image
        src="/assets/images/appointment-img.png"
        alt="appointment"
        height={1000}
        width={1000}
        className="side-img max-w-[390px] bg-bottom"
      />
    </div>
  );
}
