# GPA Staff Forms

A secure, modern web application for school staff to submit and manage forms with Google Workspace integration and role-based access control.

## Features

### 🔐 Security & Authentication
- **Google OAuth Integration** - Secure sign-in with school Google accounts
- **Domain Restriction** - Only allows users from your school's Google Workspace domain
- **Organizational Unit (OU) Restriction** - Limits access to users in the `/Staff/` OU
- **Role-Based Access Control** - Different permissions for staff, admins, and super admins

### 📋 Form Management
- **Dynamic Form Builder** - Create forms with various field types (text, email, select, etc.)
- **Form Responses** - Track and view all form submissions
- **User Submissions** - Staff can view their own form submissions
- **Admin Controls** - Administrators can manage forms and view all responses

### 👥 User Management
- **Role Assignment** - Admins can assign administrator roles to other users
- **User Directory** - View all registered users and their roles
- **Active/Inactive Users** - Manage user access status

### 🎨 Modern UI/UX
- **Responsive Design** - Works on desktop, tablet, and mobile devices
- **Clean Interface** - Modern, intuitive design with Tailwind CSS
- **Real-time Notifications** - Toast notifications for user feedback
- **Loading States** - Smooth user experience with loading indicators

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Lucide React Icons
- **Authentication**: NextAuth.js with Google OAuth
- **Database**: PostgreSQL with Prisma ORM
- **Form Handling**: React Hook Form with Zod validation
- **Deployment**: Ready for Vercel, Railway, or any Node.js hosting

## Quick Start

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL database
- Google Workspace account with Admin SDK access
- Google OAuth credentials

### 1. Clone and Install

```bash
git clone <repository-url>
cd gpa-form-site
npm install
```

### 2. Environment Setup

Copy the example environment file and configure your variables:

```bash
cp env.example .env.local
```

Edit `.env.local` with your configuration:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/gpa_forms_db"

# NextAuth.js
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# Google OAuth
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Google Workspace Domain
GOOGLE_WORKSPACE_DOMAIN="your-school-domain.com"
GOOGLE_STAFF_OU_PATH="/Staff"
```

### 3. Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (development)
   - `https://your-domain.com/api/auth/callback/google` (production)

### 4. Database Setup

```bash
# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma db push

# (Optional) View database in Prisma Studio
npx prisma studio
```

### 5. Start Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see your application!

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── auth/              # Authentication components
│   ├── dashboard/         # Dashboard components
│   ├── forms/             # Form-related components
│   └── ui/                # Reusable UI components
├── lib/                   # Utility libraries
│   ├── auth.ts            # NextAuth configuration
│   └── prisma.ts          # Prisma client
└── types/                 # TypeScript type definitions
```

## User Roles

### Staff
- View available forms
- Submit form responses
- View own submissions
- Basic profile management

### Admin
- All Staff permissions
- Create and edit forms
- View all form responses
- Manage user roles (assign admin to others)
- View user directory

### Super Admin
- All Admin permissions
- Manage all user roles
- System configuration
- Full administrative access

## Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms

The application can be deployed to any Node.js hosting platform:
- Railway
- Heroku
- DigitalOcean App Platform
- AWS Elastic Beanstalk

## Security Considerations

- All authentication is handled through Google OAuth
- Domain and OU restrictions prevent unauthorized access
- Database queries are protected against SQL injection via Prisma
- CSRF protection enabled via NextAuth.js
- Secure headers configured in `next.config.js`
- Environment variables for sensitive configuration

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support or questions, please contact the development team or create an issue in the repository. 