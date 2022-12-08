import dotenv from 'dotenv';
import { promises } from 'fs';
import contentful from 'contentful-management';
dotenv.config({ path: '.env' });
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
const spaceId = process.env.CONTENTFUL_SPACE_ID;
const environmentId = process.env.CONTENTFUL_ENVIRONMENT;
const jsonFilePath = './json/fields.json';
const scopedPlainClient = contentful.createClient({
    accessToken,
}, {
    type: 'plain',
    defaults: {
        spaceId,
        environmentId,
    },
});
const data = await promises.readFile(jsonFilePath).catch((err) => console.error('Failed to read file', err));
const obj = JSON.parse(data.toString());
const { sys, fields, displayField, name, description } = obj;
const contentTypeId = sys === null || sys === void 0 ? void 0 : sys.id;
if (contentTypeId) {
    const entries = await scopedPlainClient.contentType.get({
        contentTypeId
    }).catch((error) => {
        const err = JSON.parse(error === null || error === void 0 ? void 0 : error.message);
        return { status: err === null || err === void 0 ? void 0 : err.status, message: err === null || err === void 0 ? void 0 : err.message };
    });
    const error = entries;
    if ((error === null || error === void 0 ? void 0 : error.status) === 404) {
        // create the content type if contentTypeId doesn't exist
        console.log('Create new contentType...');
        // const res = await scopedPlainClient.contentType.createWithId({ contentTypeId },
        //   {
        //     name,
        //     description,
        //     displayField,
        //     fields,
        //   }
        // )
        // if (res) {
        //   console.log(JSON.stringify(res))
        // }
    }
    else if (error === null || error === void 0 ? void 0 : error.status) {
        // do nothing at all
        console.log(`Error status: ${error.status}`);
        console.log(`Error message: ${error.message}`);
    }
    else {
        // todo: perhaps try to update here (or not...if it's too dangerous)
        console.log('type exists already');
    }
}
else {
    console.log('contentTypeId not specified');
}
//# sourceMappingURL=create.js.map