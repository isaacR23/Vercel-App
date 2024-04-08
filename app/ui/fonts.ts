// We import letters Inter and Lusitana
import { Inter, Lusitana } from 'next/font/google';
 
// Configurations for each letters, one has subset, other
// custom configuration

export const inter = Inter({ subsets: ['latin'] });

// After you imported the file then you need
// to call it again in whenever file you plan to use it

export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
  });