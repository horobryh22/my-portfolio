import { ActiveLinkType } from 'types/ActiveLinkType';

export type LinkType = {
    id: number;
    name: string;
    link: ActiveLinkType;
    href: string;
};
