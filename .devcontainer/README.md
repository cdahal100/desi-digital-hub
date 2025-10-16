# Dev Container Setup

This dev container provides a complete development environment for the Desi Digital Hub project.

## What's Included

- Node.js 20 with npm
- Essential VS Code extensions for Next.js development
- Pre-configured environment variables
- PostgreSQL database (runs separately)

## Getting Started

1. **Start the Database First:**
   ```bash
   docker-compose -f docker-compose.dev.yml up -d postgres
   ```

2. **Open in VS Code:**
   - Make sure you have Docker and VS Code with the Dev Containers extension installed
   - Open this folder in VS Code
   - When prompted, click "Reopen in Container" or use the command palette: `Dev Containers: Reopen in Container`

3. **Wait for Setup:**
   - The container will build and start automatically
   - Dependencies will be installed via the postCreateCommand

4. **Configure Environment:**
   - The `.env.example` will be automatically copied to `.env`
   - Update any necessary values in `.env`

5. **Setup Database:**
   ```bash
   npm run db:generate
   npm run db:push
   ```

6. **Start Development:**
   ```bash
   npm run dev
   ```

## Available Commands

- `npm run dev` - Start the development server
- `npm run build` - Build the application  
- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push schema changes to database
- `npm run db:migrate` - Run database migrations
- `npm run db:studio` - Open Prisma Studio
- `npm run lint` - Run ESLint
- `npm run test` - Run tests

## Database

The PostgreSQL database runs separately on port 5433. The dev container connects to it using `host.docker.internal:5433`.

## Troubleshooting

If you encounter issues:

1. **Rebuild the container:** `Dev Containers: Rebuild Container`
2. **Check that Docker is running**
3. **Ensure the database is started:** `docker-compose -f docker-compose.dev.yml up -d postgres`
4. **Check environment variables in `.env`**

## WSL/Rancher Desktop Issues

If you get permission errors, this simplified image-based approach should resolve WSL mount issues with Rancher Desktop.
