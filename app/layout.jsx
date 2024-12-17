export default function RootLayout({children})
{
    return (
        <html lang="fr">
            <body>
                <header>
                    header
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    footer
                </footer>
            </body>
        </html>
    )
}