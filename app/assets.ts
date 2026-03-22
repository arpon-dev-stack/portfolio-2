import css from '../public/css.png';
import javascript from '../public/javascript.png';
import html from '../public/html.png';
import node from '../public/node.png';
import react from '../public/react.png';
import redux from '../public/redux.png';
import postgre from '../public/postgresql.png';
import mongodb from '../public/mongodb.png';
import jwt from '../public/jwt.png';
import tailwindcss from '../public/tailwindcss.png';
import bookticket from '../public/book-ticket.png';
import ecommerce from '../public/ecommerce.png';
import instagram from '../public/instagram.png';
import x from '../public/x.png';
import linkedin from '../public/linkedin.png';
import facebook from '../public/facebook.png';

export const skills = [
  { src: html, id: 0, alt: 'html', gain: 90 },
  { src: css, id: 1, alt: 'css', gain: 85 },
  { src: javascript, id: 2, alt: 'javascript', gain: 80 },
  { src: tailwindcss, id: 3, alt: 'tailwindcss', gain: 80 },
  { src: react, id: 4, alt: 'react', gain: 80 },
  { src: redux, id: 5, alt: 'redux', gain: 75 },
  { src: node, id: 6, alt: 'node', gain: 80 },
  { src: mongodb, id: 7, alt: 'mongodb', gain: 70 },
  { src: postgre, id: 8, alt: 'postgreSql', gain: 70 },
  { src: jwt, id: 9, alt: 'jsonwebtoken', gain: 70 },
];

export const projects = [
  {
    src: ecommerce,
    id: 1,
    name: 'E-Commerce',
    alt: 'e-commerce',
    href: 'https://shopeasearpon.netlify.app/',
  },
  {
    src: bookticket,
    id: 2,
    name: 'Ticket Booking',
    alt: 'ticket booking',
    href: 'https://book-ticket-arpon.netlify.app/',
  },
];

export const contact = [
  {
    src: facebook,
    alt: 'facebook',
    href: 'https://www.facebook.com/profile.php?id=61576801995320',
    id: 1,
  },
  {
    src: instagram,
    alt: 'instagram',
    href: 'https://www.instagram.com/arpon.front/',
    id: 2,
  },
  { src: x, alt: 'x', href: 'https://x.com/ArponA64511', id: 3 },
  {
    src: linkedin,
    alt: 'linkedin',
    href: 'https://www.linkedin.com/in/arpon-das-a21014319/',
    id: 4,
  },
];
