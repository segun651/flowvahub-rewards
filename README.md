
# FlowVaHub Rewards

A rewards management application built with React, TypeScript, and Vite, integrated with Supabase for backend services.

## Features

- **Earn Points**: Track daily streaks, view point balance, and discover earning opportunities
- **Refer Friends**: Share referral links to earn bonus points
- **Rewards Journey**: Visualize your progress toward rewards
- **Redeem Rewards**: Browse and redeem available rewards
- **Responsive Design**: Sidebar navigation with tabbed interface

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Backend**: Supabase
- **Styling**: CSS
- **Linting**: ESLint

## Setup Instructions

### Prerequisites
- Node.js 16+ and npm

### Installation

1. **Clone the repository**
  ```bash
  git clone <repository-url>
  cd flowvahub-rewards
  ```

2. **Install dependencies**
  ```bash
  npm install
  ```

3. **Configure environment variables**
  - Copy `.env.local` and add your Supabase credentials:
    ```
    VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_key
    ```

4. **Start development server**
  ```bash
  npm run dev
  ```

5. **Build for production**
  ```bash
  npm run build
  ```

## Project Structure

- `src/components/` - Reusable UI components
- `src/pages/` - Page-level components
- `src/lib/` - Supabase client configuration
- `public/` - Static assets

## Key Assumptions & Trade-offs
        
- **Supabase Authentication**:Created a mini signup page for user authentication
- **CSS-based Styling**: Uses Tailwind Css
- **Component Colocation**: Assets and related files are co-located with components for maintainability
- **Logic** : Focused on Earn Points and redeem rewards logic using supabse database as my database and ensuring minimal functionality of those features
