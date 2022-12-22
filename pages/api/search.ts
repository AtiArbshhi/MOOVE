// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import database from '../../lib/search/database.json';
import { IProduct } from '../../lib/search/types';

interface IApiSearchRequest extends NextApiRequest {
  body: { searchTerm?: string };
}

export type IApiSearchResponseData = IProduct[];

export default function handler(
  req: IApiSearchRequest,
  res: NextApiResponse<IApiSearchResponseData>
) {
  const {
    body: { searchTerm },
  } = req;

  if (req.method === 'POST' && searchTerm && searchTerm.length > 0) {
    const searchPattern = new RegExp(searchTerm, 'i');

    const filteredResults = database.filter((result) => {
      return searchPattern.test(result.title);
    });
    res.status(200).json(filteredResults);
  } else {
    res.status(400).json([]);
  }
}
