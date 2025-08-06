import { DataTable } from "@/components/table/DataTable";
import StatCard from "@/components/StatCard";
import { getRecentAppointments } from "@/lib/actions/appointment.actions";
import Image from "next/image";
import Link from "next/link";
import { columns } from "@/components/table/Columns";

const Admin = async () => {
  const appointments = await getRecentAppointments();
  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      <header className="admin-header">
        <Link className="cursor-pointer" href="/">
          <Image
            src="/assets/icons/logo-full.svg"
            height={32}
            width={162}
            alt="logo"
            className="h-8 w-fit"
          />
        </Link>
        <p className="text-16-semibold">Admin Dashboard</p>
      </header>
      <main className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="text-32-bold md:text-36-bold">Welcome 👋</h1>
          <p className="text-dark-700">
            Start the day with managing new appointments
          </p>
        </section>
        <section className="admin-stat">
          <StatCard
            type="appointments"
            count={appointments.scheduledCount}
            icon="/assets/icons/appointments.svg"
            label="Scheduled appointments"
          />
          <StatCard
            type="pending"
            count={appointments.pendingCount}
            icon="/assets/icons/pending.svg"
            label="Pending appointments"
          />
          <StatCard
            type="cancelled"
            count={appointments.cancelledCount}
            icon="/assets/icons/cancelled.svg"
            label="Cancelled appointments"
          />
        </section>
        <DataTable columns={columns} data={appointments.documents} />
      </main>
    </div>
  );
};

export default Admin;
