
const AppLayout = ({ children }) => {
    return (
        <>
            <main>
                {children}
            </main>

            <style jsx global>{
                `
            html,
            body {
              padding: 0;
              margin: 0;
              font-family: monospace;
            }
            
            a {
              color: inherit;
              text-decoration: none;
            }
            
            * {
              box-sizing: border-box;
            }
            
            nav {
              font-size: 24px;
              text-align: center;
            }
            `
            }
            </style>
        </>
    )
}

export default AppLayout;
