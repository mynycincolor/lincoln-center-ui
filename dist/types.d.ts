import type { ReactNode } from 'react';
export type LcEventCardVariant = 'feature' | 'standard' | 'compact';
export interface LcNavItem {
    label: string;
    href?: string;
    children?: LcNavItem[];
}
export interface LcEventSummary {
    id?: string;
    title: string;
    eyebrow?: string;
    dateLabel?: string;
    timeLabel?: string;
    seriesTitle?: string;
    seriesUrl?: string;
    subtitle?: string;
    venue?: string;
    venueHref?: string;
    href?: string;
    imageSrc?: string;
    imageAlt?: string;
    badge?: string;
    tags?: string[];
    assistiveLabel?: string;
    disabled?: boolean;
}
export interface LcShelf {
    id: string;
    title: string;
    actionLabel?: string;
    actionHref?: string;
    items: LcEventSummary[];
}
export interface LcEventListGroup {
    id: string;
    heading: string;
    events: LcEventSummary[];
}
export interface LcBaseProps {
    className?: string;
    children?: ReactNode;
}
//# sourceMappingURL=types.d.ts.map