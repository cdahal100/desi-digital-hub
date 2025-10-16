# Desi Digital Hub

A comprehensive SaaS platform for Nepali and Bhutanese businesses, combining modern digital tools with cultural preservation and community connection.

## 🚀 Features

### Four-Tier Business Model

1. **SaaS Starter ($20-$50/month)**
   - Business page builder with cultural templates
   - QR menu generator for restaurants
   - Basic CRM and customer management
   - Integrated payment processing
   - Mobile-responsive websites

2. **Managed Digital Setup ($500-$1500 one-time)**
   - Custom website design and development
   - SEO optimization and Google Business setup
   - Professional branding and logo design
   - Social media integration
   - Staff training and onboarding

3. **Automation & Growth ($1500-$5000 project)**
   - Inventory management system
   - Workflow automation
   - Accounting software integration
   - Advanced CRM with customer segmentation
   - Multi-location management

4. **Cultural Events Portal (Free + commission)**
   - Cultural event listings and calendar
   - Priest and religious service booking
   - Temple donation processing
   - Wedding and celebration vendor directory
   - Nepali/Hindu calendar integration

## 🏗️ Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS with Nepali cultural design system
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Payments**: Stripe for subscriptions and marketplace
- **Deployment**: Vercel (planned)

## 🎨 Cultural Design System

### Colors
- **Crimson Red**: Primary color from Nepal flag (`#dc2626`)
- **Himalayan Blue**: Deep blue from flag (`#003893`)
- **Saffron**: Cultural gold/yellow tones
- **Mountain Gray**: Neutral tones inspired by the Himalayas

### Features
- Nepali/English bilingual support
- Cultural calendar integration
- Traditional motifs and patterns
- Himalayan-inspired gradients

## 🛠️ Development Setup

### Prerequisites
- Node.js 20+
- PostgreSQL 15+
- Docker (for dev container)

### Quick Start

### Option 1: Using Dev Container (Recommended)

1. **Prerequisites:**
   - Install Docker Desktop
   - Install VS Code with the "Dev Containers" extension

2. **Open in Dev Container:**
   - Open this project in VS Code
   - Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac)
   - Type "Dev Containers: Reopen in Container"
   - Select the command and wait for the container to build

3. **The dev container will automatically:**
   - Install all dependencies
   - Set up PostgreSQL database
   - Start the development server at [http://localhost:3000](http://localhost:3000)

### Option 2: Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   Update the `.env` file with your database credentials and other configuration.

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Visit the application:**
   Open [http://localhost:3000](http://localhost:3000)

### Using Dev Container

For a consistent development environment, use the provided dev container:

1. Open in VS Code
2. Install the "Remote - Containers" extension
3. Click "Reopen in Container" when prompted
4. The container will automatically set up Node.js 20 and PostgreSQL 15

## 📁 Project Structure

```
desi-digital-hub/
├── .devcontainer/          # Dev container configuration
├── prisma/                 # Database schema and migrations
├── public/                 # Static assets
├── src/
│   ├── app/                # Next.js 14 app router
│   ├── components/         # Reusable UI components
│   │   ├── ui/             # Basic UI primitives
│   │   ├── business/       # Business-specific components
│   │   ├── cultural/       # Cultural-specific components
│   │   └── layout/         # Layout components
│   ├── lib/                # Utilities and configurations
│   ├── types/              # TypeScript type definitions
│   └── hooks/              # Custom React hooks
├── tests/                  # Test files
└── docs/                   # Documentation
```

## 🧪 Testing

```bash
# Unit and integration tests
npm test

# Watch mode
npm run test:watch

# End-to-end tests
npm run test:e2e
```

## 📊 Database

The application uses PostgreSQL with Prisma ORM. Key models include:

- **User**: Authentication and profiles
- **Business**: Business listings and management
- **Subscription**: Billing and feature management
- **Event**: Cultural events and celebrations
- **ServiceBooking**: Service provider marketplace
- **Review**: Business reviews and ratings

### Database Commands

```bash
# Generate Prisma client
npm run db:generate

# Push schema changes
npm run db:push

# Create and run migrations
npm run db:migrate

# Open Prisma Studio
npm run db:studio
```

## 🌍 Cultural Features

### Nepali Calendar Integration
- Festival dates and religious observances
- Cultural event scheduling
- Traditional greeting system

### Multi-language Support
- English/Nepali language toggle
- Devanagari script support
- Cultural translation context

### Business Categories
- Restaurants (with spice level indicators)
- Cultural organizations
- Religious organizations
- Professional services
- Event services

## 🚀 Deployment

The application is designed to deploy on Vercel for optimal Next.js performance:

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📝 Development Guidelines

### Code Style
- TypeScript for type safety
- Tailwind CSS for styling
- ESLint and Prettier for code formatting
- Component-driven development

### Cultural Sensitivity
- All cultural representations should be reviewed
- Respect for traditional customs and practices
- Inclusive design for global diaspora

### Performance
- Target <3 second load times
- Mobile-first responsive design
- Image optimization
- Efficient database queries

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes with proper tests
4. Ensure cultural sensitivity in any cultural features
5. Submit a pull request

## 📄 License

[License information to be added]

## 🙏 Acknowledgments

- Nepali and Bhutanese communities worldwide
- Cultural consultants and advisors
- Open source community

---

**Built with ❤️ for the Nepali and Bhutanese diaspora**
