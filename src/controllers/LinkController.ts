import { Request, Response } from 'express';

import Link from '../schemas/Link';

class LinkController {
  async store(req: Request, res: Response) {
    const link = await Link.create(req.body);
    return res.json(link)
  }

  async redirect(req: Request, res: Response) {
    const { id } = req.params;
    const result = await Link.findById(id).select("link");
    return res.redirect(result.link);
  }

  async show(req: Request, res: Response) {
    const result = await Link.find();
    return res.json(result);
  }
}

export default new LinkController;