import { getAddress, isAddress } from 'viem'
import { createTask } from "~/server/utils/tasks.js";

export default defineEventHandler(async (event) => {
  const hostname = getHeader(event, "x-appengine-default-version-hostname");
  const nftAddressRaw = getQuery(event)['nft_address'] as string;
  const nftAddress = getAddress(nftAddressRaw);
  let scope = getQuery(event).scope as string;

  if (!nftAddress || !isAddress(nftAddress)) {
    return { error: "nft_address is required", code: 400 };
  }

  if (!scope) {
    scope = "all"; // fetch all collection data from blockchain
  }

  const taskUrl = `https://${hostname}/api/task/update-collection?nft_address=${nftAddress}&scope=${scope}`;
  console.log(`Running the following task: ${taskUrl}`);
  
  if (!process.env.MYLOCALHOST) {
    createTask(taskUrl);
  }

  return { success: true, code: 200 };
});