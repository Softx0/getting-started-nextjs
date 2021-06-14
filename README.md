This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started with Next.js

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Notes
 Head = es especial para el SEO importado ya en nuestras paginas

 Los estilos con `jsx` te permite crear un css dentro del componente, lo que escribas se refiere a lo que esta dentro del componente
 Aunque ya hoy en día se utiliza en un archivo .css normal, pero se hace referencia en el js con className


Estas propiedades son exclusivas para Next.js
-getStaticProps, es mas a lo gasby, estatico
-serverSideProps, un site dinamico
-getInitialProps, una forma de decir al server las props que tiene que usar el componente. Puedes usar incluso el api, ejecuta la funcion, devuelve y nice

 Hidratacion: proveer a ese html de vida, con una carga previa establecida en el servidor.
 getInitialProps, estara pronto deprecado y pues solo funciona en componentes tipo paginas

