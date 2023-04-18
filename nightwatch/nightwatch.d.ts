import { NightwatchCustomAssertions } from 'nightwatch';

declare module 'nightwatch' {
  interface NightwatchCustomAssertions {
    elementHasCount: (selector: string, count: number) => NightwatchBrowser;
  }
}
