## 🚀 Issue Tracker Next.js Project

![Issue Tracker Image](/public/issue-tracker.png)


A modern, full-stack **Issue Tracking Application** built with the latest web technologies. This project serves as a comprehensive boilerplate and learning resource for developing robust, scalable applications using a powerful and popular stack.

-----

### ✨ Key Features

  * **Full-stack Architecture:** Seamless integration of frontend and backend within a single Next.js application.
  * **Intuitive UI:** Clean, responsive, and accessible user interface built with **Tailwind CSS** and **Radix UI** primitives.
  * **Real-time Data:** Leverages **Supabase** for a powerful, open-source backend (Database, Auth, and Storage) with real-time capabilities.
  * **Type-safe ORM:** Uses **Prisma** for elegant and efficient database access, ensuring type safety throughout the backend.
  * **Authentication & Authorization:** Secure user management and route protection.
  * **State Management:** Efficient and scalable data handling.
  * **Comprehensive Project Structure:** Organized codebase designed for maintainability and growth.

-----

### 🛠️ Technology Stack

This project combines best-in-class tools for a powerful development experience:

  * **Framework:** **Next.js** (React Framework)
  * **Styling:** **Tailwind CSS**
  * **UI Components:** **Radix UI** (Unstyled, accessible components)
  * **Backend/Database:** **Supabase**
  * **ORM:** **Prisma**
  * **Language:** **TypeScript**
  * **Deployment:** Vercel (recommended)

-----

### 📝 Getting Started

Follow these steps to get your local development environment set up and running.

#### Prerequisites

  * Node.js (LTS version recommended)
  * npm or Yarn
  * A Supabase Account (for database setup)

#### Installation

1.  **Clone the repository:**

    ```
    git clone [Your Repository URL]
    cd issue-tracker-nextjs
    ```

2.  **Install dependencies:**

    ```
    npm install
    # or
    yarn install
    ```

3.  **Set up Environment Variables:**

    Create a file named `.env.local` in the root directory and add your configuration (get these from your Supabase project settings):

    ```
    # Supabase Credentials
    NEXT_PUBLIC_SUPABASE_URL="[YOUR_SUPABASE_PROJECT_URL]"
    NEXT_PUBLIC_SUPABASE_ANON_KEY="[YOUR_SUPABASE_ANON_KEY]"

    # Prisma Database Connection (e.g., your Supabase Postgres connection string)
    DATABASE_URL="postgresql://[USER]:[PASSWORD]@[HOST]:[PORT]/[DATABASE]"
    ```

4.  **Database Migration (Prisma):**

    Apply the Prisma schema to your Supabase database:

    ```
    npx prisma migrate dev --name init
    ```

5.  **Run the Development Server:**

    ```
    npm run dev
    # or
    yarn dev
    ```

The application will now be running at `http://localhost:3000`.

-----

### 🤝 Contributing

Contributions are welcome! If you have suggestions, feature requests, or want to report a bug, please open an issue or submit a pull request.

-----

### 📄 License

This project is open-source and available under the [License Name] License. *(e.g., MIT License)*
```
Special Thanks to Programming with Mosh
