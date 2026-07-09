import type { ReactNode } from 'react';
export type LcEventCardVariant = 'feature' | 'standard' | 'compact';
export interface LcNavItem {
    label: string;
    href?: string;
    children?: LcNavItem[];
}
export interface LcEventSummary {
    title: string;
    eyebrow?: string;
    dateLabel?: string;
    seriesTitle?: string;
    seriesUrl?: string;
    venue?: string;
    venueHref?: string;
    href?: string;
    imageSrc?: string;
    imageAlt?: string;
    badge?: string;
    tags?: string[];
}
export interface LcShelf {
    id: string;
    title: string;
    actionLabel?: string;
    actionHref?: string;
    items: LcEventSummary[];
}
export interface LcBaseProps {
    className?: string;
    children?: ReactNode;
}
//# sourceMappingURL=types.d.ts.map