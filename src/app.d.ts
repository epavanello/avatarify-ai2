// See https://kit.svelte.dev/docs/types#app

import type { Database } from '$lib/supabase-types';
import type { Session, SupabaseClient } from '@supabase/supabase-js';

// for information about these interfaces
declare global {
  namespace App {
    interface Locals {
      supabase: SupabaseClient<Database>;
      getSession(): Promise<Session | null>;
    }
    interface PageData {
      session: Session | null;
    }
  }

  interface Window {
    plausible: {
      (eventName: string, options?: Record<string, unknown>): void;
      q: Array<[string, Record<string, unknown>?]>;
    };
  }
}

export {};
