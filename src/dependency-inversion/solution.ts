class GrayLog {
    saveLog(logObject: object) {
      console.log(`Log Saved to Graylog for logObject`);
    }
  }

class RedisLog {
    sendLog(logMessage: string) {
      console.log(`Log Sent to Redis for logMessage`);
    }
  }
  
  const errorDecoratorDI = (error: Error) => {
    const log = new GrayLog();
    log.saveLog(error);
  };
  
  const mainDI = () => {
    errorDecoratorDI(new Error("Error Message"));
  };
  
  mainDI();