import express from 'express';
import cors from 'cors';
import { orderService, subscriberService, contactService } from "./database.js";

const app = express();
const PORT = process.env.PORT || 8081;

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    status: "ok",
    message: "Tales by Bibi API is running 🚀"
  });
});


// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Tales by Bibi API is running' });
});

// Order endpoints
app.post('/api/orders', (req, res) => {
  try {
    const result = orderService.createOrder(req.body);
    res.status(201).json({ 
      success: true, 
      orderId: result.lastInsertRowid,
      message: 'Order created successfully' 
    });
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to create order' 
    });
  }
});

app.get('/api/orders', (req, res) => {
  try {
    const orders = orderService.getAllOrders();
    res.json({ success: true, orders });
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to fetch orders' 
    });
  }
});

app.get('/api/orders/:id', (req, res) => {
  try {
    const order = orderService.getOrderById(parseInt(req.params.id));
    if (order) {
      res.json({ success: true, order });
    } else {
      res.status(404).json({ 
        success: false, 
        message: 'Order not found' 
      });
    }
  } catch (error) {
    console.error('Error fetching order:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to fetch order' 
    });
  }
});

app.patch('/api/orders/:id/status', (req, res) => {
  try {
    const { status } = req.body;
    orderService.updateOrderStatus(parseInt(req.params.id), status);
    res.json({ 
      success: true, 
      message: 'Order status updated successfully' 
    });
  } catch (error) {
    console.error('Error updating order:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to update order status' 
    });
  }
});

app.delete('/api/orders/:id', (req, res) => {
  try {
    orderService.deleteOrder(parseInt(req.params.id));
    res.json({ 
      success: true, 
      message: 'Order deleted successfully' 
    });
  } catch (error) {
    console.error('Error deleting order:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to delete order' 
    });
  }
});

// Subscriber endpoints
app.post('/api/subscribe', (req, res) => {
  try {
    const { email, name } = req.body;
    subscriberService.addSubscriber(email, name);
    res.status(201).json({ 
      success: true, 
      message: 'Successfully subscribed to newsletter' 
    });
  } catch (error: any) {
    if (error.code === 'SQLITE_CONSTRAINT_UNIQUE') {
      res.status(400).json({ 
        success: false, 
        message: 'Email already subscribed' 
      });
    } else {
      console.error('Error adding subscriber:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Failed to subscribe' 
      });
    }
  }
});

app.get('/api/subscribers', (req, res) => {
  try {
    const subscribers = subscriberService.getAllSubscribers();
    res.json({ success: true, subscribers });
  } catch (error) {
    console.error('Error fetching subscribers:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to fetch subscribers' 
    });
  }
});

// Contact message endpoints
app.post('/api/contact', (req, res) => {
  try {
    const result = contactService.createMessage(req.body);
    res.status(201).json({ 
      success: true, 
      messageId: result.lastInsertRowid,
      message: 'Message sent successfully' 
    });
  } catch (error) {
    console.error('Error creating message:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send message' 
    });
  }
});

app.get('/api/messages', (req, res) => {
  try {
    const messages = contactService.getAllMessages();
    res.json({ success: true, messages });
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to fetch messages' 
    });
  }
});

app.patch('/api/messages/:id/read', (req, res) => {
  try {
    contactService.markAsRead(parseInt(req.params.id));
    res.json({ 
      success: true, 
      message: 'Message marked as read' 
    });
  } catch (error) {
    console.error('Error updating message:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to update message' 
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Tales by Bibi API running on port ${PORT}`);
});

export default app;
