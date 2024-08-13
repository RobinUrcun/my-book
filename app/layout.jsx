import "./styles/main.scss";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Robin Urcun : Développeur web</title>
        <meta
          name="description"
          content="Découvrez le portfolio de [Ton Nom], développeur web junior. Explorez mes compétences, projets, expériences, et téléchargez mon CV. N'hésitez pas à me contacter via le formulaire de contact intégré."
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
