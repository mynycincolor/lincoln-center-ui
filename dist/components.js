import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function classNames(...values) {
    return values.filter(Boolean).join(' ');
}
export function LcProvider({ children, className, surface = 'dark' }) {
    return _jsx("div", { className: classNames('lc-ui', `lc-ui--${surface}`, className), children: children });
}
export function LcButton({ children, href, variant = 'primary', className, onClick, ariaLabel, trackingAttributes }) {
    const buttonClassName = classNames('lc-button', `lc-button--${variant}`, className);
    if (href) {
        return (_jsx("a", { className: buttonClassName, href: href, "aria-label": ariaLabel, onClick: onClick, ...trackingAttributes, children: children }));
    }
    return (_jsx("button", { className: buttonClassName, type: "button", onClick: onClick, "aria-label": ariaLabel, ...trackingAttributes, children: children }));
}
export function LcChip({ label, active = false, onClick }) {
    return (_jsx("button", { className: classNames('lc-chip', active && 'lc-chip--active'), type: "button", onClick: onClick, children: label }));
}
export function LcArrowButton({ direction, label, variant = 'light', disabled = false, className, onClick }) {
    const fallbackLabel = direction === 'previous' ? 'Previous' : 'Next';
    return (_jsx("button", { className: classNames('lc-arrow-button', `lc-arrow-button--${variant}`, className), type: "button", "aria-label": label ?? fallbackLabel, disabled: disabled, onClick: onClick, children: _jsx("span", { "aria-hidden": "true", children: direction === 'previous' ? '‹' : '›' }) }));
}
export function LcPaginationDots({ count, activeIndex, label = 'Pagination', className, onSelect }) {
    if (count <= 1) {
        return null;
    }
    return (_jsx("div", { className: classNames('lc-pagination-dots', className), "aria-label": label, role: "group", children: Array.from({ length: count }, (_, index) => (_jsx("button", { className: "lc-pagination-dot", type: "button", "aria-label": `Go to slide ${index + 1}`, "aria-pressed": index === activeIndex, onClick: () => onSelect?.(index) }, index))) }));
}
export function LcSectionHeading({ title, kicker, titleId, actionLabel, actionHref, className }) {
    return (_jsxs("div", { className: classNames('lc-section-heading', className), children: [_jsxs("div", { children: [kicker ? _jsx("p", { className: "lc-section-heading__kicker", children: kicker }) : null, _jsx("h2", { className: "lc-section-heading__title", id: titleId, children: title })] }), actionLabel && actionHref ? (_jsx("a", { className: "lc-section-heading__action", href: actionHref, children: actionLabel })) : null] }));
}
export function LcMasthead({ brand = 'Lincoln Center', primaryNav = [], utilityNav = [], className }) {
    return (_jsxs("header", { className: classNames('lc-masthead', className), children: [_jsx("a", { className: "lc-masthead__brand", href: "/", children: brand }), _jsx("nav", { className: "lc-masthead__nav", "aria-label": "Primary", children: primaryNav.map((item) => (_jsxs("a", { className: "lc-masthead__link", href: item.href ?? '#', children: [item.label, item.children && item.children.length > 0 ? _jsx("span", { "aria-hidden": "true", children: "\u2304" }) : null] }, item.label))) }), _jsx("nav", { className: "lc-masthead__utility", "aria-label": "Utility", children: utilityNav.map((item) => (_jsx("a", { className: "lc-masthead__link", href: item.href ?? '#', children: item.label }, item.label))) })] }));
}
export function LcEventCard({ event, variant = 'standard', className, onTagClick, onClick, onVenueClick, onSeriesClick, imageOnError, linkTarget, linkRel, titleId, describedBy, trackingAttributes }) {
    const href = event.href ?? '#';
    const tags = event.tags ?? [];
    const linkProps = {
        target: linkTarget,
        rel: linkRel,
        'aria-describedby': describedBy,
        onClick,
        ...trackingAttributes
    };
    return (_jsxs("article", { className: classNames('lc-event-card', `lc-event-card--${variant}`, className), children: [_jsxs("a", { className: "lc-event-card__media-link", href: href, "aria-label": event.title, ...linkProps, children: [event.imageSrc ? (_jsx("img", { className: "lc-event-card__image", src: event.imageSrc, alt: event.imageAlt ?? '', onError: imageOnError })) : null, _jsx("span", { className: "lc-event-card__scrim", "aria-hidden": "true" })] }), tags.length > 0 ? (_jsx("div", { className: "lc-event-card__tags", "aria-label": "Event tags", children: tags.map((tag) => (_jsx("button", { className: "lc-event-card__tag", type: "button", onClick: () => onTagClick?.(tag), children: tag }, tag))) })) : null, _jsxs("div", { className: "lc-event-card__copy", children: [event.badge ? (_jsx("div", { className: "lc-event-card__label-row", children: _jsx("span", { className: "lc-event-card__badge", children: event.badge }) })) : null, event.seriesTitle ? (event.seriesUrl ? (_jsx("a", { className: "lc-event-card__series", href: event.seriesUrl, target: linkTarget, rel: linkRel, onClick: onSeriesClick, children: event.seriesTitle })) : (_jsx("span", { className: "lc-event-card__series", children: event.seriesTitle }))) : null, event.eyebrow || event.dateLabel ? (_jsx("span", { className: "lc-event-card__eyebrow", children: event.eyebrow ?? event.dateLabel })) : null, _jsx("a", { className: "lc-event-card__title", href: href, id: titleId, ...linkProps, children: event.title }), event.venue ? (event.venueHref ? (_jsx("a", { className: "lc-event-card__venue", href: event.venueHref, target: linkTarget, rel: linkRel, onClick: onVenueClick, children: event.venue })) : (_jsx("span", { className: "lc-event-card__venue", children: event.venue }))) : null] })] }));
}
export function LcEditorialShelf({ shelf, columns = 4, className, onTagClick }) {
    return (_jsxs("section", { className: classNames('lc-editorial-shelf', className), style: { '--lc-shelf-columns': columns }, children: [_jsx(LcSectionHeading, { title: shelf.title, actionLabel: shelf.actionLabel, actionHref: shelf.actionHref }), _jsx("div", { className: "lc-editorial-shelf__rail", role: "list", "aria-label": shelf.title, children: shelf.items.map((item) => (_jsx("div", { role: "listitem", children: _jsx(LcEventCard, { event: item, variant: "feature", onTagClick: onTagClick }) }, `${shelf.id}-${item.title}`))) })] }));
}
export function LcEventListItem({ event, className, onClick, onVenueClick, onSeriesClick, onTagClick, linkTarget, linkRel }) {
    const tags = event.tags ?? [];
    const isDisabled = event.disabled;
    const detailsId = event.assistiveLabel ? `lc-event-list-${slugifyForId(event.id ?? event.title)}-details` : undefined;
    const title = isDisabled || !event.href ? (_jsx("p", { className: "lc-event-list-item__title", children: event.title })) : (_jsx("a", { className: "lc-event-list-item__title-link", href: event.href, target: linkTarget, rel: linkRel, "aria-describedby": detailsId, onClick: onClick, children: _jsx("p", { className: "lc-event-list-item__title", children: event.title }) }));
    const venue = event.venue ? (isDisabled || !event.venueHref ? (_jsx("span", { className: "lc-event-list-item__venue", children: event.venue })) : (_jsx("a", { className: "lc-event-list-item__venue", href: event.venueHref, target: linkTarget, rel: linkRel, "aria-describedby": detailsId, onClick: onVenueClick, children: event.venue }))) : null;
    return (_jsxs("article", { className: classNames('lc-event-list-item', isDisabled && 'lc-event-list-item--disabled', className), role: "listitem", children: [event.assistiveLabel ? (_jsx("p", { id: detailsId, className: "lc-sr-only", children: event.assistiveLabel })) : null, event.seriesTitle ? (isDisabled || !event.seriesUrl ? (_jsx("span", { className: "lc-event-list-item__series", children: event.seriesTitle })) : (_jsx("a", { className: "lc-event-list-item__series", href: event.seriesUrl, target: linkTarget, rel: linkRel, "aria-describedby": detailsId, onClick: onSeriesClick, children: event.seriesTitle }))) : null, title, event.subtitle ? _jsx("p", { className: "lc-event-list-item__subtitle", children: event.subtitle }) : null, venue, event.timeLabel || event.dateLabel ? _jsx("p", { className: "lc-event-list-item__time", children: event.timeLabel ?? event.dateLabel }) : null, tags.length > 0 ? (_jsx("div", { className: "lc-event-list-item__tags", "aria-label": "Event tags", children: tags.map((tag) => isDisabled ? (_jsx("span", { className: "lc-event-list-item__tag lc-event-list-item__tag--static", children: tag }, tag)) : (_jsx("button", { className: "lc-event-list-item__tag", type: "button", onClick: () => onTagClick?.(tag, event), children: tag }, tag))) })) : null] }));
}
export function LcEventList({ groups, className, headingLevel = 3, stickyHeadings = true, onTagClick, onEventClick, onVenueClick, onSeriesClick, linkTarget, linkRel }) {
    const Heading = `h${headingLevel}`;
    return (_jsx("div", { className: classNames('lc-event-list', stickyHeadings && 'lc-event-list--sticky-headings', className), children: groups.map((group) => (_jsxs("section", { className: "lc-event-list__group", children: [_jsx(Heading, { className: "lc-event-list__heading", children: group.heading }), _jsx("div", { className: "lc-event-list__items", role: "list", "aria-label": group.heading, children: group.events.map((event, index) => (_jsx(LcEventListItem, { event: event, onClick: () => onEventClick?.(event), onVenueClick: () => onVenueClick?.(event), onSeriesClick: () => onSeriesClick?.(event), onTagClick: onTagClick, linkTarget: linkTarget, linkRel: linkRel }, `${group.id}-${event.href ?? event.title}-${index}`))) })] }, group.id))) }));
}
export function LcHomepageBand({ title, actionLabel, actionHref, className, children }) {
    return (_jsxs("section", { className: classNames('lc-homepage-band', className), children: [title ? _jsx(LcSectionHeading, { title: title, actionLabel: actionLabel, actionHref: actionHref }) : null, children] }));
}
function slugifyForId(value) {
    return value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
        .slice(0, 48);
}
//# sourceMappingURL=components.js.map