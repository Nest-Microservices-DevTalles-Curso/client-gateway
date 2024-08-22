"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_1 = require("./config");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const logger = new common_1.Logger('MAIN-GATEWAY');
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api');
    await app.listen(config_1.envs.port);
    logger.log(`Gateway running on port ${config_1.envs.port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map