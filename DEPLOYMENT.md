# Deployment Guide for Tales by Bibi

## Server Information
- **Hosting**: Digital Ocean Droplet
- **IP Address**: 46.101.83.94
- **OS**: Ubuntu 24.04.3 LTS
- **Web Server**: Nginx with SSL (Let's Encrypt)
- **Process Manager**: PM2
- **Domain**: https://talesbybibi.com

## Repository Information
- **Active Repository**: git@github.com:dochiengjr05/myTalesByBibi.git
- **Server Location**: `/root/myTalesByBibi`
- **Nginx Serves From**: `/var/www/talesbybibi`

## Deployment Steps

### 1. SSH into the Droplet
```bash
ssh root@46.101.83.94
```

### 2. Navigate to the Repository
```bash
cd ~/myTalesByBibi
```

### 3. Pull Latest Changes (if needed)
```bash
git pull origin main
```

### 4. Install Dependencies (if needed)
```bash
npm install
```

### 5. Build the Application
```bash
# Build frontend
npm run build

# Build backend
npm run build:server
```

### 6. Deploy to Nginx Directory
```bash
# Copy built frontend files to nginx directory
cp -r ~/myTalesByBibi/dist/* /var/www/talesbybibi/
```

### 7. Restart Services
```bash
# Restart the backend API
pm2 restart talesbybibi-api

# Reload nginx
nginx -t && systemctl reload nginx
```

### 8. Verify Deployment
Visit https://talesbybibi.com to verify changes are live.

If browser cache is an issue, do a hard refresh:
- **Mac**: Cmd + Shift + R
- **Windows/Linux**: Ctrl + Shift + R

## Quick Deployment Command
After making changes locally and pushing to GitHub, run these commands on the server:

```bash
cd ~/myTalesByBibi && \
git pull origin main && \
npm install && \
npm run build && \
npm run build:server && \
cp -r dist/* /var/www/talesbybibi/ && \
pm2 restart talesbybibi-api && \
nginx -t && systemctl reload nginx
```

## PM2 Configuration
- **Process Name**: talesbybibi-api
- **Backend Port**: 8081
- **View Logs**: `pm2 logs talesbybibi-api`
- **View Status**: `pm2 status`

## Nginx Configuration
- **Config File**: `/etc/nginx/sites-enabled/talesbybibi`
- **Frontend**: Serves static files from `/var/www/talesbybibi`
- **API Proxy**: `/api/*` routes to `http://localhost:8081`

## Important Notes
- The old repository at `~/talesbybibi` is deprecated and should not be used
- Always work from `~/myTalesByBibi` which is linked to the new GitHub repository
- Frontend changes require rebuilding and copying to `/var/www/talesbybibi/`
- Backend changes require PM2 restart after building
- SSL certificates are managed by Certbot (auto-renewal enabled)

## Troubleshooting

### Changes Not Showing Up
1. Verify you're in the correct directory: `cd ~/myTalesByBibi`
2. Check build output: `npm run build`
3. Verify files were copied: `ls -la /var/www/talesbybibi/`
4. Clear browser cache with hard refresh
5. Check nginx logs: `tail -f /var/log/nginx/error.log`

### Backend Issues
1. Check PM2 status: `pm2 status`
2. View logs: `pm2 logs talesbybibi-api`
3. Restart API: `pm2 restart talesbybibi-api`

### Database Location
- **SQLite Database**: `~/myTalesByBibi/server/talesbybibi.db`
