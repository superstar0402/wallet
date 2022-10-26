import { Logger } from "../logger";
import type { MessageHandler, Transport } from "./types";

const defaultLogger = new Logger("WindowMessage");

export default class WindowMessageTransport implements Transport {
  private target: Window;

  private logger: Logger;

  private _onMessage: MessageHandler | undefined;

  constructor(target: Window = window, logger: Logger = defaultLogger) {
    this.target = target;
    this.logger = logger;
  }

  connect = (): void => {
    this.target.addEventListener("message", this._onMessageEvent, false);
    this.logger.debug("event listeners registered");
  };

  disconnect = (): void => {
    this.target.removeEventListener("message", this._onMessageEvent, false);
    this.logger.debug("event listeners unregistered");
  };

  _onMessageEvent = (event: MessageEvent): void => {
    if (this._onMessage) {
      this.logger.debug("received message event", event);
      if (
        event.origin !== this.target.location.origin &&
        event.data &&
        typeof event.data === "string"
      ) {
        try {
          const message = event.data;

          // TODO: find a better way to ensure message comes from LL
          if (Date.now() > 0) {
            this.logger.log("received message", message);
            // FIXME
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this._onMessage(message);
          } else {
            this.logger.debug("not a wallet API message");
          }
        } catch (error) {
          this.logger.warn("parse error");
          // FIXME
          if (error instanceof Error) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this._onMessage(error.message);
          }
          console.error("unknown error");
        }
      } else {
        this.logger.debug("ignoring message same origin");
      }
    } else {
      this.logger.debug("no handler registered");
    }
  };

  set onMessage(handler: MessageHandler | undefined) {
    this._onMessage = handler;
  }

  get onMessage(): MessageHandler | undefined {
    return this._onMessage;
  }

  send = (message: string): Promise<void> => {
    try {
      // @ts-ignore
      if (this.target.ReactNativeWebView) {
        this.logger.log("sending message (ReactNativeWebview)", message);
        // @ts-ignore
        this.target.ReactNativeWebView.postMessage(message);
      }
      // @ts-ignore
      else if (this.target.ElectronWebview) {
        this.logger.log("sending message (ElectronWebview)", message);
        // @ts-ignore
        this.target.ElectronWebview.postMessage(message);
      } else {
        this.logger.log("sending message", message);
        // @ts-ignore
        this.target.top.postMessage(message, "*");
      }
      return Promise.resolve();
    } catch (error) {
      this.logger.error("unexpected error on send", error);
      return Promise.reject(error);
    }
  };
}
