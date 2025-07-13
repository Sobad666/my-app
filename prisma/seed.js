const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  // 1. Create Admins
  await prisma.admin.createMany({
    data: [
      {
        name: 'Admin One',
        email: 'admin1@example.com',
        password: 'hashed_password1',
        createdAt: new Date(),
      },
      {
        name: 'Admin Two',
        email: 'admin2@example.com',
        password: 'hashed_password2',
        createdAt: new Date(),
      }
    ]
  })

  // 2. Create Users
  const student = await prisma.user.create({
    data: {
      name: 'Alice Student',
      email: 'alice@student.com',
      password: 'hashed_pw1',
      role: 'student',
      createdAt: new Date(),
      studentProfile: {
        create: {
          education: 'Bachelor in CS',
          skills: 'HTML, CSS, JS',
          language: 'English, Burmese',
          interests: 'Coding, Reading',
          resumeUrl: 'http://example.com/resume1.pdf'
        }
      }
    }
  })

  const teacher = await prisma.user.create({
    data: {
      name: 'Bob Teacher',
      email: 'bob@teacher.com',
      password: 'hashed_pw2',
      role: 'teacher',
      createdAt: new Date(),
      teacherProfile: {
        create: {}
      }
    }
  })

  const company = await prisma.user.create({
    data: {
      name: 'Charlie Company',
      email: 'charlie@company.com',
      password: 'hashed_pw3',
      role: 'company',
      createdAt: new Date(),
      companyProfile: {
        create: {
          companyName: 'Tech Innovators Ltd',
          description: 'We provide innovative internship opportunities',
          location: 'Yangon'
        }
      }
    }
  })

  // 3. Create Job Post
  const jobPost = await prisma.jobPost.create({
    data: {
      companyId: company.companyProfile.id,
      jobTitle: 'Frontend Intern',
      modeOfWork: 'internship',
      jobDescription: 'Work on real-world frontend tasks',
      locationCity: 'Yangon',
      locationState: 'Yangon',
      requiredSkills: 'HTML, CSS, JS',
      requiredLanguage: 'English',
      stipend: '100,000 MMK',
      duration: '3 months',
      applicationDeadline: new Date('2025-08-01'),
      numberOfOpenings: 2,
      contactName: 'Jane HR',
      contactEmail: 'hr@techinnovators.com',
      contactPhone: '0987654321',
      createdAt: new Date(),
      status: 'approved'
    }
  })

  // 4. Create Application
  await prisma.application.create({
    data: {
      studentId: student.studentProfile.id,
      jobId: jobPost.id,
      status: 'pending',
      appliedAt: new Date()
    }
  })

  // 5. Create Notifications
  await prisma.notification.createMany({
    data: [
      {
        userId: student.id,
        message: 'Your application has been submitted.',
        isRead: false,
        createdAt: new Date()
      },
      {
        userId: company.id,
        message: 'A new student applied to your job.',
        isRead: false,
        createdAt: new Date()
      }
    ]
  })

  console.log('✅ Seeding complete')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
