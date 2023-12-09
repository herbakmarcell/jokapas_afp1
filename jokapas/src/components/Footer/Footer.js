import "./footer.css"

export function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer>{`Copyright © Kézifék ${year}`}</footer>
    )
}