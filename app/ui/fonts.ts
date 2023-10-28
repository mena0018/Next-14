import { Inter, Lusitana } from 'next/font/google';
import { NextFont } from 'next/dist/compiled/@next/font';

export const inter: NextFont = Inter({ subsets: ['latin'] });
export const lusitana: NextFont = Lusitana({ weight: ['400', '700'], subsets: ['latin'] });
