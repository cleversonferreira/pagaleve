import winston from 'winston';
 
const colors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'magenta',
    debug: 'white',
  }
  
winston.addColors(colors)

const logger = winston.createLogger({
    levels: winston.config.npm.levels,
	format: winston.format.json(),
    transports: [
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' }),
      new winston.transports.Console({ format: winston.format.simple() })
    ],
  });

export { logger };