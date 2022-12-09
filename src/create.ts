import dotenv from 'dotenv'
import { promises } from 'fs'
import library from './library/fields.js'
import contentful, {ContentFields, ContentTypeProps, KeyValueMap} from 'contentful-management'

dotenv.config({path: '.env'})

const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN
const spaceId = process.env.CONTENTFUL_SPACE_ID
const environmentId = process.env.CONTENTFUL_ENVIRONMENT
const jsonFilePath = './json/fields.json'

const scopedPlainClient = contentful.createClient(
  {
    accessToken,
  },
  {
    type: 'plain',
    defaults: {
      spaceId,
      environmentId,
    },
  }
)

const data = <object>await promises.readFile(jsonFilePath).catch((err) => console.error('Failed to read file', err))
type ObjectKey = keyof typeof library
const obj: {
  name: string
  description: string
  displayField: string
  fields: ObjectKey[]
  sys: {
    id: string
  }
} = JSON.parse(data.toString())
const { sys, fields, displayField, name, description } = obj
const contentTypeId = sys?.id

interface EntriesType extends ContentTypeProps {
  status?: any
}

if (contentTypeId) {
  const entries = await scopedPlainClient.contentType.get({
    contentTypeId
  }).catch((error) => {
    const err = JSON.parse(error?.message)
    return { status: err?.status, message: err?.message }
  })

  const error = entries as {
    status?: any
    message?: string
  }
  if (error?.status === 404) {
    // create the content type if contentTypeId doesn't exist
    console.log('Creating new contentType...')
    const dataFields = []
    fields?.forEach((field) => {
      let f = <ContentFields | ContentFields[]>library[field]
      if (f instanceof Array) {
        f.forEach((x: ContentFields) => {
          dataFields.push(x)
        })
      } else {
        dataFields.push(f)
      }
    })
    console.log(JSON.stringify(dataFields))
    const res = await scopedPlainClient.contentType.createWithId({ contentTypeId },
      {
        name,
        description,
        displayField,
        fields: dataFields,
      }
    )
    if (res) {
      console.log(JSON.stringify(res))
    }
  } else if (error?.status) {
    // do nothing at all
    console.log(`Error status: ${error.status}`)
    console.log(`Error message: ${error.message}`)
  } else {
    // todo: perhaps try to update here (or not...if it's too dangerous)
    console.log('type exists already')
  }
} else {
  console.log('contentTypeId not specified')
}