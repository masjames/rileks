export interface MessagingProvider {
  sendMessage(recipient: string, message: string): Promise<void>;
  sendMenu(recipient: string, title: string, options: string[]): Promise<void>;
  parseIncomingMessage(payload: unknown): { sender: string; text: string };
}
