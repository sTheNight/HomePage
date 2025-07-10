export interface IConfig {
    title: string;
    avatar: string;
    author: string;
    favicon: string;
    hitokoto: string;
    socialLinks: ISocialLink[];
    navItems: INavItem[];
}

interface ISocialLink {
    name: string;
    icon: string;
    link: string;
    customIcon: boolean;
}

interface INavItem {
    name: string;
    link: string;
}
