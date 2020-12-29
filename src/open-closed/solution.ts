class EmailService {
    public sendEmail(email: string, message: string): void {
      console.log(`Email Sent: ${message} to ${email}`);
    }
  }
  
  class NotificationService {
    private _emailService: EmailService;
    constructor() {
      this._emailService = new EmailService();
    }
    public sendNotification(email: string, message: string) {
      this._emailService.sendEmail(email, message);
    }
  }
  
  const main = () => {
    const notificationService = new NotificationService();
    notificationService.sendNotification(
      "hello@example.com",
      "Generic Notification"
    );
  };
  
  main();