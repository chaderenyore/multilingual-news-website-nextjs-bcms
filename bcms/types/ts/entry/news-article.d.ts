import type { BCMSEntryContentParsed } from '../content';
import type { BCMSEntryStatuses } from '../status';

export interface NewsArticleEntryMetaItem {
    title: string;
    slug: string;
    subheading?: string;
}

export interface NewsArticleEntryMeta {
    en?: NewsArticleEntryMetaItem;
    yo?: NewsArticleEntryMetaItem;
}

export interface NewsArticleEntry {
    _id: string;
    createdAt: number;
    updatedAt: number;
    instanceId: string;
    templateId: string;
    userId: string;
    statuses: BCMSEntryStatuses;
    meta: NewsArticleEntryMeta;
    content: BCMSEntryContentParsed;
}