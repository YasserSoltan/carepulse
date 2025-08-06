# Healthcare Management Platform

A lightweight appointment booking system for patients and administrators. Patients can register (without passwords) and book appointments, while admins manage schedules and send automated SMS notifications via Twilio.

## Features

### Patient Side
- **Passwordless signup**: Register with just name, email, and phone number.
- **Appointment booking**: Simple interface to book available slots.
- **No authentication needed**: Streamlined patient experience.

### Admin Side
- **Dashboard**: View/Create/Cancel appointments.
- **Automated SMS**: Twilio integration for real-time notifications.
- **Patient management**: View registered patients.

## Tech Stack

- **Frontend**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + shadcn/ui components
- **Backend**: Appwrite (Database, Functions)
- **SMS**: Twilio API
- **Deployment**: Vercel (Frontend) + Appwrite Cloud (Backend)