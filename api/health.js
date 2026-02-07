// Basic health check endpoint for Vercel serverless function
module.exports = (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    message: 'Serverless function is working correctly'
  });
};

