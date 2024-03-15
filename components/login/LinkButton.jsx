import Link from 'next/link';
export default function LinkButton({ href, children }) {
    return (
        <Link href={href}>
            <a className={styles.linkButton}>{children}</a>
        </Link>
    );
}