const themes = [
  "Cerulean",
  "Gray",
  "Lizard",
  "Mauve",
  "Orange",
  "Saffron",
  "Salmon",
  "Salsa",
  "Straw",
  "Sunglow",
  "Turquoise"
]

// hours
const schedule = (name, id) => {
  return {
    "id": id,
    "name": name,
    "type": "Array",
    "localized": false,
    "required": false,
    "validations": [
      {
        "size": {
          "min": 2,
          "max": 2
        }
      }
    ],
    "disabled": false,
    "omitted": false,
    "items": {
      "type": "Symbol",
      "validations": [
        {
          "in": [
            "07:00",
            "08:00",
            "09:00",
            "10:00",
            "11:00",
            "12:00",
            "13:00",
            "14:00",
            "15:00",
            "16:00",
            "17:00",
            "18:00",
            "19:00",
            "20:00",
            "21:00",
            "22:00",
            "23:00",
            "Closed"
          ]
        }
      ]
    }
  }
}
const monday = schedule('Monday', 'monday')
const tuesday = schedule('Tuesday', 'tuesday')
const wednesday = schedule('Wednesday', 'wednesday')
const thursday = schedule('Thursday', 'thursday')
const friday = schedule('Friday', 'friday')
const saturday = schedule('Saturday', 'saturday')
const sunday = schedule('Sunday', 'sunday')
const days = [monday, tuesday, wednesday, thursday, friday, saturday, sunday]

// short text (required field)
const shortTextRequired = (name, id) => {
  return  {
    "id": id,
    "name": name,
    "type": "Symbol",
    "localized": false,
    "required": true,
    "validations": [],
    "disabled": false,
    "omitted": false
  }
}
const cta = shortTextRequired('CTA', 'cta')
const fullName = shortTextRequired('Full Name', 'fullName')
const gridHeading = shortTextRequired('Grid Heading', 'gridHeading')
const nameRepeatable = shortTextRequired('Name', 'name')
const surname = shortTextRequired('Surname', 'surname')
const value =  shortTextRequired('Value', 'value')

// unique field
const unique = (name, id) => {
  return {
    "id": id,
    "name": name,
    "type": "Symbol",
    "localized": false,
    "required": true,
    "validations": [
      {
        "unique": true
      }
    ],
    "disabled": false,
    "omitted": false
  }
}
const name = unique('name', 'Name')
const slug = unique('slug', 'Slug')

// short text (optional field)
const shortTextOptional = (id, name) => {
  return {
    "id": id,
    "name": name,
    "type": "Symbol",
    "localized": false,
    "required": false,
    "validations": [],
    "disabled": false,
    "omitted": false
  }
}
const descriptionShort = shortTextOptional('description', 'Description')
const externalUrl = shortTextOptional('externalUrl', 'External URL')
const eyebrow = shortTextOptional('eyebrow', 'Eyebrow')
const givenNames = shortTextOptional('givenNames', 'Given Names')
const heading = shortTextOptional('heading', 'Given Heading')
const heroCaption = shortTextOptional('heroCaption', 'Hero Caption')
const subheading = shortTextOptional('subheading', 'Subheading')
const subtitle = shortTextOptional('subtitle', 'Subtitle')
const title = shortTextOptional('title', 'Title')
const viewCollectionCta = shortTextOptional('viewCollectionCta', 'View Collection CTA')
const viewSimilarCta = shortTextOptional('viewSimilarCta', 'View Similar CTA')

// long text
const longText = (id, name, required = false, max = null) => {
  return {
    "id": id,
    "name": name,
    "type": "Text",
    "localized": false,
    "required": required,
    "validations": max ? [
      {
        "size": {
          "max": max
        }
      }
    ] : [],
    "disabled": false,
    "omitted": false
  }
}
const body = longText('body', 'Body')
const descriptionLong = longText('description', 'Description', false, 1000)
const descriptionMedium = longText('description', 'Description', false, 500)
const details = longText('details', 'Details')
const finePrint = longText('finePrint', 'Fine Print')
const moreInfo = longText('moreInfo', 'More Info')
const postface = longText('postface', 'Postface')
const preface = longText('preface', 'Preface')
const quote = longText('quote', 'Quotation')
const titleBreaking = longText('title', 'Title', true, 250)
const whatToExpect = longText('whatToExpect', 'What to Expect')
const location = longText('location', 'Location', false, 250)

// booleans
const boolean = (id, name, b) => {
  return {
    "type": "Boolean",
    "id": id,
    "name": name,
    "localized": false,
    "required": false,
    "validations": [],
    "defaultValue": {
      "en-US": b
    },
    "disabled": false,
    "omitted": false
  }
}
const invertColors = boolean('invertColors', 'Invert Colors', false)
const locationIsAddress = boolean('locationIsAddress', 'Location Is Address', false)
const themeBackground = boolean('themeBackground', 'Theme Background', false)
const splitView = boolean('splitView', 'Split View', true)
const isArtist = boolean('isArtist', 'Is Artist', true)
const showArrow = boolean('showArrow', 'Show Arrow', true)

// link single content type
const linkSingleContentType = (id, name, contentType, required = false) => {
  return {
    "id": id,
    "name": name,
    "type": "Link",
    "localized": false,
    "required": required,
    "validations": [
      {
        "linkContentType": [
          contentType
        ]
      }
    ],
    "disabled": false,
    "omitted": false,
    "linkType": "Entry"
  }
}
const hero = linkSingleContentType('hero', 'Hero', 'heroSection', true)
const seo = linkSingleContentType('seo', 'SEO', 'seo')
const button = linkSingleContentType('button', 'Button', 'button')
const contentBlock = linkSingleContentType('contentBlock', 'Content Block', 'contentBlock')
const attribution = linkSingleContentType('attribution', 'Attribution', 'person')

// link array content type
const contentTypeArray = (id, name, types: string[], max = 100, required = false) => {
  return {
    "id": id,
    "name": name,
    "type": "Array",
    "localized": false,
    "required": required,
    "validations": [
      {
        "size": {
          "max": max
        }
      }
    ],
    "disabled": false,
    "omitted": false,
    "items": {
      "type": "Link",
      "validations": [
        {
          "linkContentType": [
            ...types
          ]
        }
      ],
      "linkType": "Entry"
    }
  }
}
const buttonArray = contentTypeArray('buttons', 'Buttons', ['button'], 3)
const content = contentTypeArray('content', 'Content', ['collection', 'contentBlock', 'event', 'exhibition'], 10, true)
const components = contentTypeArray('components', 'Components', ['directory'], 10)
const directory = contentTypeArray('list', 'List', ['person'])
const featuredArtwork = contentTypeArray('featuredArtwork', 'Featured Artwork', ['artwork'], 10)
const grid = contentTypeArray('grid', 'Grid', ['person']) // todo: why do we have directory and grid both with person arrays?
const navSlides = contentTypeArray('navSlides', 'Nav Slides', ['textSlide'], 10)
const pageSlides = contentTypeArray('pageSlides', 'Page Slides', ['artwork', 'collection', 'exhibition', 'page'])
const preview = contentTypeArray('preview', 'Preview', ['artwork'], 10)
const relatedArtwork = contentTypeArray('relatedArtwork', 'Related Artwork', ['artwork'])
const sections = contentTypeArray('sections', 'Sections', ["contentBlock", 'contentGroupSection', 'heroSection', 'heroSlideshow', 'hoursAndLocationHero', 'slideshowSection', 'statGroupSection'], 15)
const slidesHero = contentTypeArray('slides', 'Slides', ['heroSlide'])
const stats = contentTypeArray('stats', 'Stats', ['statistic'], 5)
const similarArtwork = contentTypeArray('similarArtwork', 'Similar Artwork', ['artwork'], 10)

// link single image
const linkSingleImage = (id, name) => {
  return {
    "id": id,
    "name": name,
    "type": "Link",
    "localized": false,
    "required": false,
    "validations": [
      {
        "linkMimetypeGroup": [
          "image"
        ]
      }
    ],
    "disabled": false,
    "omitted": false,
    "linkType": "Asset"
  }
}
const fullImage = linkSingleImage('fullImage', 'Full Image')
const heroImage = linkSingleImage('heroImage', 'Hero Image')
const image = linkSingleImage('image', 'Image')
const imageLeft = linkSingleImage('imageLeft', 'Left Image')
const imageRight = linkSingleImage('imageRight', 'Right Image')
const sectionImage = linkSingleImage('sectionImage', 'Section Image')
const thumbnail = linkSingleImage('thumbnail', 'Thumbnail')
const titleImage = linkSingleImage('titleImage', 'Title Image')

// date
const date = (id, name) => {
  return {
    "id": id,
    "name": name,
    "type": "Date",
    "localized": false,
    "required": false,
    "validations": [],
    "disabled": false,
    "omitted": false
  }
}
const endDate = date('endDate', 'End Date')
const startDate = date('startDate', 'Start Date')

// basic image
const basicImage = (id, name) => {
  return {
    "id": id,
    "name": name,
    "type": "Link",
    "localized": false,
    "required": false,
    "validations": [
      {
        "linkMimetypeGroup": [
          "image"
        ]
      }
    ],
    "disabled": false,
    "omitted": false,
    "linkType": "Asset"
  }
}
const mainImage = basicImage('mainImage', 'Main Image')

// image array
const imageArray = (id, name, max = null) => {
  return {
    "id": id,
    "name": name,
    "type": "Array",
    "localized": false,
    "required": false,
    "validations": max ? [
        {
          "size": {
            "max": max
          }
        }
      ]
      : [],
    "disabled": false,
    "omitted": false,
    "items": {
      "type": "Link",
      "validations": [
        {
          "linkMimetypeGroup": [
            "image"
          ]
        }
      ],
      "linkType": "Asset"
    }
  }
}
const gallery = imageArray('gallery', 'Gallery')
const slidesImage = imageArray('slides', 'Slides')
const images = imageArray('images', 'Images', 2)

// select
const select = (id, name, options = [], defaultValue = null) => {
  const defaults = defaultValue ? {
    "defaultValue": {
      "en-US": defaultValue
    }
  } : {}
  return {
    "id": id,
    "name": name,
    "type": "Symbol",
    "localized": false,
    "required": !!defaultValue,
    "validations": [
      {
        "in": options
      }
    ],
    ...defaults,
    "disabled": false,
    "omitted": false
  }
}
const icon = select('icon', 'Icon', ['Arrow', 'External', 'None'], 'Arrow')
const borders = select('borders', 'Borders', ['All', 'Bottom', 'none'], 'All')
const theme = select('theme', 'Theme', themes)

// everything below this line are special types

// assets
const audio = {
  "id": "audio",
  "name": "Audio",
  "type": "Link",
  "localized": false,
  "required": false,
  "validations": [
    {
      "linkMimetypeGroup": [
        "audio"
      ]
    }
  ],
  "disabled": false,
  "omitted": false,
  "linkType": "Asset"
}
const videos = {
  "id": "videos",
  "name": "Videos",
  "type": "Array",
  "localized": false,
  "required": false,
  "validations": [
    {
      "size": {
        "max": 2
      }
    }
  ],
  "disabled": false,
  "omitted": false,
  "items": {
    "type": "Link",
    "validations": [
      {
        "linkMimetypeGroup": [
          "video"
        ]
      }
    ],
    "linkType": "Asset"
  }
}

// with regex
const eventId = {
  "id": "eventId",
  "name": "Event ID",
  "type": "Symbol",
  "localized": false,
  "required": true,
  "validations": [
    {
      "unique": true
    },
    {
      "regexp": {
        "pattern": "^[0-9]+(\\.[0-9]*)?$",
        "flags": null
      }
    }
  ],
  "disabled": false,
  "omitted": false
}
const url = {
  "id": "link",
  "name": "Link",
  "type": "Symbol",
  "localized": false,
  "required": false,
  "validations": [
    {
      "regexp": {
        "pattern": "^(ftp|http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-/]))?$",
        "flags": null
      }
    }
  ],
  "disabled": false,
  "omitted": false
}

// rich text field
const richText = {
  "id": "text",
  "name": "Text",
  "type": "RichText",
  "localized": false,
  "required": false,
  "validations": [
    {
      "enabledMarks": [
        "bold",
        "italic",
        "underline",
        "code"
      ],
      "message": "Only bold, italic, underline, and code marks are allowed"
    },
    {
      "enabledNodeTypes": [
        "heading-1",
        "heading-2",
        "heading-3",
        "heading-4",
        "heading-5",
        "heading-6",
        "ordered-list",
        "unordered-list",
        "hr",
        "blockquote",
        "embedded-entry-block",
        "embedded-asset-block",
        "table",
        "hyperlink",
        "entry-hyperlink",
        "asset-hyperlink",
        "embedded-entry-inline"
      ],
      "message": "Only heading 1, heading 2, heading 3, heading 4, heading 5, heading 6, ordered list, unordered list, horizontal rule, quote, block entry, asset, table, link to Url, link to entry, link to asset, and inline entry nodes are allowed"
    },
    {
      "nodes": {}
    }
  ],
  "disabled": true,
  "omitted": true
}

// miscellaneous
const hoursHeading = {
  "id": "hoursHeading",
  "name": "Hours Heading",
  "type": "Symbol",
  "localized": false,
  "required": false,
  "validations": [],
  "defaultValue": {
    "en-US": "Hours"
  },
  "disabled": false,
  "omitted": false
}
const imageRestricted = {
  "id": "image",
  "name": "Image",
  "type": "Link",
  "localized": false,
  "required": false,
  "validations": [
    {
      "linkMimetypeGroup": [
        "image"
      ]
    },
    {
      "assetFileSize": {
        "min": 0,
        "max": 102400
      }
    }
  ],
  "disabled": false,
  "omitted": false,
  "linkType": "Asset"
}
const maxColumns = {
  "id": "maxColumns",
  "name": "Max Columns",
  "type": "Integer",
  "localized": false,
  "required": false,
  "validations": [
    {
      "range": {
        "min": 1,
        "max": 3
      }
    }
  ],
  "defaultValue": {
    "en-US": 1
  },
  "disabled": false,
  "omitted": false
}
const tags = {
  "id": "tags",
  "name": "Tags",
  "type": "Array",
  "localized": false,
  "required": false,
  "validations": [],
  "disabled": false,
  "omitted": false,
  "items": {
    "type": "Symbol",
    "validations": []
  }
}

// need to specify app within contentful
const art = {
  "id": "art",
  "name": "Art",
  "type": "Object",
  "localized": false,
  "required": true,
  "validations": [],
  "disabled": false,
  "omitted": false
}
const tessituraReference = {
  "id": "tessituraReference",
  "name": "Tessitura Reference",
  "type": "Object",
  "localized": false,
  "required": false,
  "validations": [],
  "disabled": false,
  "omitted": false
}

export default {
  art,
  attribution,
  audio,
  body,
  borders,
  button,
  buttonArray,
  components,
  content,
  contentBlock,
  cta,
  days,
  descriptionLong,
  descriptionMedium,
  descriptionShort,
  details,
  directory,
  endDate,
  eventId,
  externalUrl,
  eyebrow,
  featuredArtwork,
  finePrint,
  friday,
  fullImage,
  fullName,
  gallery,
  givenNames,
  grid,
  gridHeading,
  heading,
  hero,
  heroCaption,
  heroImage,
  hoursHeading,
  icon,
  image,
  imageLeft,
  imageRestricted,
  imageRight,
  images,
  invertColors,
  isArtist,
  location,
  locationIsAddress,
  mainImage,
  maxColumns,
  monday,
  moreInfo,
  name,
  nameRepeatable,
  navSlides,
  pageSlides,
  postface,
  preface,
  preview,
  quote,
  relatedArtwork,
  richText,
  saturday,
  sectionImage,
  sections,
  seo,
  showArrow,
  similarArtwork,
  slidesHero,
  slidesImage,
  slug,
  splitView,
  startDate,
  stats,
  subheading,
  sunday,
  surname,
  subtitle,
  tags,
  tessituraReference,
  theme,
  themeBackground,
  thumbnail,
  thursday,
  title,
  titleBreaking,
  titleImage,
  tuesday,
  url,
  value,
  videos,
  viewCollectionCta,
  viewSimilarCta,
  wednesday,
  whatToExpect,
}
