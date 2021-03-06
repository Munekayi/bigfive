import { writeFile } from "fs/promises";
import { nanoid } from "nanoid";
import config from "../../config";

async function Save(request, response) {
  const payload = await request.body;
  const filename = `${config.directory}/${nanoid()}.json`;
  await writeFile(filename, JSON.stringify(payload, null, 2), "utf8");
  response.status(200).json({ success: true });
}

export default Save;
