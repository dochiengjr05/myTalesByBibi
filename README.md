# Tales by Bibi - Children's Storybook Website

A beautiful, colorful website for Tales by Bibi - an African children's storybook company featuring "Hoofbeats & Tails: The Story of Three Wild Siblings."

## � About the Book

**Hoofbeats & Tails: The Story of Three Wild Siblings** tells the enchanting story of how zebras, donkeys, and horses came to have different destinies. Following three spirited siblings - Zebra, Donkey, and Horse - as they journey through life learning about courage, friendship, and the choices that shape who we become.

## 🎨 Features

- **Modern Design**: Built with React 19, TypeScript, and Tailwind CSS 3.4
- **Beautiful Color Palette**: Inspired by the African savannah from the book cover
  - Sky Blue (#7DCBE6) - Bright African skies
  - Grass Green (#A8D86E) - Lush savannah
  - Sunset Orange (#FFA500) - Warm African sunsets
  - Earth Brown (#8B6F47) - Rich earth tones
  - Sand Beige (#F4E4C1) - Soft sand colors

- **Responsive Pages**:
  - **Home**: Hero section with book preview and character introductions
  - **About**: Story of Tales by Bibi and the tradition of Bibi (grandmother storytelling)
  - **Authors**: Meet Esther and Mercy Ondiek, two African sisters bringing African stories to life
  - **Order**: Pre-order form and direct Amazon purchase link

- **Icons**: Lucide React icons throughout
- **Backend**: Express.js API with SQLite 3 database for admin operations
- **Fully Responsive**: Beautiful on desktop, tablet, and mobile devices

## 📁 Project Structure

```
talesbybibi/
├── public/
│   └── images/          # Image assets
│       ├── logo.png     # Company logo (✓ added)
│       ├── zebra.png    # Zebra character (✓ added)
│       ├── donkey.png   # Donkey character (✓ added)
│       └── horse.png    # Horse character (✓ added)
├── src/
│   ├── components/
│   │   ├── Navbar.tsx   # Navigation bar with logo
│   │   └── Footer.tsx   # Footer with social links
│   ├── pages/
│   │   ├── Home.tsx     # Landing page with hero section
│   │   ├── About.tsx    # About Tales by Bibi
│   │   ├── Authors.tsx  # Authors bio and photo
│   │   └── Order.tsx    # Order form & Amazon link
│   ├── App.tsx          # Main app with React Router
│   ├── main.tsx         # App entry point
│   └── index.css        # Tailwind CSS imports
├── server/
│   ├── database.ts      # SQLite database setup
│   └── server.ts        # Express API server
├── tailwind.config.js   # Tailwind configuration with custom colors
├── vite.config.ts       # Vite configuration
└── package.json         # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

### Running the Application

#### Development Mode

Run both frontend and backend together:

```bash
npm run dev:all
```

Or run them separately:

**Frontend only** (Vite dev server):

```bash
npm run dev
```

Frontend will be available at: <http://localhost:8080>

**Backend only** (Express API):

```bash
npm run dev:server
```

API will be available at: <http://localhost:8081>

### Production Build

```bash
npm run build
npm run preview
```

## 🖼️ Images Included

The following images have been added to the `public/images/` folder:

- ✓ **logo.png** - Tales by Bibi logo
- ✓ **zebra.png** - Zebra character image
- ✓ **donkey.png** - Donkey character image
- ✓ **horse.png** - Horse character image

All images are integrated into the website pages.

## 🔗 Amazon Link Setup

Update the Amazon link in [`src/pages/Order.tsx`](src/pages/Order.tsx):

Replace `YOUR_ASIN_HERE` with your actual Amazon ASIN around line 98.

## 💾 Database

The SQLite database (`talesbybibi.db`) is automatically created in the `server/` folder with these tables:

- **orders** - Customer pre-orders
- **subscribers** - Newsletter subscribers
- **contact_messages** - Contact form submissions
- **admin_users** - Admin user accounts

### API Endpoints

#### Orders

- `POST /api/orders` - Create new order
- `GET /api/orders` - Get all orders
- `GET /api/orders/:id` - Get specific order
- `PATCH /api/orders/:id/status` - Update order status
- `DELETE /api/orders/:id` - Delete order

#### Subscribers

- `POST /api/subscribe` - Add newsletter subscriber
- `GET /api/subscribers` - Get all subscribers

#### Contact

- `POST /api/contact` - Submit contact message
- `GET /api/messages` - Get all messages
- `PATCH /api/messages/:id/read` - Mark message as read

## 🎨 Color Palette

The website uses colors extracted from your book cover:

```css
sky: #7DCBE6 (light: #A8E0F0, dark: #5BA9C7)
grass: #A8D86E (light: #C5E89D, dark: #8BC24A)
sand: #F4E4C1 (light: #FFF8E7, dark: #D4C4A1)
earth: #8B6F47 (light: #A88A65, dark: #6B5237)
sunset: #FFA500 (light: #FFB733, dark: #CC8400)
```

## 📝 Customization

### Update Text Content

All text content can be edited directly in the component files:

- [`src/pages/Home.tsx`](src/pages/Home.tsx) - Home page content
- [`src/pages/About.tsx`](src/pages/About.tsx) - About page content
- [`src/pages/Authors.tsx`](src/pages/Authors.tsx) - Authors page content
- [`src/pages/Order.tsx`](src/pages/Order.tsx) - Order page content

### Modify Colors

Edit [`tailwind.config.js`](tailwind.config.js) to change the color scheme.

### Add More Pages

1. Create a new file in `src/pages/`
2. Add route in [`src/App.tsx`](src/App.tsx)
3. Add navigation link in [`src/components/Navbar.tsx`](src/components/Navbar.tsx)

## 🛠️ Technologies Used

- **Frontend**:
  - React 19
  - TypeScript
  - Vite
  - Tailwind CSS 3.4
  - React Router v6
  - Lucide React (icons)

- **Backend**:
  - Node.js
  - Express.js
  - SQLite 3 (better-sqlite3)
  - TypeScript

## 📱 Responsive Design

The website is fully responsive and works beautifully on:

- Desktop computers
- Tablets
- Mobile phones

## 🌟 About "Bibi"

In Swahili, "Bibi" means grandmother. In African folk tales and myths, stories were traditionally told by grandmothers around the fireplace, passing down wisdom, culture, and heritage through generations.

## 📧 Contact

For questions or support, update the contact information in [`src/components/Footer.tsx`](src/components/Footer.tsx).

## 📄 License

Copyright © 2026 Tales by Bibi. All rights reserved.

---

Made with ❤️ for children everywhere
