// Add this type declaration file to your project
declare global {
    interface Window {
      grecaptcha: {
        ready: (callback: () => void) => void
        execute: (siteKey: string | undefined, options: { action: string }) => Promise<string>
      }
      onRecaptchaLoaded: () => void
    }
  }
  
  export {}
  
  