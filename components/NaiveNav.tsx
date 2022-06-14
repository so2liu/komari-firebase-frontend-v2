import { Stack } from "@mui/material";
import Link from "next/link";
import { MENU_CATEGORY } from "../constant/router";
import { capitalizeStart } from "../utils/stringUtils";

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
                <Stack direction="row" spacing={4}>
                    {MENU_CATEGORY.map((category) => (
                        <Link key={category} href={`/menu/${category}`}>
                            <a>{capitalizeStart(category)}</a>
                        </Link>
                    ))}
                </Stack>
            </li>
        </ul>
    );
}

export default NaiveNav;
