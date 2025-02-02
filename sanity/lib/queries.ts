import { groq } from 'next-sanity'

export const homePageQuery = groq`
  *[_type == "home"][0]{
    _id,
    overview,
    title,
    "upcomingEvents": *[_type == "event" && dateTime(endDateTime) > dateTime(now())] {
      name,
      "slug": slug.current,
      briefDescription,
      coverGraphic,
      startDateTime,
      endDateTime,
      location,
      category-> {
        _id,
        name,
      }
    } | order(startDateTime asc),
    "sponsors": *[_type == "sponsor" ] {
      name,
      logo,
      description,
      websiteLink,
    } | order(name asc)
  }
`

export const upcomingEventsQuery = groq`
  *[_type == "event" && dateTime(endDateTime) > dateTime(now())] {
    name,
    "slug": slug.current,
    briefDescription,
    coverGraphic,
    startDateTime,
    endDateTime,
    location,
    category-> {
      _id,
      name,
    }
  } | order(startDateTime asc)
`

export const teamsQuery = groq`
  *[_type == "team"] {
    name,
    "slug": slug.current,
    description,
  } | order(name asc)
`

export const sponsorsQuery = groq`
  *[_type == "sponsor" ] {
    name,
    logo,
    description,
    websiteLink,
  } | order(name asc)
`

export const applyPageQuery = groq`
  *[_type == "position" && acceptingApplications] {
    _id,
    name,
    // "slug": slug.current,
    team-> {
      name
    },
    campuses[]->{
      name
    },
    expectedHoursPerWeek {
      min,
      max
    },
    description,
  } | order(name asc)
`

export const positionByIdQuery = groq`
  *[_type == "position" && _id == $slug][0] {
    name,
    team-> {
      name
    },
    campuses[]->{
      name
    },
    expectedHoursPerWeek {
      min,
      max
    },
    description,
    responsibilities,
    requirements,
    acceptingApplications
  }
`

export const eventPaths = groq`
  *[_type == "event" && slug.current != null].slug.current
`

export const eventBySlugQuery = groq`
  *[_type == "event" && slug.current == $slug][0] {
    name,
    "slug": slug.current,
    briefDescription,
    coverGraphic,
    startDateTime,
    endDateTime,
    location,
    category-> {
      _id,
      name,
    }
  }
`

export const teamPaths = groq`
  *[_type == "team" && slug.current != null].slug.current
`

export const teamBySlugQuery = groq`
  *[_type == "team" && slug.current == $slug][0] {
    name,
    "slug": slug.current,
    description,
  }
`

export const teamsPageQuery = groq`
  *[_type == "team"] {
    name,
    "slug": slug.current,
    description,
  } | order(name asc)
`

export const aboutPageQuery = groq`
  {
    "leaders": *[_type == "member" && position->isLeadership] {
      _id,
      name,
      "positionName": position->name,
      position->{
        name,
      },
      image,
    } | order(positionName asc),
    "campusesCount": count(*[_type == "campus"]),
    "teamsCount": count(*[_type == "team"]),
    "membersCount": count(*[_type == "member"])
  }
`

export const membersPageQuery = groq`
  {
    "teams": *[_type == "team"] {
      name,
      "slug": slug.current,
      description,
    } | order(name asc),
    "members": *[_type == "member"] {
      name,
      position->{
        name,
        team->{
          "slug": slug.current,
        },
      },
      image,
      major,
      hometown,
      goToIceCream,
      team->{
        "slug": slug.current,
      },
      campus->{
        name,
      },
    } | order(name asc, team asc)
  }
`

export const homePageTitleQuery = groq`
  *[_type == "home"][0].title
`

export const pagesBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    body,
    overview,
    title,
    "slug": slug.current,
  }
`

export const pagePaths = groq`
  *[_type == "page" && slug.current != null].slug.current
`

export const settingsQuery = groq`
  *[_type == "settings"][0]{
    footer,
    menuItems[]->{
      _type,
      "slug": slug.current,
      title
    },
    ogImage,
  }
`
