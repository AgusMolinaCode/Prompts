import '@styles/globals.css'
import Nav from '@components/Nav'
import Provider from '@components/Provider'
import { ThemeProvider } from '@context/ThemeContext'

export const metadata = {
    title: 'PromptsForDevs',
    description: 'A collection of prompts to help you get started on your next project.',
}

const RootLayout = ({ children }) => {
    return (
        
            <html lang='en'>
                <body className='min-h-screen '>
                    <Provider>
                    <ThemeProvider>
                        <main className=''>
                            <Nav />
                            {children}
                        </main>
                    </ThemeProvider>
                    </Provider>
                </body>
            </html>
    )
}

export default RootLayout