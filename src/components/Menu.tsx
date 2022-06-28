import Image from "next/image"
import Link from "next/link"
// STYLES
import { Container } from "@styles/menu"

const Menu = (): JSX.Element => {
    return(
    <Container>
        <Link href='/'>
            <a><Image src='/img/aiko.png' alt='logo aiko' priority={false} width={90} height={33} /></a>
        </Link>
    </Container>)
}

export default Menu