import { z } from "zod";

const schemaStorageGetParams = z.object({
  key: z.string(),
  storeId: z.string().optional(),
});

const schemaStorageGetResults = z.object({
  value: z.string().optional(),
});

export const schemaStorageGet = {
  params: schemaStorageGetParams,
  result: schemaStorageGetResults,
};

export type StorageGet = {
  params: z.infer<typeof schemaStorageGetParams>;
  result: z.infer<typeof schemaStorageGetResults>;
};

export type StorageGetHandler = (
  params: StorageGet["params"]
) => StorageGet["result"];
