import { Format } from "../types/Resource";
import Papa from "papaparse";

async function parseResources(resource: string, header: Boolean) {
  const csvFile = await fetch(resource).then((res) => res.text());
  const parsedFile = Papa.parse(csvFile, { header: header });
  const obj = parsedFile.data;

  return obj;
}

export async function resourceGetter(resource: any, header?: Boolean) {
  const file = await parseResources(resource, header);
  return file;
}
