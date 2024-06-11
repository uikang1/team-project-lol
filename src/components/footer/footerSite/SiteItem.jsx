import { Facebook, Instagram, Reddit, Twitter, Youtube } from '../FooterStyle';

const SiteItem = () => {
    return (
        <>
            <li>
                <a href="https://www.youtube.com/channel/UCooLkG0FfrkPBQsSuC95L6w">
                    <Youtube />
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/leagueoflegendskorea/">
                    <Instagram />
                </a>
            </li>
            <li>
                <a href="https://www.facebook.com/LeagueofLegendsKor?fref=ts">
                    <Facebook />
                </a>
            </li>
            <li>
                <a href="https://x.com/LeagueOfLegends">
                    <Twitter />
                </a>
            </li>
            <li>
                <a href="https://www.reddit.com/r/leagueoflegends/">
                    <Reddit />
                </a>
            </li>
        </>
    );
};

export default SiteItem;
