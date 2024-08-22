import 'Styles/globals.css'

export const metadata = {
    title: 'روینو | Roino',
    description: '',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className='bg-main'>{children}</body>
        </html>
    )
}
