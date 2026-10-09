import './globals.css';
import type { Metadata } from 'next';
export const metadata:Metadata={title:'FORMA — Interior design concept',description:'A cinematic editorial website concept for an interior design practice.',robots:{index:false,follow:false}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
