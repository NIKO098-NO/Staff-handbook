# MCRP Staff Handbook

Miami City Roleplay Staff Handbook - A comprehensive guide to staff procedures, expectations, and policies.

## Project Structure

```
BStaff/
├── Index.html              # Main handbook page (static HTML)
├── api/
│   └── health.js          # Serverless function endpoint
├── package.json           # Project configuration
├── vercel.json            # Vercel deployment config
├── .gitignore            # Git ignore rules
└── README.md             # This file
```

## Fix Summary

**Issue**: 500 INTERNAL_SERVER_ERROR - FUNCTION_INVOCATION_FAILED

**Root Cause**: Missing serverless function infrastructure for Vercel deployment.

**Solution**: Created proper Vercel serverless function structure:
- ✅ `api/health.js` - Basic health check endpoint
- ✅ `vercel.json` - Vercel configuration
- ✅ `package.json` - Project dependencies
- ✅ `.gitignore` - Repository management

## Features

- 📚 **Comprehensive Staff Handbook** - Detailed guide for MCRP staff members
- 🎨 **Modern UI Design** - Dark theme with purple accents
- 📱 **Responsive Layout** - Works on desktop, tablet, and mobile
- ⚡ **Serverless Functions** - Vercel-ready API endpoints
- 🔒 **Production Ready** - Proper configuration for deployment

## API Endpoints

### GET /api/health
Health check endpoint to verify serverless functions are working.

**Response**:
```json
{
  "status": "healthy",
  "timestamp": "2025-01-15T10:30:00.000Z",
  "message": "Serverless function is working correctly"
}
```

## Local Development

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Start development server:
   ```bash
   vercel dev
   ```

3. Visit `http://localhost:3000` to see the handbook

## Deployment to Vercel

1. Push to GitHub/GitLab/Bitbucket
2. Import project in Vercel dashboard
3. Deploy automatically

Or use Vercel CLI:
```bash
vercel --prod
```

## Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Icons**: Phosphor Icons
- **Fonts**: Inter, Plus Jakarta Sans
- **Deployment**: Vercel (Serverless Functions)
- **Runtime**: Node.js 18.x

## Sections

### Getting Started
- Introduction
- Purpose & Scope
- Staff Expectations
- Staff Structure
- Activity Requirements
- Training Requirements
- Ethics & Confidentiality

### Moderation
- Moderation Tools & Procedures
- Discipline Guidelines
- Common Rule Violations
- Roleplay Guidelines
- Chain of Command
- Ticket Management
- Escalation Procedures

### Staff Policy
- Event Moderation
- Staff Development
- Standards & Requirements
- Progressive Discipline System
- Staff Formats

## Organization

- **Diamond Nation Studios** - Parent Organization
- **Miami City Roleplay** - Server/Community

## License

MIT License - See LICENSE file for details

## Support

For issues or questions, contact the development team.

---

**Last Updated**: January 2025
**Version**: 1.0.0

