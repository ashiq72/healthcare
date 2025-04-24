# 🏥 Healthcare Server Projects

A robust backend solution for a healthcare platform supporting real-time communication, secure data handling, and multi-role access.

---

## 🔧 Technologies Used

- **Backend Framework**: Node.js, Express.js  
- **Real-Time Communication**: WebRTC via [Agora.io](https://www.agora.io/)  
- **ORM**: Prisma  
- **Database**: PostgreSQL  
- **Frontend Framework**: Next.js  

---

## 👥 User Roles & Functionalities

- **Admin**  
  - Manage doctors, patients, reports, and platform settings

- **Doctors**  
  - Schedule appointments, manage patients, write prescriptions, and review reports

- **Patients**  
  - Book appointments, view prescriptions and reports, submit reviews

---

## 🗃️ Database Schema Overview

| Table Name             | Description                           |
|------------------------|---------------------------------------|
| `User`                 | Base table for all users              |
| `Admin`                | Admin-specific data                   |
| `Doctors`              | Doctor-specific profiles              |
| `Patients`             | Patient profiles and info             |
| `Schedule`             | General scheduling table              |
| `DoctorSchedule`       | Availability of doctors               |
| `Appointment`          | Appointment records                   |
| `MedicalReport`        | Patient diagnostic reports            |
| `PatientHealthData`    | Ongoing patient health metrics        |
| `Prescription`         | Medication and treatment plans        |
| `Payment`              | Transaction and billing information   |
| `Review`               | Patient feedback and ratings          |
| `Specialities`         | List of medical specializations       |
| `DoctorSpecialities`   | Mapping doctors to their specialties  |

---

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/ashiq2/healthcare-server.git
