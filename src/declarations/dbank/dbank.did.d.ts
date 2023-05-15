import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'checkBalance' : () => Promise<number>,
  'compound' : () => Promise<undefined>,
  'deduct' : (arg_0: number) => Promise<number>,
  'greet' : (arg_0: string) => Promise<undefined>,
  'topUp' : (arg_0: number) => Promise<number>,
}
