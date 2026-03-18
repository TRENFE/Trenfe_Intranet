import { PageProps } from "fresh";
import  HeaderIsland from "../../islands/HeaderIsland.tsx"

const Layout = ({ Component }: PageProps) => {
    return (
        <>
            <HeaderIsland />
            <main>
            <Component />
            </main>
            </>
    );
};

export default Layout;