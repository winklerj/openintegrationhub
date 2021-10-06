import Koa from 'koa';
import KoaRouter from 'koa-router';
import { Server } from 'http';
import { Logger, ConfigStore } from 'backend-commons-lib';
import healthcheck from './routes/healthcheck';
import snapshots from './routes/snapshots';
import koaBunyanLogger from 'koa-bunyan-logger';
import { koaSwagger } from 'koa2-swagger-ui';
import errorResponder from './middleware/error-responder';
import * as path from 'path';
import koaQs from 'koa-qs';

export interface IServerOptions {
    config: ConfigStore;
    logger: Logger;
}

export default class ObjectServer {
    private readonly koa: Koa;
    private readonly api: KoaRouter;
    // @ts-ignore
    private server: Server;
    private logger: Logger;

    public constructor({logger}: IServerOptions) {
        this.api = new KoaRouter();
        this.koa = new Koa();
        this.logger = logger;

        koaQs(this.koa);

        this.api
            .get('/', ctx => ctx.body = 'Snapshots Service')
            .use('/healthcheck', healthcheck([{
                async healthcheck(): Promise<void> {
                }
            }]))
            .use('/snapshots', snapshots());

        const swaggerUI = koaSwagger({
            routePrefix: '/api-docs',
            swaggerOptions: {
                spec: require(path.join(__dirname, '../docs/swagger/openapi.json'))
            },
        });

        this.koa
            .use(koaBunyanLogger(this.logger))
            .use(koaBunyanLogger.requestIdContext())
            .use(koaBunyanLogger.requestLogger())
            .use(errorResponder)
            .use(this.api.routes())
            .use(this.api.allowedMethods())
            .use(swaggerUI);
    }

    public get serverCallback(): Function {
        return this.koa.callback();
    }

    public listen(port: number) {
        this.logger.info('Going to start server');
        this.server = this.koa.listen(port);
        this.logger.info({port}, 'Server listening');
    }

    public close(): void {
        if (this.server) {
            this.server.close();
        }
    }
}
