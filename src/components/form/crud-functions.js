import superagent from 'superagent';
import isUrl from 'validator/lib/isURL';

export async function CRUD(url, method, params, id) {
  let parsed = parseParams(params);
  let response = '';

  // if(isUrl(url)){
    switch (method) {
      case 'GET':
        response = await getUrl(url);
        break;
      case 'POST':
        response = await postUrl(url, parsed);
        break;
      case 'UPDATE':
        response = await updateUrl(url, parsed, id);
        break;
      case 'DELETE':
        response = await deleteUrl(url, id);
        break;
      default:
        throw new Error('Invalid Method');
    }
  // } else {
  //   throw new Error('Invalid URL');
  // }

  let contentType = response.headers["content-type"];
  if (contentType && contentType.indexOf("application/json") !== -1) {
    return response.body;
  } else {
    throw new Error('Invalid Response not a JSON');
  }
}

function parseParams(params) {
  if (params) {
    try {
      let obj = {};
      console.log(params);
      obj = JSON.parse(params);
      console.log(obj);
      return obj;
    } catch (e) {
      throw new Error('Bad Object Params');
    }
  }
}

async function getUrl(url) {
  let response = await superagent.get(url);
  return response;
}

async function postUrl(url, params) {
  let response = await superagent.post(url).send(params);
  return response;
}

async function updateUrl(url, params, id) {
  let response = await superagent.put(url + `${id}`).send(params);
  return response;
}

async function deleteUrl(url, id) {
  let response = await superagent.delete(url + `${id}`);
  return response;
}
