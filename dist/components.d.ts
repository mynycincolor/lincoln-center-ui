import type { MouseEventHandler, ReactNode, SyntheticEvent } from 'react';
import type { LcBaseProps, LcEventCardVariant, LcEventSummary, LcNavItem, LcShelf } from './types';
type DataAttributes = Record<string, string | number | undefined>;
export interface LcProviderProps extends LcBaseProps {
    surface?: 'dark' | 'light';
}
export declare function LcProvider({ children, className, surface }: LcProviderProps): import("react").JSX.Element;
export interface LcButtonProps {
    children: ReactNode;
    href?: string;
    variant?: 'primary' | 'secondary' | 'ghost' | 'light' | 'dark' | 'outline';
    className?: string;
    onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
    ariaLabel?: string;
    trackingAttributes?: DataAttributes;
}
export declare function LcButton({ children, href, variant, className, onClick, ariaLabel, trackingAttributes }: LcButtonProps): import("react").JSX.Element;
export interface LcChipProps {
    label: string;
    active?: boolean;
    onClick?: () => void;
}
export declare function LcChip({ label, active, onClick }: LcChipProps): import("react").JSX.Element;
export interface LcArrowButtonProps {
    direction: 'previous' | 'next';
    label?: string;
    variant?: 'light' | 'dark';
    disabled?: boolean;
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
export declare function LcArrowButton({ direction, label, variant, disabled, className, onClick }: LcArrowButtonProps): import("react").JSX.Element;
export interface LcPaginationDotsProps {
    count: number;
    activeIndex: number;
    label?: string;
    className?: string;
    onSelect?: (index: number) => void;
}
export declare function LcPaginationDots({ count, activeIndex, label, className, onSelect }: LcPaginationDotsProps): import("react").JSX.Element | null;
export interface LcSectionHeadingProps {
    title: string;
    kicker?: string;
    titleId?: string;
    actionLabel?: string;
    actionHref?: string;
    className?: string;
}
export declare function LcSectionHeading({ title, kicker, titleId, actionLabel, actionHref, className }: LcSectionHeadingProps): import("react").JSX.Element;
export interface LcMastheadProps {
    brand?: string;
    primaryNav?: LcNavItem[];
    utilityNav?: LcNavItem[];
    className?: string;
}
export declare function LcMasthead({ brand, primaryNav, utilityNav, className }: LcMastheadProps): import("react").JSX.Element;
export interface LcEventCardProps {
    event: LcEventSummary;
    variant?: LcEventCardVariant;
    className?: string;
    onTagClick?: (tag: string) => void;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
    onVenueClick?: MouseEventHandler<HTMLAnchorElement>;
    onSeriesClick?: MouseEventHandler<HTMLAnchorElement>;
    imageOnError?: (event: SyntheticEvent<HTMLImageElement>) => void;
    linkTarget?: string;
    linkRel?: string;
    titleId?: string;
    describedBy?: string;
    trackingAttributes?: DataAttributes;
}
export declare function LcEventCard({ event, variant, className, onTagClick, onClick, onVenueClick, onSeriesClick, imageOnError, linkTarget, linkRel, titleId, describedBy, trackingAttributes }: LcEventCardProps): import("react").JSX.Element;
export interface LcEditorialShelfProps {
    shelf: LcShelf;
    columns?: number;
    className?: string;
    onTagClick?: (tag: string) => void;
}
export declare function LcEditorialShelf({ shelf, columns, className, onTagClick }: LcEditorialShelfProps): import("react").JSX.Element;
export interface LcHomepageBandProps extends LcBaseProps {
    title?: string;
    actionLabel?: string;
    actionHref?: string;
}
export declare function LcHomepageBand({ title, actionLabel, actionHref, className, children }: LcHomepageBandProps): import("react").JSX.Element;
export {};
//# sourceMappingURL=components.d.ts.map