import Database from 'better-sqlite3';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize database
const db = new Database(join(__dirname, 'talesbybibi.db'));

// Enable foreign keys
db.pragma('foreign_keys = ON');

// Create tables
function initializeDatabase() {
  // Orders table
  db.exec(`
    CREATE TABLE IF NOT EXISTS orders (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      address TEXT NOT NULL,
      city TEXT NOT NULL,
      country TEXT NOT NULL,
      quantity INTEGER NOT NULL DEFAULT 1,
      status TEXT DEFAULT 'pending',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Newsletter subscribers table
  db.exec(`
    CREATE TABLE IF NOT EXISTS subscribers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      name TEXT,
      subscribed_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      active INTEGER DEFAULT 1
    )
  `);

  // Contact messages table
  db.exec(`
    CREATE TABLE IF NOT EXISTS contact_messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      subject TEXT,
      message TEXT NOT NULL,
      read INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Admin users table
  db.exec(`
    CREATE TABLE IF NOT EXISTS admin_users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      role TEXT DEFAULT 'admin',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      last_login DATETIME
    )
  `);

  console.log('Database tables initialized successfully');
}

// Order management functions
export const orderService = {
  createOrder: (orderData: {
    name: string;
    email: string;
    phone?: string;
    address: string;
    city: string;
    country: string;
    quantity: number;
  }) => {
    const stmt = db.prepare(`
      INSERT INTO orders (name, email, phone, address, city, country, quantity)
      VALUES (@name, @email, @phone, @address, @city, @country, @quantity)
    `);
    return stmt.run(orderData);
  },

  getAllOrders: () => {
    const stmt = db.prepare('SELECT * FROM orders ORDER BY created_at DESC');
    return stmt.all();
  },

  getOrderById: (id: number) => {
    const stmt = db.prepare('SELECT * FROM orders WHERE id = ?');
    return stmt.get(id);
  },

  updateOrderStatus: (id: number, status: string) => {
    const stmt = db.prepare(`
      UPDATE orders 
      SET status = ?, updated_at = CURRENT_TIMESTAMP 
      WHERE id = ?
    `);
    return stmt.run(status, id);
  },

  deleteOrder: (id: number) => {
    const stmt = db.prepare('DELETE FROM orders WHERE id = ?');
    return stmt.run(id);
  }
};

// Subscriber management functions
export const subscriberService = {
  addSubscriber: (email: string, name?: string) => {
    const stmt = db.prepare(`
      INSERT INTO subscribers (email, name)
      VALUES (?, ?)
    `);
    return stmt.run(email, name);
  },

  getAllSubscribers: () => {
    const stmt = db.prepare('SELECT * FROM subscribers WHERE active = 1 ORDER BY subscribed_at DESC');
    return stmt.all();
  },

  unsubscribe: (email: string) => {
    const stmt = db.prepare('UPDATE subscribers SET active = 0 WHERE email = ?');
    return stmt.run(email);
  }
};

// Contact message functions
export const contactService = {
  createMessage: (messageData: {
    name: string;
    email: string;
    subject?: string;
    message: string;
  }) => {
    const stmt = db.prepare(`
      INSERT INTO contact_messages (name, email, subject, message)
      VALUES (@name, @email, @subject, @message)
    `);
    return stmt.run(messageData);
  },

  getAllMessages: () => {
    const stmt = db.prepare('SELECT * FROM contact_messages ORDER BY created_at DESC');
    return stmt.all();
  },

  markAsRead: (id: number) => {
    const stmt = db.prepare('UPDATE contact_messages SET read = 1 WHERE id = ?');
    return stmt.run(id);
  },

  deleteMessage: (id: number) => {
    const stmt = db.prepare('DELETE FROM contact_messages WHERE id = ?');
    return stmt.run(id);
  }
};

// Initialize the database when this module is imported
initializeDatabase();

export default db;
