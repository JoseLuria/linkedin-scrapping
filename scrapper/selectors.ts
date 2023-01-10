export interface Selector {
  name: string
  selector: string
  attr?: string
}

export const SELECTOR_CONTAINER = '.jobs-search__results-list li'

export const PROPERTIES_SELECTORS: Selector[] = [
  {
    name: 'title',
    selector: '.base-search-card__title'
  },
  {
    name: 'company',
    selector: '.hidden-nested-link'
  },
  {
    name: 'location',
    selector: '.job-search-card__location'
  },
  {
    name: 'image',
    selector: '.base-card .search-entity-media img',
    attr: 'data-delayed-url'
  },
  {
    name: 'link',
    selector: '.base-card__full-link',
    attr: 'href'
  }
]
