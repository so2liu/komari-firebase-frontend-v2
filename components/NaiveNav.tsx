import Link from "next/link";

function NaiveNav() {
    return (
        <ul>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/checkout">
                    <a>Checkout</a>
                </Link>
            </li>
            <li>
                <Link href="/menu/sushi">
                    <a>Sushi</a>
                </Link>
            </li>
        </ul>
    );
}

export default NaiveNav;
