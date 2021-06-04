
import Link from 'next/link'
import AppLayout from '../../components/AppLayout';

const Devit = ({
    userName
}) => {
    return (
        <>
            <AppLayout>
                <h1>This is the timeline of {userName}! </h1>
                <Link href="/" >
                    <a> Go Home </a>
                </Link>
            </AppLayout>
        </>
    )
}

Devit.getInitialProps = () => {
    // return { userName: '@softx0' }
    return fetch('http://localhost:3000/api/hello')
            .then(response => response.json())
}

export default Devit;
