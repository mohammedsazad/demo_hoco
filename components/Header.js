'use client';
import Link from 'next/link';
import {useState} from 'react';
export default function Header(){const [q,setQ]=useState(''); return <header className="header"><div className="topbar"><Link href="/" className="logo">PINDU<span>DEMO</span></Link><div className="search"><span>⌕</span><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search products, brands and more"/><Link href={q?`/?q=${encodeURIComponent(q)}`:'/'}>Search</Link></div><nav><Link href="/">Home</Link><Link href="/admin">Admin</Link><button className="iconbtn">♡</button><button className="cart">🛒 Cart <b>0</b></button></nav></div></header>}
