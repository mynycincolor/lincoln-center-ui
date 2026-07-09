import type { CSSProperties, MouseEventHandler, ReactNode, SyntheticEvent } from 'react';
import type { LcBaseProps, LcEventCardVariant, LcEventSummary, LcNavItem, LcShelf } from './types';

function classNames(...values: Array<string | false | null | undefined>): string {
  return values.filter(Boolean).join(' ');
}

type DataAttributes = Record<string, string | number | undefined>;

export interface LcProviderProps extends LcBaseProps {
  surface?: 'dark' | 'light';
}

export function LcProvider({ children, className, surface = 'dark' }: LcProviderProps) {
  return <div className={classNames('lc-ui', `lc-ui--${surface}`, className)}>{children}</div>;
}

export interface LcButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'light' | 'dark' | 'outline';
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  ariaLabel?: string;
  trackingAttributes?: DataAttributes;
}

export function LcButton({
  children,
  href,
  variant = 'primary',
  className,
  onClick,
  ariaLabel,
  trackingAttributes
}: LcButtonProps) {
  const buttonClassName = classNames('lc-button', `lc-button--${variant}`, className);

  if (href) {
    return (
      <a className={buttonClassName} href={href} aria-label={ariaLabel} onClick={onClick} {...trackingAttributes}>
        {children}
      </a>
    );
  }

  return (
    <button className={buttonClassName} type="button" onClick={onClick} aria-label={ariaLabel} {...trackingAttributes}>
      {children}
    </button>
  );
}

export interface LcChipProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export function LcChip({ label, active = false, onClick }: LcChipProps) {
  return (
    <button className={classNames('lc-chip', active && 'lc-chip--active')} type="button" onClick={onClick}>
      {label}
    </button>
  );
}

export interface LcArrowButtonProps {
  direction: 'previous' | 'next';
  label?: string;
  variant?: 'light' | 'dark';
  disabled?: boolean;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export function LcArrowButton({
  direction,
  label,
  variant = 'light',
  disabled = false,
  className,
  onClick
}: LcArrowButtonProps) {
  const fallbackLabel = direction === 'previous' ? 'Previous' : 'Next';

  return (
    <button
      className={classNames('lc-arrow-button', `lc-arrow-button--${variant}`, className)}
      type="button"
      aria-label={label ?? fallbackLabel}
      disabled={disabled}
      onClick={onClick}
    >
      <span aria-hidden="true">{direction === 'previous' ? '‹' : '›'}</span>
    </button>
  );
}

export interface LcPaginationDotsProps {
  count: number;
  activeIndex: number;
  label?: string;
  className?: string;
  onSelect?: (index: number) => void;
}

export function LcPaginationDots({ count, activeIndex, label = 'Pagination', className, onSelect }: LcPaginationDotsProps) {
  if (count <= 1) {
    return null;
  }

  return (
    <div className={classNames('lc-pagination-dots', className)} aria-label={label} role="group">
      {Array.from({ length: count }, (_, index) => (
        <button
          key={index}
          className="lc-pagination-dot"
          type="button"
          aria-label={`Go to slide ${index + 1}`}
          aria-pressed={index === activeIndex}
          onClick={() => onSelect?.(index)}
        />
      ))}
    </div>
  );
}

export interface LcSectionHeadingProps {
  title: string;
  kicker?: string;
  titleId?: string;
  actionLabel?: string;
  actionHref?: string;
  className?: string;
}

export function LcSectionHeading({ title, kicker, titleId, actionLabel, actionHref, className }: LcSectionHeadingProps) {
  return (
    <div className={classNames('lc-section-heading', className)}>
      <div>
        {kicker ? <p className="lc-section-heading__kicker">{kicker}</p> : null}
        <h2 className="lc-section-heading__title" id={titleId}>
          {title}
        </h2>
      </div>
      {actionLabel && actionHref ? (
        <a className="lc-section-heading__action" href={actionHref}>
          {actionLabel}
        </a>
      ) : null}
    </div>
  );
}

export interface LcMastheadProps {
  brand?: string;
  primaryNav?: LcNavItem[];
  utilityNav?: LcNavItem[];
  className?: string;
}

export function LcMasthead({
  brand = 'Lincoln Center',
  primaryNav = [],
  utilityNav = [],
  className
}: LcMastheadProps) {
  return (
    <header className={classNames('lc-masthead', className)}>
      <a className="lc-masthead__brand" href="/">
        {brand}
      </a>
      <nav className="lc-masthead__nav" aria-label="Primary">
        {primaryNav.map((item) => (
          <a key={item.label} className="lc-masthead__link" href={item.href ?? '#'}>
            {item.label}
            {item.children && item.children.length > 0 ? <span aria-hidden="true">⌄</span> : null}
          </a>
        ))}
      </nav>
      <nav className="lc-masthead__utility" aria-label="Utility">
        {utilityNav.map((item) => (
          <a key={item.label} className="lc-masthead__link" href={item.href ?? '#'}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

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

export function LcEventCard({
  event,
  variant = 'standard',
  className,
  onTagClick,
  onClick,
  onVenueClick,
  onSeriesClick,
  imageOnError,
  linkTarget,
  linkRel,
  titleId,
  describedBy,
  trackingAttributes
}: LcEventCardProps) {
  const href = event.href ?? '#';
  const tags = event.tags ?? [];
  const linkProps = {
    target: linkTarget,
    rel: linkRel,
    'aria-describedby': describedBy,
    onClick,
    ...trackingAttributes
  };

  return (
    <article className={classNames('lc-event-card', `lc-event-card--${variant}`, className)}>
      <a className="lc-event-card__media-link" href={href} aria-label={event.title} {...linkProps}>
        {event.imageSrc ? (
          <img className="lc-event-card__image" src={event.imageSrc} alt={event.imageAlt ?? ''} onError={imageOnError} />
        ) : null}
        <span className="lc-event-card__scrim" aria-hidden="true" />
      </a>
      {tags.length > 0 ? (
        <div className="lc-event-card__tags" aria-label="Event tags">
          {tags.map((tag) => (
            <button key={tag} className="lc-event-card__tag" type="button" onClick={() => onTagClick?.(tag)}>
              {tag}
            </button>
          ))}
        </div>
      ) : null}
      <div className="lc-event-card__copy">
        {event.badge ? (
          <div className="lc-event-card__label-row">
            <span className="lc-event-card__badge">{event.badge}</span>
          </div>
        ) : null}
        {event.seriesTitle ? (
          event.seriesUrl ? (
            <a className="lc-event-card__series" href={event.seriesUrl} target={linkTarget} rel={linkRel} onClick={onSeriesClick}>
              {event.seriesTitle}
            </a>
          ) : (
            <span className="lc-event-card__series">{event.seriesTitle}</span>
          )
        ) : null}
        {event.eyebrow || event.dateLabel ? (
          <span className="lc-event-card__eyebrow">{event.eyebrow ?? event.dateLabel}</span>
        ) : null}
        <a className="lc-event-card__title" href={href} id={titleId} {...linkProps}>
          {event.title}
        </a>
        {event.venue ? (
          event.venueHref ? (
            <a className="lc-event-card__venue" href={event.venueHref} target={linkTarget} rel={linkRel} onClick={onVenueClick}>
              {event.venue}
            </a>
          ) : (
            <span className="lc-event-card__venue">{event.venue}</span>
          )
        ) : null}
      </div>
    </article>
  );
}

export interface LcEditorialShelfProps {
  shelf: LcShelf;
  columns?: number;
  className?: string;
  onTagClick?: (tag: string) => void;
}

export function LcEditorialShelf({ shelf, columns = 4, className, onTagClick }: LcEditorialShelfProps) {
  return (
    <section
      className={classNames('lc-editorial-shelf', className)}
      style={{ '--lc-shelf-columns': columns } as CSSProperties}
    >
      <LcSectionHeading title={shelf.title} actionLabel={shelf.actionLabel} actionHref={shelf.actionHref} />
      <div className="lc-editorial-shelf__rail" role="list" aria-label={shelf.title}>
        {shelf.items.map((item) => (
          <div key={`${shelf.id}-${item.title}`} role="listitem">
            <LcEventCard event={item} variant="feature" onTagClick={onTagClick} />
          </div>
        ))}
      </div>
    </section>
  );
}

export interface LcHomepageBandProps extends LcBaseProps {
  title?: string;
  actionLabel?: string;
  actionHref?: string;
}

export function LcHomepageBand({ title, actionLabel, actionHref, className, children }: LcHomepageBandProps) {
  return (
    <section className={classNames('lc-homepage-band', className)}>
      {title ? <LcSectionHeading title={title} actionLabel={actionLabel} actionHref={actionHref} /> : null}
      {children}
    </section>
  );
}
