import Link from 'next/link';
import Image from '../components/Image';

const Index = () => (
    <div>
        <h1>Server Side Rendering Magician</h1>
        <p>ONLY HOMEPAGE(index.js) is rendered from server side</p>
        <Link href='/about'>
            <button>About(CSR)</button>
        </Link>
        <Image/>
        <Link href='/robots'>
            <button>Robots</button>
        </Link>
        {/* <a href ='/about'>About(SSR)</a> */}
    </div>
);

export default Index; 