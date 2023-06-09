import { IMiddleware } from './middleware.interface';
import { NextFunction, Request, Response } from 'express';

export class AuthGuard implements IMiddleware {
	execute(req: Request, res: Response, next: NextFunction) {
		if (req.user) {
			return next();
		} else {
			res.status(401).send({ error: 'Вы не авторизованы' });
		}
	}
}
