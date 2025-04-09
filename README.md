# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/e9bdc191-6d01-477b-87be-49ba7a20b29a

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/e9bdc191-6d01-477b-87be-49ba7a20b29a) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with .

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### Deploy with Lovable

Simply open [Lovable](https://lovable.dev/projects/e9bdc191-6d01-477b-87be-49ba7a20b29a) and click on Share -> Publish.

### Deploy with Netlify

This project includes Netlify configuration files for easy deployment. To deploy to Netlify:

1. **Create a Netlify account** at [netlify.com](https://www.netlify.com/) if you don't have one

2. **Connect your GitHub repository**:
   - Log in to Netlify
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub" as your Git provider
   - Authenticate with GitHub and select this repository

3. **Configure build settings** (these should be pre-filled from the netlify.toml file):
   - Build command: `npm run build`
   - Publish directory: `dist`

4. **Add environment variables**:
   - Go to Site settings → Environment variables
   - Add the following:
     ```
     VITE_SUPABASE_URL=https://hndhiscjlwbsykjaqupq.supabase.co
     VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhuZGhpc2NqbHdic3lramFxdXBxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM3NjgyMDQsImV4cCI6MjA1OTM0NDIwNH0.9qXsvT2OBFidoM6XXlirxYosXlnDHyffFpMfKcuncHQ
     ```

5. **Deploy the site**:
   - Click "Deploy site"
   - Netlify will build and deploy your application
   - Once complete, you'll get a URL like `your-site-name.netlify.app`

## I want to use a custom domain - is that possible?

With Netlify, you can easily set up a custom domain:

1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow the instructions to connect your domain

For more details, visit [Netlify's custom domain documentation](https://docs.netlify.com/domains-https/custom-domains/).
