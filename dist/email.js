import nodemailer from 'nodemailer';
// Email configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER || 'talesbybibi@gmail.com',
        pass: process.env.EMAIL_PASSWORD, // App-specific password
    },
});
// Email template for new orders
export async function sendOrderNotification(orderData) {
    const mailOptions = {
        from: process.env.EMAIL_USER || 'talesbybibi@gmail.com',
        to: 'talesbybibi@gmail.com',
        subject: `New Book Order from ${orderData.name}`,
        html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #FFA500;">New Order Received!</h2>
        
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #8B6F47;">Customer Information</h3>
          <p><strong>Name:</strong> ${orderData.name}</p>
          <p><strong>Email:</strong> ${orderData.email}</p>
          <p><strong>Phone:</strong> ${orderData.phone}</p>
        </div>
        
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #8B6F47;">Shipping Address</h3>
          <p>${orderData.address}</p>
          <p>${orderData.city}, ${orderData.country}</p>
        </div>
        
        <div style="background-color: #A8D86E; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #fff;">Order Details</h3>
          <p style="color: #fff;"><strong>Quantity:</strong> ${orderData.quantity} ${orderData.quantity === 1 ? 'copy' : 'copies'}</p>
          <p style="color: #fff;"><strong>Total Amount:</strong> KES ${850 * orderData.quantity}</p>
        </div>
        
        <div style="background-color: #FFF8E7; padding: 15px; border-left: 4px solid #FFA500; margin: 20px 0;">
          <p style="margin: 0;"><strong>M-PESA Payment:</strong> Customer should send KES ${850 * orderData.quantity} to 0728934854</p>
        </div>
        
        <p style="color: #666; font-size: 12px; margin-top: 30px;">
          This is an automated notification from Tales by Bibi order system.
        </p>
      </div>
    `,
    };
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Order notification email sent:', info.messageId);
        return { success: true, messageId: info.messageId };
    }
    catch (error) {
        console.error('Error sending order notification email:', error);
        throw error;
    }
}
