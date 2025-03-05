'use client';
import { useState } from 'react';

// Inline styles that were previously in pricing.module.css
const styles = {
    fancyOverlay: `
    --primary-light: theme('colors.stone.400');
    --primary-main: theme('colors.stone.500');
    --primary-darker: theme('colors.stone.900');
    --secondary-light: theme('colors.gray.400');
    --secondary-main: theme('colors.gray.500');
    --secondary-darker: theme('colors.gray.900');
    --glass-color: 107, 114, 128;

    &::after {
      --maximum-opacity: 0.1;
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        54deg,
        var(--primary-light) var(--fancy-y) var(--fancy-y),
        var(--secondary-light) var(--fancy-x) var(--fancy-x)
      );
      animation: roundabout 10s ease-in-out both;
    }

    @property --fancy-x {
      syntax: '<percentage>';
      inherits: true;
      initial-value: 0%;
    }
    @property --fancy-y {
      syntax: '<percentage>';
      inherits: true;
      initial-value: 0%;
    }
    @keyframes roundabout {
      0% {
        --fancy-x: 60%;
        --fancy-y: 20%;
        opacity: 0;
      }
      5% {
        --fancy-x: 80%;
        --fancy-y: 10%;
      }
      20% {
        --fancy-x: 95%;
        --fancy-y: 5%;
        opacity: var(--maximum-opacity);
      }
      100% {
        --fancy-x: 100%;
        --fancy-y: 0%;
        opacity: var(--maximum-opacity);
      }
    }
  `,
    fancyGlass: `
    background: radial-gradient(
        63.94% 63.94% at 50% 0%,
        rgba(var(--glass-color), 0.12) 0%,
        rgba(var(--glass-color), 0) 100%
      ),
      rgba(var(--glass-color), 0.01);
    backdrop-filter: blur(6px);
    position: relative;
    overflow: hidden;

    &:before {
      content: '';
      width: calc(100% + 2px);
      height: calc(100% + 2px);
      background: linear-gradient(
          rgba(var(--glass-color), 0.12) 0%,
          rgba(var(--glass-color), 0) 74.04%
        ),
        linear-gradient(
          0deg,
          rgba(var(--glass-color), 0.04),
          rgba(var(--glass-color), 0.04)
        );
      position: absolute;
      top: -1px;
      left: -1px;
      mask: url("data:image/svg+xml,%3Csvg width='402' height='202' viewBox='0 0 402 202' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0.5' y='0.5' width='401' height='201' rx='9.5' /%3E%3C/svg%3E%0A");
      pointer-events: none;
    }
  `,
    fancyGlassContrast: `
    background: radial-gradient(
        63.94% 63.94% at 50% 0%,
        rgba(var(--glass-color), 0.12) 0%,
        rgba(var(--glass-color), 0) 100%
      ),
      rgba(var(--glass-color), 0.01);
    backdrop-filter: blur(6px);
    position: relative;
    overflow: hidden;

    &:after {
      content: '';
      width: calc(100% + 2px);
      height: calc(100% + 2px);
      background: var(--primary-darker);
      opacity: 0.1;
      position: absolute;
      top: -1px;
      left: -1px;
      z-index: -1;
    }

    &:before {
      content: '';
      width: calc(100% + 2px);
      height: calc(100% + 2px);
      background: linear-gradient(
          rgba(var(--glass-color), 0.12) 0%,
          rgba(var(--glass-color), 0) 74.04%
        ),
        linear-gradient(
          0deg,
          rgba(var(--glass-color), 0.04),
          rgba(var(--glass-color), 0.04)
        );
      position: absolute;
      top: -1px;
      left: -1px;
      mask: url("data:image/svg+xml,%3Csvg width='402' height='202' viewBox='0 0 402 202' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0.5' y='0.5' width='401' height='201' rx='9.5' /%3E%3C/svg%3E%0A");
      pointer-events: none;
    }
  `,
};

export interface PricingTierFrequency {
    id: string;
    value: string;
    label: string;
    priceSuffix: string;
}

export interface PricingTier {
    name: string;
    id: string;
    href: string;
    discountPrice: string | Record<string, string>;
    price: string | Record<string, string>;
    description: string | React.ReactNode;
    features: string[];
    featured?: boolean;
    highlighted?: boolean;
    cta: string;
    soldOut?: boolean;
}

export const frequencies: PricingTierFrequency[] = [
    { id: '1', value: '1', label: '', priceSuffix: '' },
];

export const tiers: PricingTier[] = [
    {
        name: 'Basic',
        id: '0',
        href: '/subscribe',
        price: { '1': '$80 - $100' },
        discountPrice: { '1': '' },
        description: `Ideal for small businesses or individuals needing a simple, responsive website setup.`,
        features: [
            `Single-page or basic multi-page site`,
            `Functional & mobile-friendly design`,
            `Content upload (if applicable)`,
            `Limited revisions`,
            `Delivery in 3-5 days`,
        ],
        featured: true,
        highlighted: false,
        soldOut: false,
        cta: `Get Started`,
    },
    {
        name: 'Standard',
        id: '1',
        href: '/subscribe',
        price: { '1': '$250 - $300' },
        discountPrice: { '1': '' },
        description: `Perfect for businesses needing a fully functional website with added features.`,
        features: [
            `3-5 pages with custom design`,
            `E-commerce functionality (if applicable)`,
            `Payment gateway integration`,
            `Plugin & extension setup`,
            `Unlimited revisions`,
            `Delivery in 5-7 days`,
        ],
        featured: false,
        highlighted: false,
        soldOut: false,
        cta: `Get started`,
    },
    {
        name: 'Premium',
        id: '2',
        href: '/contact-us',
        price: { '1': '$450 - $600' },
        discountPrice: { '1': '' },
        description: `Best for businesses requiring advanced features, branding, and seamless integrations.`,
        features: [
            `5-10 pages with custom assets`,
            `Shopify/WordPress/WooCommerce setup`,
            `Branding, SEO, and performance optimization`,
            `Custom API integrations`,
            `Ongoing support available`,
            `Delivery in 7-14 days`,
        ],
        featured: true,
        highlighted: false,
        soldOut: false,
        cta: `Get started`,
    },
];

const CheckIcon = ({ className }: { className?: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={cn('w-6 h-6', className)}
        >
            <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clipRule="evenodd"
            />
        </svg>
    );
};

const cn = (...args: Array<string | boolean | undefined | null>) =>
    args.filter(Boolean).join(' ');

export default function PricingPage() {
    const [frequency, setFrequency] = useState(frequencies[0]);

    const bannerText = '';

    // Helper functions to safely access price and discountPrice
    const getPrice = (tier: PricingTier, frequencyValue: string): string => {
        if (typeof tier.price === 'string') {
            return tier.price;
        }
        return tier.price[frequencyValue] || '';
    };

    const getDiscountPrice = (tier: PricingTier, frequencyValue: string): string => {
        if (typeof tier.discountPrice === 'string') {
            return tier.discountPrice;
        }
        return tier.discountPrice[frequencyValue] || '';
    };

    return (
        <div
            className={cn('flex flex-col w-full items-center', styles.fancyOverlay)}
        >
            <div className="w-full mt-5flex flex-col items-center">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center">
                    <div className="w-full lg:w-auto mx-auto max-w-4xl lg:text-center">
                        <h1 className="text-black text-center  text-4xl font-semibold max-w-xs sm:max-w-none md:text-6xl !leading-tight">
                            Our Pricing
                        </h1>

                        <p className="text-black mt-6 md:text-xl lg:text-center max-w-prose">
                            No hidden fees. No long-term commitments. Just high-quality web development tailored to your
                            needs.
                        </p>
                    </div>

                    {bannerText ? (
                        <div className="w-full lg:w-auto flex justify-center my-4">
                            <p className="w-full px-4 py-3 text-xs bg-stone-100 text-black dark:bg-stone-300/30 dark:text-white/80 rounded-xl">
                                {bannerText}
                            </p>
                        </div>
                    ) : null}

                    {frequencies.length > 1 ? (
                        <div className="mt-16 flex  justify-center">
                            <div
                                role="radiogroup"
                                className="grid gap-x-1  rounded-full p-1 text-center text-xs font-semibold leading-5 bg-white dark:bg-black ring-1 ring-inset ring-gray-200/30 dark:ring-gray-800"
                                style={{
                                    gridTemplateColumns: `repeat(${frequencies.length}, minmax(0, 1fr))`,
                                }}
                            >
                                <p className="sr-only">Payment frequency</p>
                                {frequencies.map((option) => (
                                    <label
                                        className={cn(
                                            frequency.value === option.value
                                                ? 'bg-stone-500/90 text-white dark:bg-stone-900/70 dark:text-white/70'
                                                : 'bg-transparent text-gray-500 hover:bg-stone-500/10',
                                            'cursor-pointer rounded-full px-2.5 py-2 transition-all',
                                        )}
                                        key={option.value}
                                        htmlFor={option.value}
                                    >
                                        {option.label}

                                        <button
                                            value={option.value}
                                            id={option.value}
                                            className="hidden"
                                            role="radio"
                                            aria-checked={frequency.value === option.value}
                                            onClick={() => {
                                                setFrequency(
                                                    frequencies.find(
                                                        (f) => f.value === option.value,
                                                    ) as PricingTierFrequency,
                                                );
                                            }}
                                        >
                                            {option.label}
                                        </button>
                                    </label>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="mt-12" aria-hidden="true"></div>
                    )}

                    <div
                        className={cn(
                            'isolate mx-auto mt-4 mb-28 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none select-none',
                            tiers.length === 2 ? 'lg:grid-cols-2' : '',
                            tiers.length === 3 ? 'lg:grid-cols-3' : '',
                        )}
                    >
                        {tiers.map((tier) => (
                            <div
                                key={tier.id}
                                className={cn(
                                    tier.featured
                                        ? '!bg-gray-900 ring-gray-900 dark:!bg-gray-100 dark:ring-gray-100'
                                        : 'bg-white dark:bg-gray-900/80 ring-gray-300/70 dark:ring-gray-700',
                                    'max-w-xs ring-1 rounded-3xl p-8 xl:p-10 transition-all transform hover:scale-105 hover:shadow-lg',
                                    tier.highlighted ? styles.fancyGlassContrast : '',
                                )}
                            >
                                <h3
                                    id={tier.id}
                                    className={cn(
                                        tier.featured ? 'text-white dark:text-black' : 'text-black dark:text-white',
                                        'text-2xl font-bold tracking-tight',
                                    )}
                                >
                                    {tier.name}
                                </h3>
                                <p
                                    className={cn(
                                        tier.featured
                                            ? 'text-gray-300 dark:text-gray-500'
                                            : 'text-gray-600 dark:text-gray-400',
                                        'mt-4 text-sm leading-6',
                                    )}
                                >
                                    {tier.description}
                                </p>
                                <p className="mt-6 flex items-baseline gap-x-1">
                                    <span
                                        className={cn(
                                            tier.featured ? 'text-white dark:text-black' : 'text-black dark:text-white',
                                            'text-4xl font-bold tracking-tight',
                                            getDiscountPrice(tier, frequency.value) ? 'line-through' : '',
                                        )}
                                    >
                                        {getPrice(tier, frequency.value)}
                                    </span>

                                    <span
                                        className={cn(
                                            tier.featured ? 'text-white dark:text-black' : 'text-black dark:text-white',
                                        )}
                                    >
                                        {getDiscountPrice(tier, frequency.value)}
                                    </span>

                                    {typeof tier.price !== 'string' ? (
                                        <span
                                            className={cn(
                                                tier.featured
                                                    ? 'text-gray-300 dark:text-gray-500'
                                                    : 'dark:text-gray-400 text-gray-600',
                                                'text-sm font-semibold leading-6',
                                            )}
                                        >
                                            {frequency.priceSuffix}
                                        </span>
                                    ) : null}
                                </p>
                                <a
                                    href={tier.href}
                                    aria-describedby={tier.id}
                                    className={cn(
                                        'flex mt-6 shadow-sm',
                                        tier.soldOut ? 'pointer-events-none' : '',
                                    )}
                                >
                                    <button
                                        disabled={tier.soldOut}
                                        className={cn(
                                            'w-full inline-flex items-center justify-center font-medium ring-offset-background hover:opacity-80 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-black dark:text-white h-12 rounded-full px-6 sm:px-10 text-md',
                                            tier.featured || tier.soldOut ? 'grayscale' : '',
                                            !tier.highlighted && !tier.featured
                                                ? 'bg-gray-100 dark:bg-gray-600 border border-solid border-gray-300 dark:border-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                                                : 'bg-stone-300/70 text-stone-foreground hover:bg-stone-400/70 dark:bg-stone-700 dark:hover:bg-stone-800/90',
                                            tier.featured ? '!bg-gray-100 dark:!bg-black' : '',
                                        )}
                                    >
                                        {tier.soldOut ? 'Sold out' : tier.cta}
                                    </button>
                                </a>
                                <h4 className={cn(
                                    tier.featured
                                        ? 'text-white dark:text-black'
                                        : 'text-black dark:text-white',
                                    'mt-6  text-md pb-[-20px]  xl:mt-10',
                                )}>What&apos;s included:</h4>
                                <ul
                                    className={cn(
                                        tier.featured
                                            ? 'text-white dark:text-black'
                                            : 'text-black dark:text-white',
                                        'mt-3 space-y-3 text-sm leading-6 xl:mt-10',
                                    )}
                                >
                                    {tier.features.map((feature) => (
                                        <li key={feature} className="flex gap-x-3">
                                            <CheckIcon
                                                className={cn(
                                                    tier.featured ? 'text-white dark:text-black' : '',
                                                    tier.highlighted
                                                        ? 'text-stone-500'
                                                        : 'text-gray-500',

                                                    'h-6 w-5 flex-none',
                                                )}
                                                aria-hidden="true"
                                            />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}