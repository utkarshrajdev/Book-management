// middleware/requestLogger.js

const fs = require('fs');
const path = require('path');

const requestLogger = (req, res, next) => {
    const logEntry = {
        method: req.method,
        url: req.originalUrl,
        timestamp: new Date().toISOString(),
    };

    const logEntryString = JSON.stringify(logEntry) + '\n';
    const logFilePath = process.env.LOG_FILE_PATH || path.join(__dirname, '../request_logs.log');

    try {
        fs.appendFileSync(logFilePath, logEntryString);
    } catch (err) {
        console.error('Failed to write to log file', err);
        // Additional handling if necessary, e.g., notify an error tracking service
    }

    next();
};

module.exports = requestLogger;
