import type { PortableTextBlock } from '@portabletext/types'
import { Url } from 'next/dist/shared/lib/router/router'
import type { Image } from 'sanity'

export interface MenuItem {
  _type: string
  slug?: string
  title?: string
}

export interface MilestoneItem {
  description?: string
  duration?: {
    start?: string
    end?: string
  }
  image?: Image
  tags?: string[]
  title?: string
}

export interface Range {
  min?: number
  max?: number
}

export interface Campus {
  name: string
}

export interface Team {
  name: string
}

export interface EventCategory {
  name: string
}

// Page payloads

export interface HomePagePayload {
  footer?: PortableTextBlock[]
  overview?: PortableTextBlock[]
  title?: string
  upcomingEvents: UpcomingEventPayload[]
  sponsors: SponsorPayload[]
  teams: TeamsPayload[]
}

export interface PagePayload {
  body?: PortableTextBlock[]
  name?: string
  overview?: PortableTextBlock[]
  title?: string
  slug?: string
}

export interface SettingsPayload {
  footer?: PortableTextBlock[]
  menuItems?: MenuItem[]
  ogImage?: Image
}

export interface UpcomingEventPayload {
  name: string
  slug: string
  briefDescription?: string
  coverGraphic?: Image
  category?: EventCategory
  campuses: Campus[]
  startDateTime: string
  endDateTime: string
  location: string
}

export interface SponsorPayload {
  name: string
  logo: Image
  description?: string
  websiteLink?: Url
}

export interface PositionPayload {
  name: string
  // slug: string
  team: Team
  campuses: Campus[]
  expectedHoursPerWeek: Range
  description: string
  responsibilities: PortableTextBlock[]
  requirements: PortableTextBlock[]
}

export interface TeamsPayload {
name: string
slug: string
description: string
}
