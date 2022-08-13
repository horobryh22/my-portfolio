import { ActiveLinkType } from 'types';

export type PageLinksType = {
    activeLink: ActiveLinkType;
    onUpdateActiveLink: (activeLink: ActiveLinkType) => void;
};
