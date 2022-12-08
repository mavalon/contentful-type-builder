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

// short text (optional field)
const shortTextOptional = {
  "type": "Symbol",
  "localized": false,
  "required": false,
  "validations": [],
  "disabled": false,
  "omitted": false
}
const longText = {
  "type": "Text",
  "localized": false,
  "required": false,
  "validations": [],
  "disabled": false,
  "omitted": false
}

const common = {
  longText,
  shortTextRequired,
  schedule,
}

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
const attribution = {
  "id": "attribution",
  "name": "Attribution",
  "type": "Link",
  "localized": false,
  "required": false,
  "validations": [
    {
      "linkContentType": [
        "person"
      ]
    }
  ],
  "disabled": false,
  "omitted": false,
  "linkType": "Entry"
}
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
const body = {
  "id": "body",
  "name": "Body",
  ...longText,
}
const borders = {
    "id": "borders",
    "name": "Borders",
    "type": "Symbol",
    "localized": false,
    "required": false,
    "validations": [
      {
        "in": [
          "All",
          "Bottom",
          "None"
        ]
      }
    ],
    "defaultValue": {
      "en-US": "All"
    },
    "disabled": false,
    "omitted": false
  }
const button = {
  "id": "button",
  "name": "Button",
  "type": "Link",
  "localized": false,
  "required": false,
  "validations": [
    {
      "linkContentType": [
        "button"
      ]
    }
  ],
  "disabled": false,
  "omitted": false,
  "linkType": "Entry"
}
const buttonArray = (max) => {
  return  {
    "id": "buttons",
    "name": "Buttons",
    "type": "Array",
    "localized": false,
    "required": false,
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
            "button"
          ]
        }
      ],
      "linkType": "Entry"
    }
  }
}
const components = {
  "id": "components",
  "name": "Components",
  "type": "Array",
  "localized": false,
  "required": false,
  "validations": [],
  "disabled": false,
  "omitted": false,
  "items": {
    "type": "Link",
    "validations": [
      {
        "linkContentType": [
          "directory"
        ]
      }
    ],
    "linkType": "Entry"
  }
}
const content = {
  "id": "content",
  "name": "Content",
  "type": "Array",
  "localized": false,
  "required": true,
  "validations": [
    {
      "size": {
        "max": 10
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
          "collection",
          "contentBlock",
          "event",
          "exhibition"
        ]
      }
    ],
    "linkType": "Entry"
  }
}
const contentBlock = {
  "id": "contentBlock",
  "name": "Content Block",
  "type": "Link",
  "localized": false,
  "required": true,
  "validations": [
    {
      "linkContentType": [
        "contentBlock"
      ]
    }
  ],
  "disabled": false,
  "omitted": false,
  "linkType": "Entry"
}
const description = {
  "id": "description",
  "name": "Description",
  "type": "Text",
  "localized": false,
  "required": false,
  "validations": [
    {
      "size": {
        "max": 500
      }
    }
  ],
  "disabled": false,
  "omitted": false
}
const descriptionLong = {
  "id": "description",
  "name": "Description",
  "type": "Text",
  "localized": false,
  "required": false,
  "validations": [
    {
      "size": {
        "max": 1000
      }
    }
  ],
  "disabled": false,
  "omitted": false
}
const descriptionShort = {
  "id": "description",
  "name": "Description",
  ...shortTextOptional,
}
const details = {
  "id": "details",
  "name": "Details",
  ...longText,
}
const directoryArray =  {
  "id": "list",
  "name": "List",
  "type": "Array",
  "localized": false,
  "required": false,
  "validations": [],
  "disabled": false,
  "omitted": false,
  "items": {
    "type": "Link",
    "validations": [
      {
        "linkContentType": [
          "person"
        ]
      }
    ],
    "linkType": "Entry"
  }
}
const endDate = {
  "id": "endDate",
  "name": "End Date",
  "type": "Date",
  "localized": false,
  "required": false,
  "validations": [],
  "disabled": false,
  "omitted": false
}
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
const externalUrl = {
  "id": "externalUrl",
  "name": "External URL",
  ...shortTextOptional,
}
const eyebrow = {
  "id": "eyebrow",
  "name": "Eyebrow",
  ...shortTextOptional,
}
const featuredArtwork = {
  "id": "featuredArtwork",
  "name": "Featured Artwork",
  "type": "Array",
  "localized": false,
  "required": false,
  "validations": [
    {
      "size": {
        "max": 12
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
          "artwork"
        ]
      }
    ],
    "linkType": "Entry"
  }
}
const finePrint = {
  "id": "finePrint",
  "name": "Fine Print",
  ...longText,
}
const fullImage = {
  "id": "fullImage",
  "name": "Full Image",
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
const gallery = {
  "id": "gallery",
  "name": "Gallery",
  "type": "Array",
  "localized": false,
  "required": false,
  "validations": [],
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
const givenNames = {
  "id": "givenNames",
  "name": "Given Names",
  ...shortTextOptional,
}
const grid = {
  "id": "grid",
  "name": "Grid",
  "type": "Array",
  "localized": false,
  "required": false,
  "validations": [],
  "disabled": false,
  "omitted": false,
  "items": {
    "type": "Link",
    "validations": [
      {
        "linkContentType": [
          "person"
        ]
      }
    ],
    "linkType": "Entry"
  }
}
const heading = {
  "id": "heading",
  "name": "Heading",
  ...shortTextOptional,
}
const hero = {
  "id": "hero",
  "name": "Hero",
  "type": "Link",
  "localized": false,
  "required": true,
  "validations": [
    {
      "linkContentType": [
        "heroSection"
      ]
    }
  ],
  "disabled": false,
  "omitted": false,
  "linkType": "Entry"
}
const heroCaption = {
  "id": "heroCaption",
  "name": "Hero Caption",
  ...shortTextOptional,
}
const heroImage = {
  "id": "heroImage",
  "name": "Hero Image",
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
const icon = {
  "id": "icon",
  "name": "Icon",
  "type": "Symbol",
  "localized": false,
  "required": true,
  "validations": [
    {
      "in": [
        "Arrow",
        "External",
        "None"
      ]
    }
  ],
  "defaultValue": {
    "en-US": "Arrow"
  },
  "disabled": false,
  "omitted": false
}
const image = {
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
    }
  ],
  "disabled": false,
  "omitted": false,
  "linkType": "Asset"
}
const images = {
  "id": "images",
  "name": "Images",
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
          "image"
        ]
      }
    ],
    "linkType": "Asset"
  }
}
const imageLeft = {
  "id": "imageLeft",
  "name": "Left Image",
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
const imageRight = {
  "id": "imageRight",
  "name": "Right Image",
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
const invertColors = {
  "id": "invertColors",
  "name": "Invert Colors",
  "type": "Boolean",
  "localized": false,
  "required": false,
  "validations": [],
  "defaultValue": {
    "en-US": false
  },
  "disabled": false,
  "omitted": false
}
const isArtist = {
  "id": "isArtist",
  "name": "Is Artist",
  "type": "Boolean",
  "localized": false,
  "required": false,
  "validations": [],
  "defaultValue": {
    "en-US": true
  },
  "disabled": false,
  "omitted": false
}
const location = {
  "id": "location",
  "name": "Location",
  "type": "Text",
  "localized": false,
  "required": false,
  "validations": [
    {
      "size": {
        "max": 250
      }
    }
  ],
  "disabled": false,
  "omitted": false
}
const locationIsAddress = {
  "id": "locationIsAddress",
  "name": "Location Is Address",
  "type": "Boolean",
  "localized": false,
  "required": false,
  "validations": [],
  "disabled": false,
  "omitted": false
}
const mainImage = {
  "id": "mainImage",
    "name": "Main Image",
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
const moreInfo = {
  "id": "moreInfo",
  "name": "More Info",
  ...longText,
}
const name = {
  "id": "name",
  "name": "Name",
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
const navSlides = {
  "id": "navSlides",
  "name": "Nav Slides",
  "type": "Array",
  "localized": false,
  "required": false,
  "validations": [
    {
      "size": {
        "max": 10
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
          "textSlide"
        ]
      }
    ],
    "linkType": "Entry"
  }
}
const pageSlides = {
  "id": "pageSlides",
  "name": "Page Slides",
  "type": "Array",
  "localized": false,
  "required": false,
  "validations": [],
  "disabled": false,
  "omitted": false,
  "items": {
    "type": "Link",
    "validations": [
      {
        "linkContentType": [
          "artwork",
          "collection",
          "exhibition",
          "page"
        ]
      }
    ],
    "linkType": "Entry"
  }
}
const postface = {
  "id": "postface",
  "name": "Postface",
  ...longText,
}
const preface = {
  "id": "preface",
  "name": "Preface",
  ...longText,
}
const preview = {
  "id": "preview",
  "name": "Preview",
  "type": "Array",
  "localized": false,
  "required": false,
  "validations": [
    {
      "size": {
        "max": 10
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
          "artwork"
        ]
      }
    ],
    "linkType": "Entry"
  }
}
const quote = {
  "id": "quote",
  "name": "Quotation",
  ...longText,
}
const relatedArtwork = {
  "id": "relatedArtwork",
  "name": "Related Artwork",
  "type": "Array",
  "localized": false,
  "required": false,
  "validations": [],
  "disabled": false,
  "omitted": false,
  "items": {
    "type": "Link",
    "validations": [
      {
        "linkContentType": [
          "artwork"
        ]
      }
    ],
    "linkType": "Entry"
  }
}
const sectionImage = {
  "id": "sectionImage",
  "name": "Section Image",
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
const sections = {
  "id": "sections",
  "name": "Sections",
  "type": "Array",
  "localized": false,
  "required": false,
  "validations": [
    {
      "size": {
        "max": 15
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
          "contentBlock",
          "contentGroupSection",
          "heroSection",
          "heroSlideshow",
          "hoursAndLocationHero",
          "slideshowSection",
          "statGroupSection"
        ]
      }
    ],
    "linkType": "Entry"
  }
}
const seo = {
  "id": "seo",
  "name": "SEO",
  "type": "Link",
  "localized": false,
  "required": false,
  "validations": [
    {
      "linkContentType": [
        "seo"
      ]
    }
  ],
  "disabled": false,
  "omitted": false,
  "linkType": "Entry"
}
const showArrow = {
  "id": "showArrow",
  "name": "Show Arrow",
  "type": "Boolean",
  "localized": false,
  "required": false,
  "validations": [],
  "defaultValue": {
    "en-US": true
  },
  "disabled": false,
  "omitted": false
}
const similarArtwork = {
  "id": "similarArtwork",
    "name": "Similar Artwork",
    "type": "Array",
    "localized": false,
    "required": false,
    "validations": [
    {
      "size": {
        "max": 10
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
          "artwork"
        ]
      }
    ],
      "linkType": "Entry"
  }
}
const slidesHero = {
  "id": "slides",
  "name": "Slides",
  "type": "Array",
  "localized": false,
  "required": false,
  "validations": [],
  "disabled": false,
  "omitted": false,
  "items": {
    "type": "Link",
    "validations": [
      {
        "linkContentType": [
          "heroSlide"
        ]
      }
    ],
    "linkType": "Entry"
  }
}
const slidesImage = {
  "id": "slides",
  "name": "Slides",
  "type": "Array",
  "localized": false,
  "required": false,
  "validations": [],
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
const slug = {
  "id": "slug",
  "name": "Slug",
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
const splitView = {
  "id": "splitView",
    "name": "Split View",
    "type": "Boolean",
    "localized": false,
    "required": false,
    "validations": [],
    "defaultValue": {
    "en-US": true
  },
  "disabled": false,
    "omitted": false
}
const startDate = {
  "id": "startDate",
  "name": "Start Date",
  "type": "Date",
  "localized": false,
  "required": false,
  "validations": [],
  "disabled": false,
  "omitted": false
}
const stats = {
  "id": "stats",
  "name": "Stats",
  "type": "Array",
  "localized": false,
  "required": true,
  "validations": [
    {
      "size": {
        "max": 5
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
          "statistic"
        ]
      }
    ],
    "linkType": "Entry"
  }
}
const subheading = {
  "id": "subheading",
  "name": "Subheading",
  ...shortTextOptional,
}
const subtitle = {
  "id": "subtitle",
  "name": "Subtitle",
  ...shortTextOptional,
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
const text = {
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
const theme = {
  "id": "theme",
  "name": "Theme",
  "type": "Symbol",
  "localized": false,
  "required": false,
  "validations": [
    {
      "in": [
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
    }
  ],
  "disabled": false,
  "omitted": false
}
const themeBackground = {
  "id": "themeBackground",
    "name": "Theme Background",
    "type": "Boolean",
    "localized": false,
    "required": false,
    "validations": [],
    "defaultValue": {
    "en-US": false
  },
  "disabled": false,
    "omitted": false
}
const thumbnail = {
  "id": "thumbnail",
  "name": "Thumbnail",
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
const title = {
  "id": "title",
  "name": "Title",
  ...shortTextOptional,
}
const titleBreaking = {
  "id": "title",
  "name": "Title",
  "type": "Text",
  "localized": false,
  "required": true,
  "validations": [
    {
      "size": {
        "max": 250
      }
    }
  ],
  "disabled": false,
  "omitted": false
}
const titleImage = {
  "id": "titleImage",
  "name": "Title Image",
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
const viewCollectionCta = {
  "id": "viewCollectionCta",
  "name": "View Collection CTA",
  ...shortTextOptional,
}
const viewSimilarCta = {
  "id": "viewSimilarCta",
  "name": "View Similar CTA",
  ...shortTextOptional,
}
const whatToExpect = {
  "id": "whatToExpect",
  "name": "What to Expect",
  ...longText,
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
  description,
  descriptionLong,
  descriptionShort,
  details,
  directoryArray,
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
  text,
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
